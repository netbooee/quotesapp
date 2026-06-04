// A curated collection of deep, meaningful two-sentence quotes.
// Each entry is { text, author }. Author is null when unknown.
// Quotes are mapped deterministically to calendar dates in app.js,
// so each day shows a stable quote and past days can be browsed.

const QUOTES = [
  {
    text: "Your time is limited, so don't waste it living someone else's life. Don't let the noise of others' opinions drown out your own inner voice.",
    author: "Steve Jobs",
  },
  {
    text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking and don't settle.",
    author: "Steve Jobs",
  },
  {
    text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    author: "Bill Gates",
  },
  {
    text: "Patience is a key element of success. Most people give up right before the breakthrough.",
    author: "Bill Gates",
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
    author: "Aristotle",
  },
  {
    text: "Knowing yourself is the beginning of all wisdom. The unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    text: "You have power over your mind, not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
  },
  {
    text: "The happiness of your life depends upon the quality of your thoughts. Dwell on the beauty of life, and watch the stars.",
    author: "Marcus Aurelius",
  },
  {
    text: "We suffer more often in imagination than in reality. It is not events that disturb us, but our judgments about them.",
    author: "Seneca",
  },
  {
    text: "It is not that we have a short time to live, but that we waste a lot of it. Life is long enough if you know how to use it.",
    author: "Seneca",
  },
  {
    text: "The journey of a thousand miles begins with a single step. Do the difficult things while they are easy.",
    author: "Lao Tzu",
  },
  {
    text: "Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.",
    author: "Lao Tzu",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop. Our greatest glory is in rising every time we fall.",
    author: "Confucius",
  },
  {
    text: "Everything has beauty, but not everyone sees it. Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "Whether you think you can, or you think you can't, you're right. The man who does not read has no advantage over the man who cannot read.",
    author: "Henry Ford",
  },
  {
    text: "Whatever you can do, or dream you can, begin it. Boldness has genius, power, and magic in it.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts. If you're going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    text: "Life is what happens when you're busy making other plans. There are only two ways to live your life: as though nothing is a miracle, or as though everything is.",
    author: "John Lennon",
  },
  {
    text: "In the middle of difficulty lies opportunity. A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    text: "Strive not to be a success, but rather to be of value. The world as we have created it is a process of our thinking.",
    author: "Albert Einstein",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams. It is during our darkest moments that we must focus to see the light.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "No one can make you feel inferior without your consent. You must do the thing you think you cannot do.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Darkness cannot drive out darkness; only light can do that. The time is always right to do what is right.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "Faith is taking the first step even when you don't see the whole staircase. Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "It always seems impossible until it's done. The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "Education is the most powerful weapon which you can use to change the world. May your choices reflect your hopes, not your fears.",
    author: "Nelson Mandela",
  },
  {
    text: "Be the change that you wish to see in the world. The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    text: "The two most important days in your life are the day you are born and the day you find out why. Whatever you are, be a good one.",
    author: "Mark Twain",
  },
  {
    text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. Explore, dream, discover.",
    author: "Mark Twain",
  },
  {
    text: "Do what you can, with what you have, where you are. Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Nothing in the world is worth having or worth doing unless it means effort, pain, difficulty. Far and away the best prize that life offers is the chance to work hard at work worth doing.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The best way to predict the future is to invent it. People who are crazy enough to think they can change the world are the ones who do.",
    author: "Alan Kay",
  },
  {
    text: "Your most unhappy customers are your greatest source of learning. The Internet is becoming the town square for the global village of tomorrow.",
    author: "Bill Gates",
  },
  {
    text: "If you are working on something exciting that you really care about, you don't have to be pushed. The vision pulls you.",
    author: "Steve Jobs",
  },
  {
    text: "When something is important enough, you do it even if the odds are not in your favor. Persistence is very important; you should not give up unless you are forced to give up.",
    author: "Elon Musk",
  },
  {
    text: "Some people don't like change, but you need to embrace change if the alternative is disaster. Failure is an option here; if things are not failing, you are not innovating enough.",
    author: "Elon Musk",
  },
  {
    text: "It's fine to celebrate success, but it is more important to heed the lessons of failure. Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
  },
  {
    text: "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
  },
  {
    text: "Done is better than perfect. Move fast and build things that last.",
    author: "Mark Zuckerberg",
  },
  {
    text: "If you really look closely, most overnight successes took a long time. There's an enormous difference between great opportunity and just another job.",
    author: "Steve Jobs",
  },
  {
    text: "I have not failed. I've just found ten thousand ways that won't work.",
    author: "Thomas Edison",
  },
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration. Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    author: "Thomas Edison",
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
  },
  {
    text: "He who has a why to live can bear almost any how. That which does not kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "Out of chaos comes order. You must have chaos within you to give birth to a dancing star.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "The cave you fear to enter holds the treasure you seek. We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    author: "Joseph Campbell",
  },
  {
    text: "The privilege of a lifetime is to become who you truly are. Follow your bliss and the universe will open doors where there were only walls.",
    author: "Joseph Campbell",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals. The way to get started is to quit talking and begin doing.",
    author: "Zig Ziglar",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today. The future is built by those who act despite uncertainty.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Quality is not an act, it is a habit. We are what we repeatedly do.",
    author: "Will Durant",
  },
  {
    text: "If you want to lift yourself up, lift up someone else. Few things help an individual more than to place responsibility upon him, and to let him know that you trust him.",
    author: "Booker T. Washington",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny. Difficult roads often lead to beautiful destinations.",
    author: "C.S. Lewis",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream. Integrity is doing the right thing, even when no one is watching.",
    author: "C.S. Lewis",
  },
  {
    text: "The most difficult thing is the decision to act, the rest is merely tenacity. Life is not about finding yourself, life is about creating yourself.",
    author: "Amelia Earhart",
  },
  {
    text: "Try to be a rainbow in someone's cloud. You may not control all the events that happen to you, but you can decide not to be reduced by them.",
    author: "Maya Angelou",
  },
  {
    text: "People will forget what you said and what you did, but people will never forget how you made them feel. Nothing will work unless you do.",
    author: "Maya Angelou",
  },
  {
    text: "The way to get started is to quit talking and begin doing. If you don't have time to do it right, when will you have time to do it over?",
    author: "Walt Disney",
  },
  {
    text: "All our dreams can come true, if we have the courage to pursue them. The difference between winning and losing is most often not quitting.",
    author: "Walt Disney",
  },
  {
    text: "Whatever the mind can conceive and believe, it can achieve. A goal is a dream with a deadline.",
    author: "Napoleon Hill",
  },
  {
    text: "Start where you are, use what you have, do what you can. It is not the critic who counts; the credit belongs to the one who is actually in the arena.",
    author: "Arthur Ashe",
  },
  {
    text: "Courage is grace under pressure. The world breaks everyone, and afterward many are strong at the broken places.",
    author: "Ernest Hemingway",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "The greatest weapon against stress is our ability to choose one thought over another. Believe that life is worth living, and your belief will help create the fact.",
    author: "William James",
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail. What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Always do what you are afraid to do. To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
  {
    text: "It's not what you look at that matters, it's what you see. Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "The future rewards those who press on. I don't have time to feel sorry for myself; I don't have time to complain.",
    author: "Barack Obama",
  },
  {
    text: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for; we are the change that we seek.",
    author: "Barack Obama",
  },
  {
    text: "When you reach the end of your rope, tie a knot in it and hang on. In the long run, we shape our lives, and we shape ourselves.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "A person who never made a mistake never tried anything new. Logic will get you from A to B; imagination will take you everywhere.",
    author: "Albert Einstein",
  },
  {
    text: "What we think, we become. All that we are arises with our thoughts; with our thoughts, we make the world.",
    author: "Buddha",
  },
  {
    text: "The obstacle is the way. What stands in the way becomes the way.",
    author: "Marcus Aurelius",
  },
  {
    text: "Waste no more time arguing about what a good person should be. Be one.",
    author: "Marcus Aurelius",
  },
  {
    text: "Discipline equals freedom. The more you sweat in training, the less you bleed in battle.",
    author: null,
  },
  {
    text: "Fall seven times, stand up eight. The bamboo that bends is stronger than the oak that resists.",
    author: null,
  },
  {
    text: "A river cuts through rock not because of its power but its persistence. Small daily improvements are the key to staggering long-term results.",
    author: null,
  },
  {
    text: "You do not rise to the level of your goals; you fall to the level of your systems. Every action you take is a vote for the type of person you wish to become.",
    author: "James Clear",
  },
  {
    text: "Be so good they can't ignore you. Passion comes after you put in the hard work to become excellent.",
    author: "Cal Newport",
  },

  // ----- Stoics & ancient philosophy -----
  {
    text: "If it is not right, do not do it; if it is not true, do not say it. Keep yourself simple, good, pure, serious, and free from affectation.",
    author: "Marcus Aurelius",
  },
  {
    text: "Confine yourself to the present. Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius",
  },
  {
    text: "The best revenge is not to be like your enemy. How much more grievous are the consequences of anger than the causes of it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Luck is what happens when preparation meets opportunity. We should every night call ourselves to an account: what infirmity have I mastered today?",
    author: "Seneca",
  },
  {
    text: "Difficulties strengthen the mind, as labor does the body. As is a tale, so is life: not how long it is, but how good it is, is what matters.",
    author: "Seneca",
  },
  {
    text: "Begin at once to live, and count each separate day as a separate life. He who is brave is free.",
    author: "Seneca",
  },
  {
    text: "Wealth consists not in having great possessions, but in having few wants. Don't explain your philosophy; embody it.",
    author: "Epictetus",
  },
  {
    text: "It's not what happens to you, but how you react to it that matters. First say to yourself what you would be, and then do what you have to do.",
    author: "Epictetus",
  },
  {
    text: "No man is free who is not master of himself. Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus",
  },
  {
    text: "The unexamined life is not worth living. There is only one good, knowledge, and one evil, ignorance.",
    author: "Socrates",
  },
  {
    text: "He who is not contented with what he has would not be contented with what he would like to have. The secret of happiness is not found in seeking more, but in developing the capacity to enjoy less.",
    author: "Socrates",
  },
  {
    text: "At the touch of love everyone becomes a poet. Wonder is the beginning of wisdom.",
    author: "Plato",
  },
  {
    text: "The first and greatest victory is to conquer yourself. Courage is knowing what not to fear.",
    author: "Plato",
  },
  {
    text: "Pleasure in the job puts perfection in the work. The energy of the mind is the essence of life.",
    author: "Aristotle",
  },
  {
    text: "Knowing yourself is the beginning of all wisdom. He who has overcome his fears will truly be free.",
    author: "Aristotle",
  },
  {
    text: "Patience is bitter, but its fruit is sweet. We must not say every mistake is a foolish one.",
    author: "Cicero",
  },
  {
    text: "A room without books is like a body without a soul. The life given us by nature is short, but the memory of a well-spent life is eternal.",
    author: "Cicero",
  },
  {
    text: "When you arise in the morning, think of what a precious privilege it is to be alive. Waste no more time arguing about what a good man should be; be one.",
    author: "Marcus Aurelius",
  },

  // ----- Eastern thought & proverbs -----
  {
    text: "Nature does not hurry, yet everything is accomplished. To the mind that is still, the whole universe surrenders.",
    author: "Lao Tzu",
  },
  {
    text: "When I let go of what I am, I become what I might be. He who knows that enough is enough will always have enough.",
    author: "Lao Tzu",
  },
  {
    text: "New beginnings are often disguised as painful endings. The whole world steps aside for the one who knows where they are going.",
    author: null,
  },
  {
    text: "The best time to plant a tree was twenty years ago; the second best time is now. A journey is best measured in friends rather than miles.",
    author: null,
  },
  {
    text: "A bend in the road is not the end of the road, unless you fail to make the turn. Fall down seven times, get up eight.",
    author: null,
  },
  {
    text: "The flower that blooms in adversity is the rarest and most beautiful of all. A gem cannot be polished without friction, nor a person perfected without trials.",
    author: null,
  },
  {
    text: "When the winds of change blow, some build walls and others build windmills. Smooth seas do not make skillful sailors.",
    author: null,
  },
  {
    text: "Vision without action is a daydream; action without vision is a nightmare. Even a journey of a thousand miles is walked one step at a time.",
    author: null,
  },
  {
    text: "A single conversation with a wise person is worth a month's study of books. Tension is who you think you should be; relaxation is who you are.",
    author: null,
  },
  {
    text: "If you want to go fast, go alone; if you want to go far, go together. The earth does not belong to us; we belong to the earth.",
    author: null,
  },
  {
    text: "He who conquers others is strong; he who conquers himself is mighty. Great acts are made up of small deeds.",
    author: "Lao Tzu",
  },
  {
    text: "Hold the door open for the next person, and the world grows a little kinder. A candle loses nothing by lighting another candle.",
    author: null,
  },
  {
    text: "The bamboo that bends is stronger than the oak that resists. Adopt the pace of nature: her secret is patience.",
    author: null,
  },
  {
    text: "When eating fruit, remember the one who planted the tree. Gratitude is the memory of the heart.",
    author: null,
  },
  {
    text: "Better to light a candle than to curse the darkness. The palest ink is more reliable than the strongest memory.",
    author: null,
  },

  // ----- Writers & poets -----
  {
    text: "There is no greater agony than bearing an untold story inside you. We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
    author: "Maya Angelou",
  },
  {
    text: "Do the best you can until you know better; then when you know better, do better. Courage is the most important of all the virtues, because without it you cannot practice any other virtue consistently.",
    author: "Maya Angelou",
  },
  {
    text: "It is never too late to be what you might have been. Begin doing what you want to do now.",
    author: "George Eliot",
  },
  {
    text: "There are years that ask questions and years that answer. You may write me down in history with your bitter, twisted lies, but still, like dust, I'll rise.",
    author: "Zora Neale Hurston",
  },
  {
    text: "You never really understand a person until you consider things from his point of view. Until you climb inside of his skin and walk around in it.",
    author: "Harper Lee",
  },
  {
    text: "Not all those who wander are lost. Even the smallest person can change the course of the future.",
    author: "J.R.R. Tolkien",
  },
  {
    text: "It is not our abilities that show what we truly are; it is our choices. Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
    author: "J.K. Rowling",
  },
  {
    text: "It does not do to dwell on dreams and forget to live. We are only as strong as we are united, as weak as we are divided.",
    author: "J.K. Rowling",
  },
  {
    text: "And, when you want something, all the universe conspires in helping you to achieve it. The secret of life, though, is to fall seven times and to get up eight times.",
    author: "Paulo Coelho",
  },
  {
    text: "People are capable, at any time in their lives, of doing what they dream of. There is only one thing that makes a dream impossible to achieve: the fear of failure.",
    author: "Paulo Coelho",
  },
  {
    text: "The world breaks everyone, and afterward, some are strong at the broken places. But those that will not break it kills.",
    author: "Ernest Hemingway",
  },
  {
    text: "There is nothing to writing; all you do is sit down at a typewriter and bleed. The best way to find out if you can trust somebody is to trust them.",
    author: "Ernest Hemingway",
  },
  {
    text: "I have learned that people will forget what you said, but they will never forget how you made them feel. Try to be a rainbow in someone's cloud.",
    author: "Maya Angelou",
  },
  {
    text: "Whatever you do, do it well. Do it so well that when people see you do it, they will want to come back and see you do it again.",
    author: "Walt Whitman",
  },
  {
    text: "Keep your face always toward the sunshine, and shadows will fall behind you. Resist much, obey little.",
    author: "Walt Whitman",
  },
  {
    text: "We are all in the gutter, but some of us are looking at the stars. To live is the rarest thing in the world; most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    text: "Be yourself; everyone else is already taken. The only way to get rid of a temptation is to yield to it.",
    author: "Oscar Wilde",
  },
  {
    text: "Tell me, what is it you plan to do with your one wild and precious life? Pay attention, be astonished, tell about it.",
    author: "Mary Oliver",
  },
  {
    text: "Hope is the thing with feathers that perches in the soul. It sings the tune without the words and never stops at all.",
    author: "Emily Dickinson",
  },
  {
    text: "Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference. In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    text: "And once the storm is over, you won't remember how you made it through. But one thing is certain: when you come out, you won't be the same person who walked in.",
    author: "Haruki Murakami",
  },
  {
    text: "You must be the person who has the talent and the willingness to do the hard, unglamorous work. The most regretful people on earth are those who felt the call to creative work and gave it neither time nor effort.",
    author: "Mary Oliver",
  },
  {
    text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
  },
  {
    text: "There is no greater thing you can do with your life and your work than follow your passions in a way that serves the world and you. Tell the truth through whichever veil comes to hand, but tell it.",
    author: "Iris Murdoch",
  },

  // ----- Scientists, inventors & thinkers -----
  {
    text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie",
  },
  {
    text: "I am among those who think that science has great beauty. A scientist in their laboratory is not a mere technician; they are also a child confronting natural phenomena that impress like a fairy tale.",
    author: "Marie Curie",
  },
  {
    text: "Look deep into nature, and then you will understand everything better. The important thing is not to stop questioning; curiosity has its own reason for existing.",
    author: "Albert Einstein",
  },
  {
    text: "Try not to become a person of success, but rather try to become a person of value. Anyone who has never made a mistake has never tried anything new.",
    author: "Albert Einstein",
  },
  {
    text: "Somewhere, something incredible is waiting to be known. We are a way for the cosmos to know itself.",
    author: "Carl Sagan",
  },
  {
    text: "For small creatures such as we, the vastness is bearable only through love. Somewhere, something incredible is waiting to be known.",
    author: "Carl Sagan",
  },
  {
    text: "It is far better to grasp the universe as it really is than to persist in delusion, however satisfying and reassuring. Extraordinary claims require extraordinary evidence.",
    author: "Carl Sagan",
  },
  {
    text: "Nothing in life is more liberating than to fight for a cause larger than yourself, something that encompasses you but is not defined by your existence alone. The good thing about science is that it's true whether or not you believe in it.",
    author: "Neil deGrasse Tyson",
  },
  {
    text: "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist.",
    author: "Stephen Hawking",
  },
  {
    text: "Intelligence is the ability to adapt to change. However difficult life may seem, there is always something you can do and succeed at.",
    author: "Stephen Hawking",
  },
  {
    text: "The science of today is the technology of tomorrow. If I have seen further, it is by standing on the shoulders of giants.",
    author: "Isaac Newton",
  },
  {
    text: "What is now proved was once only imagined. The true method of knowledge is experiment.",
    author: "William Blake",
  },
  {
    text: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. A human being should be able to do many things, and specialization is for insects.",
    author: "Isaac Asimov",
  },
  {
    text: "Somewhere, something incredible is waiting to be known. Imagination will often carry us to worlds that never were, but without it we go nowhere.",
    author: "Carl Sagan",
  },
  {
    text: "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
    author: "Albert Einstein",
  },
  {
    text: "Research is what I'm doing when I don't know what I'm doing. Above all, don't fear difficult moments; the best comes from them.",
    author: "Wernher von Braun",
  },
  {
    text: "If I have a thousand ideas and only one turns out to be good, I am satisfied. The day before something is a breakthrough, it's a crazy idea.",
    author: null,
  },

  // ----- Leaders, statesmen & activists -----
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall. As we let our own light shine, we unconsciously give other people permission to do the same.",
    author: "Nelson Mandela",
  },
  {
    text: "Do not judge me by my successes; judge me by how many times I fell down and got back up again. A good head and a good heart are always a formidable combination.",
    author: "Nelson Mandela",
  },
  {
    text: "Continuous effort, not strength or intelligence, is the key to unlocking our potential. Attitude is a little thing that makes a big difference.",
    author: "Winston Churchill",
  },
  {
    text: "To improve is to change; to be perfect is to change often. You will never reach your destination if you stop and throw stones at every dog that barks.",
    author: "Winston Churchill",
  },
  {
    text: "We make a living by what we get, but we make a life by what we give. Courage is rightly esteemed the first of human qualities, because it guarantees all the others.",
    author: "Winston Churchill",
  },
  {
    text: "Injustice anywhere is a threat to justice everywhere. We are caught in an inescapable network of mutuality, tied in a single garment of destiny.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward. The function of education is to teach one to think intensively and to think critically.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "The strength of a nation derives from the integrity of the home. A people that values its privileges above its principles soon loses both.",
    author: "Dwight D. Eisenhower",
  },
  {
    text: "Ask not what your country can do for you; ask what you can do for your country. The problems of the world cannot possibly be solved by skeptics whose horizons are limited by the obvious realities.",
    author: "John F. Kennedy",
  },
  {
    text: "Those who dare to fail miserably can achieve greatly. Things do not happen; things are made to happen.",
    author: "John F. Kennedy",
  },
  {
    text: "I am not afraid of storms, for I am learning how to sail my ship. I have never been especially impressed by the heroics of people convinced they are about to change the world.",
    author: "Louisa May Alcott",
  },
  {
    text: "You may not always have a comfortable life and you will not always be able to solve all the world's problems, but don't ever underestimate the importance you can have. History has shown us that courage can be contagious and hope can take on a life of its own.",
    author: "Michelle Obama",
  },
  {
    text: "Success isn't about how much money you make; it's about the difference you make in people's lives. There is no limit to what we, as women, can accomplish.",
    author: "Michelle Obama",
  },
  {
    text: "One child, one teacher, one book, one pen can change the world. Let us pick up our books and our pens; they are our most powerful weapons.",
    author: "Malala Yousafzai",
  },
  {
    text: "We cannot all succeed when half of us are held back. When the whole world is silent, even one voice becomes powerful.",
    author: "Malala Yousafzai",
  },
  {
    text: "Each time a person stands up for an ideal, they send forth a tiny ripple of hope. Few will have the greatness to bend history itself, but each of us can work to change a small portion of events.",
    author: "Robert F. Kennedy",
  },
  {
    text: "The ballot is stronger than the bullet. Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    text: "In the end, it's not the years in your life that count; it's the life in your years. The best way to predict your future is to create it.",
    author: "Abraham Lincoln",
  },
  {
    text: "I am only one, but I am one; I cannot do everything, but I can do something. And because I cannot do everything, I will not refuse to do the something that I can do.",
    author: "Edward Everett Hale",
  },
  {
    text: "Never doubt that a small group of thoughtful, committed citizens can change the world. Indeed, it is the only thing that ever has.",
    author: "Margaret Mead",
  },
  {
    text: "I alone cannot change the world, but I can cast a stone across the waters to create many ripples. Spread love everywhere you go; let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    text: "If you can't feed a hundred people, then feed just one. Not all of us can do great things, but we can do small things with great love.",
    author: "Mother Teresa",
  },
  {
    text: "You must not lose faith in humanity; humanity is an ocean, and a few drops of dirt cannot make it dirty. Strength does not come from physical capacity; it comes from an indomitable will.",
    author: "Mahatma Gandhi",
  },
  {
    text: "First they ignore you, then they laugh at you, then they fight you, then you win. In a gentle way, you can shake the world.",
    author: "Mahatma Gandhi",
  },

  // ----- Tech, business & innovation -----
  {
    text: "Innovation distinguishes between a leader and a follower. Sometimes life hits you in the head with a brick; don't lose faith.",
    author: "Steve Jobs",
  },
  {
    text: "Quality is more important than quantity; one home run is much better than two doubles. Details matter; it's worth waiting to get it right.",
    author: "Steve Jobs",
  },
  {
    text: "Stay hungry, stay foolish. Have the courage to follow your heart and intuition; they somehow already know what you truly want to become.",
    author: "Steve Jobs",
  },
  {
    text: "Most people never pick up the phone and call; most people never ask, and that's what separates the people who do things from the people who just dream about them. You have to act.",
    author: "Steve Jobs",
  },
  {
    text: "I think it is possible for ordinary people to choose to be extraordinary. Constantly think about how you could be doing things better and keep questioning yourself.",
    author: "Elon Musk",
  },
  {
    text: "I could either watch it happen or be a part of it. The first step is to establish that something is possible; then probability will occur.",
    author: "Elon Musk",
  },
  {
    text: "Don't be afraid to give up the good to go for the great. Whatever you choose to do, become an expert at it.",
    author: "John D. Rockefeller",
  },
  {
    text: "If you double the number of experiments you do per year, you're going to double your inventiveness. Be stubborn on vision but flexible on details.",
    author: "Jeff Bezos",
  },
  {
    text: "If you're not stubborn, you'll give up on experiments too soon; and if you're not flexible, you'll pound your head against the wall. Your brand is what other people say about you when you're not in the room.",
    author: "Jeff Bezos",
  },
  {
    text: "We need to accept that we won't always make the right decisions, that we'll screw up royally sometimes. Understanding that failure is not the opposite of success, it's part of success.",
    author: "Arianna Huffington",
  },
  {
    text: "The biggest adventure you can take is to live the life of your dreams. Success is liking yourself, liking what you do, and liking how you do it.",
    author: "Maya Angelou",
  },
  {
    text: "I have learned over the years that when one's mind is made up, this diminishes fear. The most common way people give up their power is by thinking they don't have any.",
    author: "Alice Walker",
  },
  {
    text: "The way to get started is to quit talking and begin doing. Take a chance, and learn from your mistakes.",
    author: null,
  },
  {
    text: "A business that makes nothing but money is a poor business. There is one rule for the industrialist, and that is: make the best quality of goods possible at the lowest cost possible.",
    author: "Henry Ford",
  },
  {
    text: "Coming together is a beginning, staying together is progress, and working together is success. Obstacles are those frightful things you see when you take your eyes off your goal.",
    author: "Henry Ford",
  },
  {
    text: "Chase the vision, not the money; the money will end up following you. Build something one hundred people love, not something one million people kind of like.",
    author: "Brian Chesky",
  },
  {
    text: "Ideas are easy; implementation is hard. The most dangerous poison is the feeling of achievement; the antidote is to think about what you can do better tomorrow.",
    author: "Ingvar Kamprad",
  },
  {
    text: "If you really want to do something, you'll find a way; if you don't, you'll find an excuse. Whatever you are, be a good one.",
    author: null,
  },
  {
    text: "The secret of getting ahead is getting started. Break your work into small manageable tasks, and start on the first one.",
    author: "Mark Twain",
  },
  {
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },

  // ----- Athletes & performers -----
  {
    text: "I've missed more than nine thousand shots in my career; I've lost almost three hundred games. I've failed over and over again in my life, and that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    text: "Some people want it to happen, some wish it would happen, others make it happen. Talent wins games, but teamwork and intelligence win championships.",
    author: "Michael Jordan",
  },
  {
    text: "You miss one hundred percent of the shots you don't take. You always miss the chances you don't go for.",
    author: "Wayne Gretzky",
  },
  {
    text: "It's not whether you get knocked down; it's whether you get up. The price of success is hard work and the determination that whether we win or lose, we have applied the best of ourselves.",
    author: "Vince Lombardi",
  },
  {
    text: "The more difficult the victory, the greater the happiness in winning. You have to fight to reach your dream; you have to sacrifice and work hard for it.",
    author: "Pelé",
  },
  {
    text: "Champions keep playing until they get it right. You can't put a limit on anything; the more you dream, the farther you get.",
    author: "Billie Jean King",
  },
  {
    text: "Float like a butterfly, sting like a bee. Don't count the days; make the days count.",
    author: "Muhammad Ali",
  },
  {
    text: "It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe. He who is not courageous enough to take risks will accomplish nothing in life.",
    author: "Muhammad Ali",
  },
  {
    text: "I never dreamed about success; I worked for it. Sweat plus sacrifice equals success.",
    author: "Estée Lauder",
  },
  {
    text: "You have to expect things of yourself before you can do them. Be strong, believe in freedom and in God, love yourself, understand your sorrows.",
    author: "Michael Jordan",
  },
  {
    text: "Persistence can change failure into extraordinary achievement. Things won are done; joy's soul lies in the doing.",
    author: "Matt Biondi",
  },
  {
    text: "Hard days are the best because that's when champions are made. If you train hard, you'll not only be hard, you'll be hard to beat.",
    author: "Herschel Walker",
  },
  {
    text: "Today I will do what others won't, so tomorrow I can accomplish what others can't. The will to win means nothing without the will to prepare.",
    author: "Juma Ikangaa",
  },
  {
    text: "You are never really playing an opponent; you are playing yourself. Once you're beat mentally, you might as well not even go to the starting line.",
    author: "Maxwell Maltz",
  },

  // ----- Modern thinkers, philosophy of living -----
  {
    text: "Happiness is not something ready-made; it comes from your own actions. If you want others to be happy, practice compassion; if you want to be happy, practice compassion.",
    author: "Dalai Lama",
  },
  {
    text: "Remember that not getting what you want is sometimes a wonderful stroke of luck. Be kind whenever possible; it is always possible.",
    author: "Dalai Lama",
  },
  {
    text: "The mind is everything; what you think, you become. Better than a thousand hollow words is one word that brings peace.",
    author: "Buddha",
  },
  {
    text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. You yourself, as much as anybody in the entire universe, deserve your love and affection.",
    author: "Buddha",
  },
  {
    text: "The most precious gift we can offer anyone is our attention. When we walk like we are rushing, we print anxiety and sorrow on the earth.",
    author: "Thich Nhat Hanh",
  },
  {
    text: "Smile, breathe, and go slowly. Letting go gives us freedom, and freedom is the only condition for happiness.",
    author: "Thich Nhat Hanh",
  },
  {
    text: "The privilege of a lifetime is being who you are. We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
    author: "Joseph Campbell",
  },
  {
    text: "Between stimulus and response there is a space, and in that space lies our freedom to choose our response. In our response lies our growth and our freedom.",
    author: "Viktor Frankl",
  },
  {
    text: "When we are no longer able to change a situation, we are challenged to change ourselves. Everything can be taken from a person but one thing: the last of human freedoms, to choose one's attitude in any given set of circumstances.",
    author: "Viktor Frankl",
  },
  {
    text: "Those who have a why to live can bear with almost any how. Life is never made unbearable by circumstances, but only by lack of meaning and purpose.",
    author: "Viktor Frankl",
  },
  {
    text: "Owning our story and loving ourselves through that process is the bravest thing we'll ever do. Vulnerability is not weakness; it's our greatest measure of courage.",
    author: "Brené Brown",
  },
  {
    text: "Courage starts with showing up and letting ourselves be seen. Talk to yourself like you would to someone you love.",
    author: "Brené Brown",
  },
  {
    text: "The cave you fear to enter holds the treasure you seek. Find a place inside where there's joy, and the joy will burn out the pain.",
    author: "Joseph Campbell",
  },
  {
    text: "We are not given a good life or a bad life; we are given a life, and it's up to us to make it good or bad. What we plant in the soil of contemplation, we shall reap in the harvest of action.",
    author: "Meister Eckhart",
  },
  {
    text: "Yesterday I was clever, so I wanted to change the world; today I am wise, so I am changing myself. Out beyond ideas of wrongdoing and rightdoing, there is a field; I'll meet you there.",
    author: "Rumi",
  },
  {
    text: "The wound is the place where the light enters you. What you seek is seeking you.",
    author: "Rumi",
  },
  {
    text: "Raise your words, not your voice; it is rain that grows flowers, not thunder. Set your life on fire and seek those who fan your flames.",
    author: "Rumi",
  },
  {
    text: "You were born with wings; why prefer to crawl through life? Be like a tree and let the dead leaves drop.",
    author: "Rumi",
  },
  {
    text: "Almost everything will work again if you unplug it for a few minutes, including you. Almost anything is easier to get into than to get out of.",
    author: "Anne Lamott",
  },
  {
    text: "Owning less is better than organizing more. The first step in crafting the life you want is to get rid of everything you don't.",
    author: "Joshua Becker",
  },
  {
    text: "It is not the man who has too little, but the man who craves more, that is poor. True happiness is to enjoy the present, without anxious dependence upon the future.",
    author: "Seneca",
  },
  {
    text: "The greatest wealth is to live content with little. He who fears death will never do anything worthy of a living man.",
    author: "Seneca",
  },

  // ----- Habit, discipline & productivity -----
  {
    text: "Motivation is what gets you started; habit is what keeps you going. Small disciplines repeated with consistency every day lead to great achievements gained slowly over time.",
    author: "Jim Ryun",
  },
  {
    text: "We become what we repeatedly do. Successful people are simply those with successful habits.",
    author: "Brian Tracy",
  },
  {
    text: "Goals that are not written down are just wishes. The key to success is to focus our conscious mind on things we desire, not things we fear.",
    author: "Brian Tracy",
  },
  {
    text: "Habits are the compound interest of self-improvement. Time magnifies the margin between success and failure; it will multiply whatever you feed it.",
    author: "James Clear",
  },
  {
    text: "You should be far more concerned with your current trajectory than with your current results. Be the designer of your world and not merely the consumer of it.",
    author: "James Clear",
  },
  {
    text: "The man who moves a mountain begins by carrying away small stones. It does not matter how slowly you go, as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Productivity is never an accident; it is always the result of a commitment to excellence, intelligent planning, and focused effort. Excellence is not a singular act but a habit.",
    author: "Paul J. Meyer",
  },
  {
    text: "Either you run the day or the day runs you. If you spend too much time thinking about a thing, you'll never get it done.",
    author: "Jim Rohn",
  },
  {
    text: "Don't wish it were easier; wish you were better. Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
  },
  {
    text: "You don't have to be great to start, but you have to start to be great. The big secret in life is that there is no big secret; whatever your goal, you can get there if you're willing to work.",
    author: "Oprah Winfrey",
  },
  {
    text: "Do the one thing you think you cannot do; fail at it, try again, do better the second time. The only people who never tumble are those who never mount the high wire.",
    author: "Oprah Winfrey",
  },
  {
    text: "Focus on being productive instead of busy. Stop chasing the money and start chasing the passion.",
    author: "Tim Ferriss",
  },
  {
    text: "A vital ingredient of success is not knowing that what you're attempting can't be done. Twenty years from now you will be more disappointed by the things you didn't do.",
    author: null,
  },
  {
    text: "The bad news is time flies; the good news is you're the pilot. Today is the only day; yesterday is gone.",
    author: "Michael Altshuler",
  },
  {
    text: "Lost time is never found again. By failing to prepare, you are preparing to fail.",
    author: "Benjamin Franklin",
  },
  {
    text: "Energy and persistence conquer all things. Well done is better than well said.",
    author: "Benjamin Franklin",
  },
  {
    text: "Tell me and I forget, teach me and I may remember, involve me and I learn. An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
  },
  {
    text: "If you want a thing done well, do it yourself. Without continual growth and progress, such words as improvement, achievement, and success have no meaning.",
    author: "Benjamin Franklin",
  },
  {
    text: "Beware of little expenses; a small leak will sink a great ship. He that can have patience can have what he will.",
    author: "Benjamin Franklin",
  },

  // ----- Courage, resilience & hope -----
  {
    text: "Courage doesn't always roar; sometimes courage is the quiet voice at the end of the day saying, I will try again tomorrow. We can do hard things.",
    author: "Mary Anne Radmacher",
  },
  {
    text: "Rock bottom became the solid foundation on which I rebuilt my life. We do not need magic to transform our world; we carry all the power we need inside ourselves already.",
    author: "J.K. Rowling",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us. The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Once you choose hope, anything's possible. Hope is being able to see that there is light despite all of the darkness.",
    author: "Desmond Tutu",
  },
  {
    text: "Do your little bit of good where you are; it's those little bits of good put together that overwhelm the world. There is no future without forgiveness.",
    author: "Desmond Tutu",
  },
  {
    text: "Hope is a waking dream. Where there is love there is life.",
    author: null,
  },
  {
    text: "The struggle you're in today is developing the strength you need for tomorrow. Don't give up just because things are hard.",
    author: null,
  },
  {
    text: "Turn your wounds into wisdom. Surround yourself only with people who are going to lift you higher.",
    author: "Oprah Winfrey",
  },
  {
    text: "When you come to the end of your rope, tie a knot and hang on. Believe you can, and you're halfway there.",
    author: null,
  },
  {
    text: "Out of difficulties grow miracles. Twenty years from now, the ones who are happy will be those who learned to dance with the storm.",
    author: null,
  },
  {
    text: "Stars can't shine without darkness. Every storm runs out of rain, just as every dark night turns into day.",
    author: null,
  },
  {
    text: "The comeback is always stronger than the setback. What feels like the end is often the beginning.",
    author: null,
  },
  {
    text: "You may have to fight a battle more than once to win it. Tough times never last, but tough people do.",
    author: null,
  },
  {
    text: "Strength grows in the moments when you think you can't go on but keep going anyway. The flower that blooms in adversity is the rarest and most beautiful of all.",
    author: null,
  },
  {
    text: "Promise me you'll always remember: you're braver than you believe, stronger than you seem, and smarter than you think. Sometimes the smallest things take up the most room in your heart.",
    author: "A.A. Milne",
  },
  {
    text: "How lucky I am to have something that makes saying goodbye so hard. A little consideration, a little thought for others, makes all the difference.",
    author: "A.A. Milne",
  },

  // ----- Wisdom, kindness & character -----
  {
    text: "No act of kindness, no matter how small, is ever wasted. We can't help everyone, but everyone can help someone.",
    author: "Aesop",
  },
  {
    text: "After all these years, I am still involved in the process of self-discovery; it's better to explore life and make mistakes than to play it safe. Mistakes are part of the dues one pays for a full life.",
    author: "Sophia Loren",
  },
  {
    text: "Character cannot be developed in ease and quiet; only through experience of trial and suffering can the soul be strengthened. Optimism is the faith that leads to achievement.",
    author: "Helen Keller",
  },
  {
    text: "Keep your face to the sunshine and you cannot see a shadow. Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    text: "Alone we can do so little; together we can do so much. The best and most beautiful things in the world cannot be seen or even touched; they must be felt with the heart.",
    author: "Helen Keller",
  },
  {
    text: "The true measure of a man is how he treats someone who can do him absolutely no good. We rise by lifting others.",
    author: null,
  },
  {
    text: "How wonderful it is that nobody need wait a single moment before starting to improve the world. Whoever is happy will make others happy too.",
    author: "Anne Frank",
  },
  {
    text: "No one has ever become poor by giving. Think of all the beauty still left around you and be happy.",
    author: "Anne Frank",
  },
  {
    text: "Kindness is a language which the deaf can hear and the blind can see. A kind word is like a spring day.",
    author: null,
  },
  {
    text: "Wherever you go, go with all your heart. Real knowledge is to know the extent of one's ignorance.",
    author: "Confucius",
  },
  {
    text: "The superior man is modest in his speech but exceeds in his actions. When it is obvious that the goals cannot be reached, adjust the action steps.",
    author: "Confucius",
  },
  {
    text: "Choose a job you love, and you will never have to work a day in your life. Study the past if you would define the future.",
    author: "Confucius",
  },
  {
    text: "By three methods we may learn wisdom: by reflection, which is noblest; by imitation, which is easiest; and by experience, which is the bitterest. To know what is right and not to do it is the worst cowardice.",
    author: "Confucius",
  },
  {
    text: "Hatred does not cease by hatred, but only by love; this is the eternal rule. Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else.",
    author: "Buddha",
  },
  {
    text: "Three things cannot be long hidden: the sun, the moon, and the truth. Just as a candle cannot burn without fire, we cannot live without a spiritual life.",
    author: "Buddha",
  },
  {
    text: "There are only two mistakes one can make along the road to truth: not going all the way, and not starting. To live is the rarest thing in the world; most people merely exist.",
    author: null,
  },
  {
    text: "Be kind, for everyone you meet is fighting a hard battle. Treat people as if they were what they ought to be, and you help them become what they are capable of being.",
    author: null,
  },
  {
    text: "Carry out a random act of kindness with no expectation of reward. The smallest act of kindness is worth more than the grandest intention.",
    author: null,
  },

  // ----- Dreams, purpose & growth -----
  {
    text: "All our dreams can come true if we have the courage to pursue them. The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Why fit in when you were born to stand out? You're off to great places, today is your day, your mountain is waiting, so get on your way.",
    author: "Dr. Seuss",
  },
  {
    text: "You have brains in your head and feet in your shoes; you can steer yourself any direction you choose. Today you are you, that is truer than true; there is no one alive who is youer than you.",
    author: "Dr. Seuss",
  },
  {
    text: "The more that you read, the more things you will know; the more that you learn, the more places you'll go. So be sure when you step, step with care and great tact.",
    author: "Dr. Seuss",
  },
  {
    text: "A goal without a plan is just a wish. What is essential is invisible to the eye; it is only with the heart that one can see rightly.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    text: "If you want to build a ship, don't drum up people to gather wood; teach them to long for the endless immensity of the sea. A pile of rocks ceases to be a rock pile the moment a single man contemplates it, bearing within him the image of a cathedral.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    text: "Dreams are the seeds of change; nothing ever grows without a seed, and nothing ever changes without a dream. The future belongs to those who prepare for it today.",
    author: null,
  },
  {
    text: "Shoot for the moon; even if you miss, you'll land among the stars. Dream big, work hard, stay focused, and surround yourself with good people.",
    author: null,
  },
  {
    text: "A dream doesn't become reality through magic; it takes sweat, determination, and hard work. Always make a total effort, even when the odds are against you.",
    author: "Colin Powell",
  },
  {
    text: "Great things are not done by impulse, but by a series of small things brought together. There is no shortcut to achievement; life requires thorough preparation.",
    author: "Vincent van Gogh",
  },
  {
    text: "I would rather die of passion than of boredom. What would life be if we had no courage to attempt anything?",
    author: "Vincent van Gogh",
  },
  {
    text: "Normality is a paved road; it's comfortable to walk, but no flowers grow on it. I dream of painting, and then I paint my dream.",
    author: "Vincent van Gogh",
  },
  {
    text: "Everything you've ever wanted is on the other side of fear. Decide what you want, decide what you are willing to exchange for it, and then begin.",
    author: "George Addair",
  },
  {
    text: "Don't be pushed around by the fears in your mind; be led by the dreams in your heart. The dream is free, but the hustle is sold separately.",
    author: null,
  },
  {
    text: "Believe in the magic of new beginnings. Your present circumstances don't determine where you can go; they merely determine where you start.",
    author: "Nido Qubein",
  },
  {
    text: "The starting point of all achievement is desire. Cherish your visions and your dreams, as they are the children of your soul.",
    author: "Napoleon Hill",
  },
  {
    text: "Strength and growth come only through continuous effort and struggle. Do not wait; the time will never be just right.",
    author: "Napoleon Hill",
  },
  {
    text: "If you want to lift yourself up, lift up someone else. Success is to be measured not so much by the position one has reached as by the obstacles overcome.",
    author: "Booker T. Washington",
  },
  {
    text: "Defeat is not the worst of failures; not to have tried is the true failure. The block of granite which is an obstacle in the path of the weak becomes a stepping stone in the path of the strong.",
    author: "Thomas Carlyle",
  },
  {
    text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. Change your story, change your life.",
    author: null,
  },
  {
    text: "Limitations live only in our minds, but if we use our imaginations, our possibilities become limitless. Forget all the reasons why it won't work and believe the one reason why it will.",
    author: "Jamie Paolinetti",
  },
  {
    text: "What you do today can improve all your tomorrows. Action is the foundational key to all success.",
    author: "Ralph Marston",
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it. Dream it, wish it, do it.",
    author: null,
  },
  {
    text: "Don't watch the clock; do what it does, keep going. Sometimes later becomes never, so do it now.",
    author: "Sam Levenson",
  },

  // ----- Final batch: a full year of unique days -----
  {
    text: "Whatever you do, do it with all your might. Work at it, early and late, in season and out of season.",
    author: "P.T. Barnum",
  },
  {
    text: "It is not length of life, but depth of life that matters. Finish each day and be done with it; you have done what you could.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Adopt the pace of nature; her secret is patience. The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Make the most of yourself, for that is all there is of you. Every wall is a door.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Our greatest glory is not in never failing, but in rising up every time we fail. Wisely and slowly; they stumble that run fast.",
    author: null,
  },
  {
    text: "The only impossible journey is the one you never begin. In the depth of winter, I finally learned that within me there lay an invincible summer.",
    author: "Albert Camus",
  },
  {
    text: "You will never be happy if you continue to search for what happiness consists of. Real generosity toward the future lies in giving all to the present.",
    author: "Albert Camus",
  },
  {
    text: "Should I kill myself, or have a cup of coffee? But in the end, one needs more courage to live than to kill himself.",
    author: "Albert Camus",
  },
  {
    text: "Man is condemned to be free; once thrown into the world, he is responsible for everything he does. We are our choices.",
    author: "Jean-Paul Sartre",
  },
  {
    text: "Life has no meaning the moment you lose the illusion of being eternal. Freedom is what you do with what's been done to you.",
    author: "Jean-Paul Sartre",
  },
  {
    text: "One is not born, but rather becomes, oneself. Change your life today; don't gamble on the future, act now, without delay.",
    author: "Simone de Beauvoir",
  },
  {
    text: "I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely. To will oneself free is also to will others free.",
    author: "Simone de Beauvoir",
  },
  {
    text: "Whatever you are, be a good one. I do the very best I know how, the very best I can, and I mean to keep on doing so until the end.",
    author: "Abraham Lincoln",
  },
  {
    text: "Folks are usually about as happy as they make their minds up to be. Be sure you put your feet in the right place, then stand firm.",
    author: "Abraham Lincoln",
  },
  {
    text: "Genius is the ability to renew one's emotions in daily experience. Have no fear of perfection; you'll never reach it.",
    author: "Salvador Dalí",
  },
  {
    text: "Creativity is intelligence having fun. Logic will get you from A to B; imagination will take you everywhere.",
    author: null,
  },
  {
    text: "Every child is an artist; the problem is how to remain an artist once we grow up. Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    text: "The meaning of life is to find your gift; the purpose of life is to give it away. Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
  {
    text: "Inspiration exists, but it has to find you working. Others have seen what is and asked why; I have seen what could be and asked why not.",
    author: "Pablo Picasso",
  },
  {
    text: "Art washes away from the soul the dust of everyday life. The chief enemy of creativity is good sense.",
    author: "Pablo Picasso",
  },
  {
    text: "To be an artist is to believe in life. Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.",
    author: "Langston Hughes",
  },
  {
    text: "Life is for the living; death is for the dead, so let life be like music. I have discovered in life that there are ways of getting almost anywhere you want to go, if you really want to go.",
    author: "Langston Hughes",
  },
  {
    text: "I have learned that success is to be measured not so much by the position one has reached as by the obstacles overcome. There is no defeat except in no longer trying.",
    author: null,
  },
  {
    text: "The pessimist sees difficulty in every opportunity; the optimist sees the opportunity in every difficulty. Now is not the time to think of what you do not have; think of what you can do with what there is.",
    author: "Winston Churchill",
  },
  {
    text: "Optimism is a happiness magnet; if you stay positive, good things and good people will be drawn to you. Surround yourself with the dreamers and the doers.",
    author: "Mary Lou Retton",
  },
  {
    text: "Once you replace negative thoughts with positive ones, you'll start having positive results. Always turn a negative situation into a positive situation.",
    author: null,
  },
  {
    text: "Keep your eyes on the stars, and your feet on the ground. Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Comparison is the thief of joy. Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood. Far better it is to dare mighty things than to take rank with those poor spirits who neither enjoy much nor suffer much.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Order your soul; reduce your wants. Begin where you are, but do not stay where you are.",
    author: null,
  },
  {
    text: "You cannot swim for new horizons until you have courage to lose sight of the shore. We don't see things as they are; we see them as we are.",
    author: "Anaïs Nin",
  },
  {
    text: "Life shrinks or expands in proportion to one's courage. And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.",
    author: "Anaïs Nin",
  },
  {
    text: "Throw your dreams into space like a kite, and you do not know what it will bring back. Each friend represents a world in us, a world not born until they arrive.",
    author: "Anaïs Nin",
  },
  {
    text: "We must be willing to let go of the life we planned so as to have the life that is waiting for us. The cave you fear to enter holds the treasure you seek.",
    author: "Joseph Campbell",
  },
  {
    text: "Doubt kills more dreams than failure ever will. Whether you think you can or you think you can't, your effort will prove you right.",
    author: null,
  },
  {
    text: "The expert in anything was once a beginner. Don't let yesterday take up too much of today.",
    author: null,
  },
  {
    text: "Great minds discuss ideas; average minds discuss events; small minds discuss people. Do what is right, not what is easy nor what is popular.",
    author: null,
  },
  {
    text: "If opportunity doesn't knock, build a door. Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Milton Berle",
  },
  {
    text: "Try to be a rainbow in someone else's cloud; you can't use up creativity, the more you use, the more you have. Nothing will work unless you do.",
    author: "Maya Angelou",
  },
  {
    text: "Talent is a gift, but character is a choice. The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    author: "Mark Caine",
  },
  {
    text: "Setting goals is the first step in turning the invisible into the visible. The only limit to the height of your achievements is the reach of your dreams and your willingness to work for them.",
    author: "Tony Robbins",
  },
  {
    text: "It is in your moments of decision that your destiny is shaped. The path to success is to take massive, determined action.",
    author: "Tony Robbins",
  },
  {
    text: "If you do what you've always done, you'll get what you've always gotten. The quality of your life is the quality of your relationships.",
    author: "Tony Robbins",
  },
  {
    text: "The future depends on what we do in the present. An ounce of practice is worth more than tons of preaching.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Glory lies in the attempt to reach one's goal and not in reaching it. A coward is incapable of exhibiting love; it is the prerogative of the brave.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Find a group of people who challenge and inspire you, spend a lot of time with them, and it will change your life. The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it. The man who has confidence in himself gains the confidence of others.",
    author: "Henry David Thoreau",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving them. Most of the important things in the world have been accomplished by people who kept on trying when there seemed to be no hope at all.",
    author: "Dale Carnegie",
  },
  {
    text: "Develop success from failures; discouragement and failure are two of the surest stepping stones to success. Most of the important things were accomplished by people who kept trying when there seemed to be no hope.",
    author: "Dale Carnegie",
  },
  {
    text: "Inaction breeds doubt and fear; action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it; go out and get busy.",
    author: "Dale Carnegie",
  },
  {
    text: "You only live once, but if you do it right, once is enough. The trouble is, you think you have time.",
    author: null,
  },
  {
    text: "The two most powerful warriors are patience and time. The bird a nest, the spider a web, man friendship.",
    author: null,
  },
  {
    text: "Wherever you are, be all there. Do not be afraid; our fate cannot be taken from us, it is a gift.",
    author: "Jim Elliot",
  },
  {
    text: "Tough times never last, but tough people do. A diamond is merely a lump of coal that did well under pressure.",
    author: "Robert H. Schuller",
  },
  {
    text: "Spectacular achievement is always preceded by unspectacular preparation. People who are crazy enough to think they can change the world are the ones who do.",
    author: "Robert H. Schuller",
  },
  {
    text: "What great thing would you attempt if you knew you could not fail? Failure doesn't mean you are a failure; it just means you haven't succeeded yet.",
    author: "Robert H. Schuller",
  },
  {
    text: "Always be a first-rate version of yourself, instead of a second-rate version of somebody else. You can have anything you want if you dress for it.",
    author: "Judy Garland",
  },
  {
    text: "You'll never find a rainbow if you're looking down. Life is a great big canvas; throw all the paint on it you can.",
    author: "Danny Kaye",
  },
  {
    text: "The most wasted of all days is one without laughter. A day without sunshine is, you know, night.",
    author: "E.E. Cummings",
  },
  {
    text: "It takes courage to grow up and become who you really are. Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit.",
    author: "E.E. Cummings",
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUOTES;
}
