// Daily Wisdom — maps each calendar date to a stable quote and lets you
// browse previous days. The mapping is deterministic, so a given date always
// shows the same quote (for everyone), and "the past" stays consistent.

(function () {
  "use strict";

  var MS_PER_DAY = 24 * 60 * 60 * 1000;
  var EPOCH = Date.UTC(2024, 0, 1); // fixed reference point for day numbering
  var STRIP_DAYS = 7; // how many day chips to show at once

  var quoteDateEl = document.getElementById("quoteDate");
  var quoteTextEl = document.getElementById("quoteText");
  var quoteAuthorEl = document.getElementById("quoteAuthor");
  var dayStripEl = document.getElementById("dayStrip");
  var prevBtn = document.getElementById("prevDay");
  var nextBtn = document.getElementById("nextDay");
  var todayBtn = document.getElementById("todayBtn");

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

  // Deterministic, well-distributed index into QUOTES for a given day number.
  function quoteIndexForDay(day) {
    var n = QUOTES.length;
    // A small linear-congruential style scramble so consecutive days don't
    // simply walk the list in order, while staying fully deterministic.
    var scrambled = ((day * 2654435761) % 4294967296 + 4294967296) % 4294967296;
    return scrambled % n;
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

  function renderQuote(day) {
    var q = QUOTES[quoteIndexForDay(day)];
    var dateMs = EPOCH + day * MS_PER_DAY;

    quoteDateEl.textContent = formatLongDate(dateMs);
    quoteTextEl.textContent = q.text;
    quoteAuthorEl.textContent = q.author || "";

    // Re-trigger the fade-in animation on each change.
    var parchment = document.getElementById("parchment");
    parchment.style.animation = "none";
    // Force reflow so the animation can restart.
    void parchment.offsetWidth;
    parchment.style.animation = "";
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
      if (day === selectedDay) {
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
    // No future browsing: disable "next" once we're at today.
    nextBtn.disabled = selectedDay >= todayDay;
    todayBtn.style.visibility = selectedDay === todayDay ? "hidden" : "visible";
  }

  function select(day) {
    if (day > todayDay) day = todayDay;
    selectedDay = day;
    renderQuote(day);
    renderStrip();
    updateNav();
  }

  prevBtn.addEventListener("click", function () {
    select(selectedDay - 1);
  });
  nextBtn.addEventListener("click", function () {
    select(selectedDay + 1);
  });
  todayBtn.addEventListener("click", function () {
    select(todayDay);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") select(selectedDay - 1);
    if (e.key === "ArrowRight") select(selectedDay + 1);
  });

  // Initial render.
  select(todayDay);
})();
