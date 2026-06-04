// Daily Wisdom — shows a stable quote for each calendar day and lets you
// browse the past, draw a random quote from the library, or summon a fresh
// AI-generated one. The daily mapping is a deterministic shuffled permutation,
// so every quote appears exactly once before any repeats — guaranteeing a
// unique quote for every day of a 365-day year (the library holds 372).

(function () {
  "use strict";

  var MS_PER_DAY = 24 * 60 * 60 * 1000;
  var EPOCH = Date.UTC(2024, 0, 1); // fixed reference point for day numbering
  var STRIP_DAYS = 7; // how many day chips to show at once
  var AI_ENDPOINT = "/.netlify/functions/generate-quote";

  var quoteDateEl = document.getElementById("quoteDate");
  var quoteTextEl = document.getElementById("quoteText");
  var quoteAuthorEl = document.getElementById("quoteAuthor");
  var dayStripEl = document.getElementById("dayStrip");
  var prevBtn = document.getElementById("prevDay");
  var nextBtn = document.getElementById("nextDay");
  var todayBtn = document.getElementById("todayBtn");
  var randomBtn = document.getElementById("randomBtn");
  var aiBtn = document.getElementById("aiBtn");
  var parchmentEl = document.getElementById("parchment");

  // ----- Deterministic shuffled permutation of quote indices -----
  // A fixed seed means every visitor gets the same shuffle, so a given date
  // always maps to the same quote. Walking the permutation by day number means
  // all N quotes are shown once before any repeat.
  function mulberry32(seed) {
    return function () {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function buildPermutation(n) {
    var order = [];
    for (var i = 0; i < n; i++) order.push(i);
    var rand = mulberry32(0x9e3779b9); // fixed seed -> stable shuffle
    for (var j = n - 1; j > 0; j--) {
      var k = Math.floor(rand() * (j + 1));
      var tmp = order[j];
      order[j] = order[k];
      order[k] = tmp;
    }
    return order;
  }

  var PERMUTATION = buildPermutation(QUOTES.length);

  // Map a Date to its LOCAL calendar date, encoded as a UTC-midnight
  // timestamp. Using the local Y/M/D (not the UTC ones) means the "today"
  // shown matches the viewer's actual date, regardless of timezone; encoding
  // it as UTC midnight keeps day-number math and UTC-based formatting aligned.
  function calendarDayMs(d) {
    return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  }

  // Whole days between EPOCH and the given date (can be negative pre-epoch).
  function dayNumber(dateMs) {
    return Math.floor((dateMs - EPOCH) / MS_PER_DAY);
  }

  // Stable quote index for a given day via the shuffled permutation.
  function quoteIndexForDay(day) {
    var n = QUOTES.length;
    var pos = ((day % n) + n) % n;
    return PERMUTATION[pos];
  }

  function formatLongDate(dateMs) {
    return new Date(dateMs).toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  }

  var todayDay = dayNumber(calendarDayMs(new Date()));
  var selectedDay = todayDay;
  var mode = "daily"; // "daily" | "random" | "ai"

  // Restart the parchment fade-in animation on each change.
  function flash() {
    parchmentEl.style.animation = "none";
    void parchmentEl.offsetWidth; // force reflow
    parchmentEl.style.animation = "";
  }

  // Generic renderer: an eyebrow label, the quote text, and an author line.
  function showQuote(label, text, author) {
    quoteDateEl.textContent = label;
    quoteTextEl.textContent = text;
    quoteAuthorEl.textContent = author || "";
    flash();
  }

  function renderDaily(day) {
    var q = QUOTES[quoteIndexForDay(day)];
    showQuote(formatLongDate(EPOCH + day * MS_PER_DAY), q.text, q.author);
  }

  function renderStrip() {
    dayStripEl.innerHTML = "";

    // Center the selected day within the strip, but never show the future.
    var half = Math.floor(STRIP_DAYS / 2);
    var end = Math.min(selectedDay + half, todayDay);
    var start = end - (STRIP_DAYS - 1);

    for (var day = start; day <= end; day++) {
      var dateMs = EPOCH + day * MS_PER_DAY;
      var d = new Date(dateMs);

      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "day-chip";
      chip.setAttribute("role", "tab");
      // Only highlight the active day while actually in daily mode.
      if (mode === "daily" && day === selectedDay) {
        chip.classList.add("day-chip--active");
        chip.setAttribute("aria-selected", "true");
      }
      if (day === todayDay) {
        chip.classList.add("day-chip--today");
      }

      var dow = d.toLocaleDateString(undefined, {
        weekday: "short",
        timeZone: "UTC",
      });
      var num = d.toLocaleDateString(undefined, {
        day: "numeric",
        timeZone: "UTC",
      });
      var mon = d.toLocaleDateString(undefined, {
        month: "short",
        timeZone: "UTC",
      });

      chip.innerHTML =
        '<span class="day-chip__dow">' +
        dow +
        "</span>" +
        '<span class="day-chip__num">' +
        num +
        "</span>" +
        '<span class="day-chip__mon">' +
        mon +
        "</span>";

      (function (targetDay) {
        chip.addEventListener("click", function () {
          select(targetDay);
        });
      })(day);

      dayStripEl.appendChild(chip);
    }
  }

  function updateNav() {
    // No future browsing: disable "next" once we're at today in daily mode.
    nextBtn.disabled = mode === "daily" && selectedDay >= todayDay;
    // "Return to Today" shows whenever we're not on today's daily quote.
    var onToday = mode === "daily" && selectedDay === todayDay;
    todayBtn.style.visibility = onToday ? "hidden" : "visible";
  }

  // Switch to a specific calendar day (daily mode).
  function select(day) {
    if (day > todayDay) day = todayDay;
    mode = "daily";
    selectedDay = day;
    renderDaily(day);
    renderStrip();
    updateNav();
  }

  // Draw a random quote from the library (independent of the date).
  function showRandom() {
    mode = "random";
    var q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    showQuote("From the library", q.text, q.author);
    renderStrip();
    updateNav();
  }

  // Summon a fresh AI-generated quote from the Netlify function.
  function showAI() {
    mode = "ai";
    aiBtn.disabled = true;
    aiBtn.classList.add("is-loading");
    var original = aiBtn.textContent;
    aiBtn.textContent = "Summoning…";
    showQuote("Generating…", "The muse is composing your words…", "");
    renderStrip();
    updateNav();

    fetch(AI_ENDPOINT, { method: "POST" })
      .then(function (res) {
        if (!res.ok) throw new Error("Request failed (" + res.status + ")");
        return res.json();
      })
      .then(function (data) {
        if (!data || !data.text) throw new Error("Empty response");
        showQuote("✨ Freshly generated", data.text, data.author || "");
      })
      .catch(function (err) {
        showQuote(
          "✨ AI quote unavailable",
          "The AI muse couldn't be reached just now. This feature needs the Netlify function and an ANTHROPIC_API_KEY to be configured — see the README.",
          ""
        );
        if (window.console) console.error("AI quote error:", err);
      })
      .then(function () {
        aiBtn.disabled = false;
        aiBtn.classList.remove("is-loading");
        aiBtn.textContent = original;
      });
  }

  prevBtn.addEventListener("click", function () {
    select((mode === "daily" ? selectedDay : todayDay) - 1);
  });
  nextBtn.addEventListener("click", function () {
    select((mode === "daily" ? selectedDay : todayDay) + 1);
  });
  todayBtn.addEventListener("click", function () {
    select(todayDay);
  });
  randomBtn.addEventListener("click", showRandom);
  aiBtn.addEventListener("click", showAI);

  document.addEventListener("keydown", function (e) {
    var base = mode === "daily" ? selectedDay : todayDay;
    if (e.key === "ArrowLeft") select(base - 1);
    if (e.key === "ArrowRight") select(base + 1);
  });

  // Initial render.
  select(todayDay);
})();
