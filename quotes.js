// A curated collection of deep, meaningful quotes.
// Each entry is { text, author }. Author is null when the line is a proverb
// or its origin can't be reliably attributed. Quotes are mapped
// deterministically to calendar dates in app.js, so each day shows a stable
// quote and past days can be browsed.
//
// Entries are single coherent quotes (one or two genuine sentences from the
// same source). We deliberately avoid stitching lines from different authors.

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
    text: "Patience is a key element of success.",
    author: "Bill Gates",
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
    author: "Will Durant",
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    text: "You have power over your mind, not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
  },
  {
    text: "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius",
  },
  {
    text: "We suffer more often in imagination than in reality.",
    author: "Seneca",
  },
  {
    text: "It is not that we have a short time to live, but that we waste a lot of it. Life is long enough if you know how to use it.",
    author: "Seneca",
  },
  {
    text: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    text: "Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.",
    author: "Lao Tzu",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Everything has beauty, but not everyone sees it.",
    author: "Confucius",
  },
  {
    text: "Whether you think you can, or you think you can't, you're right.",
    author: "Henry Ford",
  },
  {
    text: "Whatever you can do, or dream you can, begin it. Boldness has genius, power, and magic in it.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
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
    text: "Faith is taking the first step even when you don't see the whole staircase.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    text: "The two most important days in your life are the day you are born and the day you find out why.",
    author: null,
  },
  {
    text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. Explore, dream, discover.",
    author: "Mark Twain",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Far and away the best prize that life offers is the chance to work hard at work worth doing.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Your most unhappy customers are your greatest source of learning.",
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
    text: "Failure is an option here; if things are not failing, you are not innovating enough.",
    author: "Elon Musk",
  },
  {
    text: "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
    author: "Bill Gates",
  },
  {
    text: "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
  },
  {
    text: "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    text: "If you really look closely, most overnight successes took a long time.",
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
    text: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "You must have chaos within you to give birth to a dancing star.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    author: "Joseph Campbell",
  },
  {
    text: "The privilege of a lifetime is to become who you truly are.",
    author: "Joseph Campbell",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Quality is not an act, it is a habit.",
    author: "Aristotle",
  },
  {
    text: "Few things help an individual more than to place responsibility upon him, and to let him know that you trust him.",
    author: "Booker T. Washington",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: null,
  },
  {
    text: "Integrity is doing the right thing, even when no one is watching.",
    author: "C.S. Lewis",
  },
  {
    text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    text: "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
    author: "Maya Angelou",
  },
  {
    text: "People will forget what you said and what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    text: "If you don't have time to do it right, when will you have time to do it over?",
    author: "John Wooden",
  },
  {
    text: "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    text: "Whatever the mind can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    text: "Start where you are, use what you have, do what you can.",
    author: "Arthur Ashe",
  },
  {
    text: "Courage is grace under pressure.",
    author: "Ernest Hemingway",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "The greatest weapon against stress is our ability to choose one thought over another.",
    author: "William James",
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: null,
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
  {
    text: "It's not what you look at that matters, it's what you see.",
    author: "Henry David Thoreau",
  },
  {
    text: "The future rewards those who press on.",
    author: "Barack Obama",
  },
  {
    text: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for; we are the change that we seek.",
    author: "Barack Obama",
  },
  {
    text: "In the long run, we shape our lives, and we shape ourselves.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Logic will get you from A to B; imagination will take you everywhere.",
    author: "Albert Einstein",
  },
  {
    text: "All that we are arises with our thoughts; with our thoughts, we make the world.",
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
    text: "Fall seven times, stand up eight.",
    author: null,
  },
  {
    text: "A river cuts through rock not because of its power but its persistence.",
    author: null,
  },
  {
    text: "You do not rise to the level of your goals; you fall to the level of your systems. Every action you take is a vote for the type of person you wish to become.",
    author: "James Clear",
  },
  {
    text: "Be so good they can't ignore you.",
    author: "Cal Newport",
  },

  // ----- Stoics & ancient philosophy -----
  {
    text: "If it is not right, do not do it; if it is not true, do not say it.",
    author: "Marcus Aurelius",
  },
  {
    text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius",
  },
  {
    text: "The best revenge is not to be like your enemy.",
    author: "Marcus Aurelius",
  },
  {
    text: "We should every night call ourselves to an account: what infirmity have I mastered today?",
    author: "Seneca",
  },
  {
    text: "Difficulties strengthen the mind, as labor does the body.",
    author: "Seneca",
  },
  {
    text: "As is a tale, so is life: not how long it is, but how good it is, is what matters.",
    author: "Seneca",
  },
  {
    text: "Wealth consists not in having great possessions, but in having few wants.",
    author: "Epictetus",
  },
  {
    text: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus",
  },
  {
    text: "No man is free who is not master of himself. Make the best use of what is in your power, and take the rest as it happens.",
    author: "Epictetus",
  },
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    text: "He who is not contented with what he has would not be contented with what he would like to have.",
    author: "Socrates",
  },
  {
    text: "At the touch of love everyone becomes a poet.",
    author: "Plato",
  },
  {
    text: "The first and greatest victory is to conquer yourself.",
    author: "Plato",
  },
  {
    text: "Pleasure in the job puts perfection in the work.",
    author: "Aristotle",
  },
  {
    text: "Knowing yourself is the beginning of all wisdom.",
    author: "Aristotle",
  },
  {
    text: "If you have a garden and a library, you have everything you need.",
    author: "Cicero",
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Cicero",
  },
  {
    text: "When you arise in the morning, think of what a precious privilege it is to be alive — to breathe, to think, to enjoy, to love.",
    author: "Marcus Aurelius",
  },

  // ----- Eastern thought & proverbs -----
  {
    text: "Nature does not hurry, yet everything is accomplished.",
    author: "Lao Tzu",
  },
  {
    text: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu",
  },
  {
    text: "New beginnings are often disguised as painful endings.",
    author: null,
  },
  {
    text: "The best time to plant a tree was twenty years ago; the second best time is now.",
    author: null,
  },
  {
    text: "A bend in the road is not the end of the road, unless you fail to make the turn.",
    author: null,
  },
  {
    text: "A gem cannot be polished without friction, nor a person perfected without trials.",
    author: null,
  },
  {
    text: "When the winds of change blow, some build walls and others build windmills.",
    author: null,
  },
  {
    text: "Vision without action is a daydream; action without vision is a nightmare.",
    author: null,
  },
  {
    text: "A single conversation with a wise person is worth a month's study of books.",
    author: null,
  },
  {
    text: "If you want to go fast, go alone; if you want to go far, go together.",
    author: null,
  },
  {
    text: "He who conquers others is strong; he who conquers himself is mighty.",
    author: "Lao Tzu",
  },
  {
    text: "A candle loses nothing by lighting another candle.",
    author: null,
  },
  {
    text: "A wise man adapts himself to circumstances, as water shapes itself to the vessel that contains it.",
    author: null,
  },
  {
    text: "When eating fruit, remember the one who planted the tree.",
    author: null,
  },
  {
    text: "Better to light a candle than to curse the darkness.",
    author: null,
  },

  // ----- Writers & poets -----
  {
    text: "There is no greater agony than bearing an untold story inside you.",
    author: "Maya Angelou",
  },
  {
    text: "Do the best you can until you know better; then when you know better, do better.",
    author: "Maya Angelou",
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    text: "There are years that ask questions and years that answer.",
    author: "Zora Neale Hurston",
  },
  {
    text: "You never really understand a person until you consider things from his point of view, until you climb inside of his skin and walk around in it.",
    author: "Harper Lee",
  },
  {
    text: "Not all those who wander are lost.",
    author: "J.R.R. Tolkien",
  },
  {
    text: "It is not our abilities that show what we truly are; it is our choices.",
    author: "J.K. Rowling",
  },
  {
    text: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
    author: "J.K. Rowling",
  },
  {
    text: "And, when you want something, all the universe conspires in helping you to achieve it.",
    author: "Paulo Coelho",
  },
  {
    text: "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
    author: "Paulo Coelho",
  },
  {
    text: "The world breaks everyone, and afterward, some are strong at the broken places.",
    author: "Ernest Hemingway",
  },
  {
    text: "There is nothing to writing; all you do is sit down at a typewriter and bleed.",
    author: "Ernest Hemingway",
  },
  {
    text: "The best way to find out if you can trust somebody is to trust them.",
    author: "Ernest Hemingway",
  },
  {
    text: "Whatever you do, do it well. Do it so well that when people see you do it, they will want to come back and see you do it again.",
    author: "Walt Disney",
  },
  {
    text: "Resist much, obey little.",
    author: "Walt Whitman",
  },
  {
    text: "We are all in the gutter, but some of us are looking at the stars.",
    author: "Oscar Wilde",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Tell me, what is it you plan to do with your one wild and precious life?",
    author: "Mary Oliver",
  },
  {
    text: "Hope is the thing with feathers that perches in the soul, and sings the tune without the words, and never stops at all.",
    author: "Emily Dickinson",
  },
  {
    text: "Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference.",
    author: "Robert Frost",
  },
  {
    text: "Once the storm is over, you won't remember how you made it through. But one thing is certain: when you come out, you won't be the same person who walked in.",
    author: "Haruki Murakami",
  },
  {
    text: "The most regretful people on earth are those who felt the call to creative work and gave it neither time nor effort.",
    author: "Mary Oliver",
  },
  {
    text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
  },
  {
    text: "We can only learn to love by loving.",
    author: "Iris Murdoch",
  },

  // ----- Scientists, inventors & thinkers -----
  {
    text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    author: "Marie Curie",
  },
  {
    text: "I am among those who think that science has great beauty.",
    author: "Marie Curie",
  },
  {
    text: "Look deep into nature, and then you will understand everything better.",
    author: "Albert Einstein",
  },
  {
    text: "The important thing is not to stop questioning; curiosity has its own reason for existing.",
    author: "Albert Einstein",
  },
  {
    text: "Somewhere, something incredible is waiting to be known.",
    author: "Carl Sagan",
  },
  {
    text: "For small creatures such as we, the vastness is bearable only through love.",
    author: "Carl Sagan",
  },
  {
    text: "It is far better to grasp the universe as it really is than to persist in delusion, however satisfying and reassuring.",
    author: "Carl Sagan",
  },
  {
    text: "Nothing in life is more liberating than to fight for a cause larger than yourself.",
    author: "Neil deGrasse Tyson",
  },
  {
    text: "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist.",
    author: "Stephen Hawking",
  },
  {
    text: "Intelligence is the ability to adapt to change.",
    author: "Stephen Hawking",
  },
  {
    text: "If I have seen further, it is by standing on the shoulders of giants.",
    author: "Isaac Newton",
  },
  {
    text: "What is now proved was once only imagined.",
    author: "William Blake",
  },
  {
    text: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
    author: "Isaac Asimov",
  },
  {
    text: "Imagination will often carry us to worlds that never were, but without it we go nowhere.",
    author: "Carl Sagan",
  },
  {
    text: "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
    author: "Albert Einstein",
  },
  {
    text: "Research is what I'm doing when I don't know what I'm doing.",
    author: "Wernher von Braun",
  },
  {
    text: "If I have a thousand ideas and only one turns out to be good, I am satisfied.",
    author: "Alfred Nobel",
  },

  // ----- Leaders, statesmen & activists -----
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "Do not judge me by my successes; judge me by how many times I fell down and got back up again.",
    author: "Nelson Mandela",
  },
  {
    text: "Continuous effort, not strength or intelligence, is the key to unlocking our potential. Attitude is a little thing that makes a big difference.",
    author: "Winston Churchill",
  },
  {
    text: "To improve is to change; to be perfect is to change often.",
    author: "Winston Churchill",
  },
  {
    text: "We make a living by what we get, but we make a life by what we give.",
    author: "Winston Churchill",
  },
  {
    text: "Injustice anywhere is a threat to justice everywhere. We are caught in an inescapable network of mutuality, tied in a single garment of destiny.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    text: "A people that values its privileges above its principles soon loses both.",
    author: "Dwight D. Eisenhower",
  },
  {
    text: "Ask not what your country can do for you; ask what you can do for your country.",
    author: "John F. Kennedy",
  },
  {
    text: "Those who dare to fail miserably can achieve greatly.",
    author: "John F. Kennedy",
  },
  {
    text: "I am not afraid of storms, for I am learning how to sail my ship.",
    author: "Louisa May Alcott",
  },
  {
    text: "You should never view your challenges as a disadvantage; instead, understand that your experience facing and overcoming adversity is one of your biggest advantages.",
    author: "Michelle Obama",
  },
  {
    text: "Success isn't about how much money you make; it's about the difference you make in people's lives.",
    author: "Michelle Obama",
  },
  {
    text: "One child, one teacher, one book, one pen can change the world.",
    author: "Malala Yousafzai",
  },
  {
    text: "When the whole world is silent, even one voice becomes powerful.",
    author: "Malala Yousafzai",
  },
  {
    text: "Each time a person stands up for an ideal, they send forth a tiny ripple of hope.",
    author: "Robert F. Kennedy",
  },
  {
    text: "The ballot is stronger than the bullet.",
    author: "Abraham Lincoln",
  },
  {
    text: "In the end, it's not the years in your life that count; it's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    text: "I am only one, but I am one; I cannot do everything, but I can do something. And because I cannot do everything, I will not refuse to do the something that I can do.",
    author: "Edward Everett Hale",
  },
  {
    text: "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it is the only thing that ever has.",
    author: "Margaret Mead",
  },
  {
    text: "I alone cannot change the world, but I can cast a stone across the waters to create many ripples.",
    author: "Mother Teresa",
  },
  {
    text: "Not all of us can do great things, but we can do small things with great love.",
    author: "Mother Teresa",
  },
  {
    text: "Strength does not come from physical capacity; it comes from an indomitable will.",
    author: "Mahatma Gandhi",
  },
  {
    text: "In a gentle way, you can shake the world.",
    author: "Mahatma Gandhi",
  },

  // ----- Tech, business & innovation -----
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    text: "Quality is more important than quantity; one home run is much better than two doubles.",
    author: "Steve Jobs",
  },
  {
    text: "Stay hungry, stay foolish. Have the courage to follow your heart and intuition; they somehow already know what you truly want to become.",
    author: "Steve Jobs",
  },
  {
    text: "Most people never pick up the phone and call; most people never ask. That's what separates the people who do things from the people who just dream about them.",
    author: "Steve Jobs",
  },
  {
    text: "I think it is possible for ordinary people to choose to be extraordinary.",
    author: "Elon Musk",
  },
  {
    text: "When you first start off trying to solve a problem, the first solutions you come up with are very complex, and most people stop there. But if you keep going, you can often find better, simpler solutions.",
    author: "Elon Musk",
  },
  {
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    text: "If you double the number of experiments you do per year, you're going to double your inventiveness.",
    author: "Jeff Bezos",
  },
  {
    text: "Your brand is what other people say about you when you're not in the room.",
    author: "Jeff Bezos",
  },
  {
    text: "Failure is not the opposite of success, it's part of success.",
    author: "Arianna Huffington",
  },
  {
    text: "Success is liking yourself, liking what you do, and liking how you do it.",
    author: "Maya Angelou",
  },
  {
    text: "The most common way people give up their power is by thinking they don't have any.",
    author: "Alice Walker",
  },
  {
    text: "Done is better than perfect, and started is better than waiting.",
    author: null,
  },
  {
    text: "There is one rule for the industrialist, and that is: make the best quality of goods possible at the lowest cost possible.",
    author: "Henry Ford",
  },
  {
    text: "Coming together is a beginning, staying together is progress, and working together is success.",
    author: "Henry Ford",
  },
  {
    text: "Build something one hundred people love, not something one million people kind of like.",
    author: "Brian Chesky",
  },
  {
    text: "The most dangerous poison is the feeling of achievement; the antidote is to think about what you can do better tomorrow.",
    author: "Ingvar Kamprad",
  },
  {
    text: "If you really want to do something, you'll find a way; if you don't, you'll find an excuse.",
    author: null,
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    author: "Steve Jobs",
  },

  // ----- Athletes & performers -----
  {
    text: "I've missed more than nine thousand shots in my career; I've lost almost three hundred games. I've failed over and over again in my life, and that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    text: "Some people want it to happen, some wish it would happen, others make it happen.",
    author: "Michael Jordan",
  },
  {
    text: "You miss one hundred percent of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    text: "It's not whether you get knocked down; it's whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "The more difficult the victory, the greater the happiness in winning.",
    author: "Pelé",
  },
  {
    text: "Champions keep playing until they get it right.",
    author: "Billie Jean King",
  },
  {
    text: "Float like a butterfly, sting like a bee.",
    author: "Muhammad Ali",
  },
  {
    text: "It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe.",
    author: "Muhammad Ali",
  },
  {
    text: "I never dreamed about success. I worked for it.",
    author: "Estée Lauder",
  },
  {
    text: "You have to expect things of yourself before you can do them.",
    author: "Michael Jordan",
  },
  {
    text: "Persistence can change failure into extraordinary achievement.",
    author: null,
  },
  {
    text: "If you train hard, you'll not only be hard, you'll be hard to beat.",
    author: "Herschel Walker",
  },
  {
    text: "The will to win means nothing without the will to prepare.",
    author: "Juma Ikangaa",
  },
  {
    text: "You are never really playing an opponent; you are playing yourself.",
    author: "Arthur Ashe",
  },

  // ----- Modern thinkers, philosophy of living -----
  {
    text: "Happiness is not something ready-made; it comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Remember that not getting what you want is sometimes a wonderful stroke of luck. Be kind whenever possible; it is always possible.",
    author: "Dalai Lama",
  },
  {
    text: "Better than a thousand hollow words is one word that brings peace.",
    author: "Buddha",
  },
  {
    text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha",
  },
  {
    text: "The most precious gift we can offer anyone is our attention.",
    author: "Thich Nhat Hanh",
  },
  {
    text: "Letting go gives us freedom, and freedom is the only condition for happiness.",
    author: "Thich Nhat Hanh",
  },
  {
    text: "The privilege of a lifetime is being who you are.",
    author: "Joseph Campbell",
  },
  {
    text: "Between stimulus and response there is a space. In that space is our power to choose our response; in our response lies our growth and our freedom.",
    author: "Viktor Frankl",
  },
  {
    text: "When we are no longer able to change a situation, we are challenged to change ourselves.",
    author: "Viktor Frankl",
  },
  {
    text: "Life is never made unbearable by circumstances, but only by lack of meaning and purpose.",
    author: "Viktor Frankl",
  },
  {
    text: "Owning our story and loving ourselves through that process is the bravest thing we'll ever do.",
    author: "Brené Brown",
  },
  {
    text: "Talk to yourself like you would to someone you love.",
    author: "Brené Brown",
  },
  {
    text: "Find a place inside where there's joy, and the joy will burn out the pain.",
    author: "Joseph Campbell",
  },
  {
    text: "What we plant in the soil of contemplation, we shall reap in the harvest of action.",
    author: "Meister Eckhart",
  },
  {
    text: "Yesterday I was clever, so I wanted to change the world; today I am wise, so I am changing myself.",
    author: "Rumi",
  },
  {
    text: "The wound is the place where the light enters you.",
    author: "Rumi",
  },
  {
    text: "Raise your words, not your voice. It is rain that grows flowers, not thunder.",
    author: "Rumi",
  },
  {
    text: "You were born with wings; why prefer to crawl through life?",
    author: "Rumi",
  },
  {
    text: "Almost everything will work again if you unplug it for a few minutes, including you.",
    author: "Anne Lamott",
  },
  {
    text: "Owning less is better than organizing more. The first step in crafting the life you want is to get rid of everything you don't.",
    author: "Joshua Becker",
  },
  {
    text: "It is not the man who has too little, but the man who craves more, that is poor.",
    author: "Seneca",
  },
  {
    text: "The greatest wealth is to live content with little.",
    author: "Seneca",
  },

  // ----- Habit, discipline & productivity -----
  {
    text: "Motivation is what gets you started; habit is what keeps you going.",
    author: "Jim Ryun",
  },
  {
    text: "Successful people are simply those with successful habits.",
    author: "Brian Tracy",
  },
  {
    text: "Goals that are not written down are just wishes.",
    author: "Brian Tracy",
  },
  {
    text: "Habits are the compound interest of self-improvement.",
    author: "James Clear",
  },
  {
    text: "You should be far more concerned with your current trajectory than with your current results.",
    author: "James Clear",
  },
  {
    text: "The man who moves a mountain begins by carrying away small stones.",
    author: "Confucius",
  },
  {
    text: "Productivity is never an accident; it is always the result of a commitment to excellence, intelligent planning, and focused effort.",
    author: "Paul J. Meyer",
  },
  {
    text: "Either you run the day or the day runs you.",
    author: "Jim Rohn",
  },
  {
    text: "Don't wish it were easier; wish you were better. Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
  },
  {
    text: "The big secret in life is that there is no big secret; whatever your goal, you can get there if you're willing to work.",
    author: "Oprah Winfrey",
  },
  {
    text: "The only people who never tumble are those who never mount the high wire.",
    author: "Oprah Winfrey",
  },
  {
    text: "Focus on being productive instead of busy.",
    author: "Tim Ferriss",
  },
  {
    text: "A vital ingredient of success is not knowing that what you're attempting can't be done.",
    author: null,
  },
  {
    text: "The bad news is time flies; the good news is you're the pilot.",
    author: "Michael Altshuler",
  },
  {
    text: "By failing to prepare, you are preparing to fail.",
    author: "Benjamin Franklin",
  },
  {
    text: "Energy and persistence conquer all things.",
    author: "Benjamin Franklin",
  },
  {
    text: "Tell me and I forget, teach me and I may remember, involve me and I learn.",
    author: "Benjamin Franklin",
  },
  {
    text: "Without continual growth and progress, such words as improvement, achievement, and success have no meaning.",
    author: "Benjamin Franklin",
  },
  {
    text: "Beware of little expenses; a small leak will sink a great ship.",
    author: "Benjamin Franklin",
  },

  // ----- Courage, resilience & hope -----
  {
    text: "Courage doesn't always roar; sometimes courage is the quiet voice at the end of the day saying, I will try again tomorrow.",
    author: "Mary Anne Radmacher",
  },
  {
    text: "Rock bottom became the solid foundation on which I rebuilt my life.",
    author: "J.K. Rowling",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: null,
  },
  {
    text: "Hope is being able to see that there is light despite all of the darkness.",
    author: "Desmond Tutu",
  },
  {
    text: "Do your little bit of good where you are; it's those little bits of good put together that overwhelm the world.",
    author: "Desmond Tutu",
  },
  {
    text: "Hope is a waking dream.",
    author: "Aristotle",
  },
  {
    text: "The struggle you're in today is developing the strength you need for tomorrow.",
    author: null,
  },
  {
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
  },
  {
    text: "When you come to the end of your rope, tie a knot and hang on.",
    author: null,
  },
  {
    text: "Out of difficulties grow miracles.",
    author: null,
  },
  {
    text: "Stars can't shine without darkness.",
    author: null,
  },
  {
    text: "The comeback is always stronger than the setback.",
    author: null,
  },
  {
    text: "You may have to fight a battle more than once to win it.",
    author: null,
  },
  {
    text: "Strength grows in the moments when you think you can't go on but keep going anyway.",
    author: null,
  },
  {
    text: "Promise me you'll always remember: you're braver than you believe, stronger than you seem, and smarter than you think.",
    author: "A.A. Milne",
  },
  {
    text: "How lucky I am to have something that makes saying goodbye so hard.",
    author: "A.A. Milne",
  },

  // ----- Wisdom, kindness & character -----
  {
    text: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop",
  },
  {
    text: "Mistakes are part of the dues one pays for a full life.",
    author: "Sophia Loren",
  },
  {
    text: "Character cannot be developed in ease and quiet; only through experience of trial and suffering can the soul be strengthened.",
    author: "Helen Keller",
  },
  {
    text: "Keep your face to the sunshine and you cannot see a shadow.",
    author: "Helen Keller",
  },
  {
    text: "Alone we can do so little; together we can do so much.",
    author: "Helen Keller",
  },
  {
    text: "The true measure of a person is how they treat someone who can do them absolutely no good.",
    author: null,
  },
  {
    text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank",
  },
  {
    text: "No one has ever become poor by giving.",
    author: "Anne Frank",
  },
  {
    text: "Kindness is a language which the deaf can hear and the blind can see.",
    author: null,
  },
  {
    text: "Wherever you go, go with all your heart.",
    author: "Confucius",
  },
  {
    text: "The superior man is modest in his speech but exceeds in his actions.",
    author: "Confucius",
  },
  {
    text: "Choose a job you love, and you will never have to work a day in your life.",
    author: "Confucius",
  },
  {
    text: "To know what is right and not to do it is the worst cowardice.",
    author: "Confucius",
  },
  {
    text: "Hatred does not cease by hatred, but only by love; this is the eternal rule.",
    author: "Buddha",
  },
  {
    text: "Three things cannot be long hidden: the sun, the moon, and the truth.",
    author: "Buddha",
  },
  {
    text: "There are only two mistakes one can make along the road to truth: not going all the way, and not starting.",
    author: null,
  },
  {
    text: "Be kind, for everyone you meet is fighting a hard battle.",
    author: null,
  },
  {
    text: "The smallest act of kindness is worth more than the grandest intention.",
    author: null,
  },

  // ----- Dreams, purpose & growth -----
  {
    text: "We keep moving forward, opening new doors and doing new things, because we're curious — and curiosity keeps leading us down new paths.",
    author: "Walt Disney",
  },
  {
    text: "Why fit in when you were born to stand out?",
    author: "Dr. Seuss",
  },
  {
    text: "You have brains in your head and feet in your shoes; you can steer yourself any direction you choose.",
    author: "Dr. Seuss",
  },
  {
    text: "The more that you read, the more things you will know; the more that you learn, the more places you'll go.",
    author: "Dr. Seuss",
  },
  {
    text: "What is essential is invisible to the eye; it is only with the heart that one can see rightly.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    text: "If you want to build a ship, don't drum up people to gather wood; teach them to long for the endless immensity of the sea.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    text: "Dreams are the seeds of change; nothing ever grows without a seed, and nothing ever changes without a dream.",
    author: null,
  },
  {
    text: "Shoot for the moon; even if you miss, you'll land among the stars.",
    author: null,
  },
  {
    text: "A dream doesn't become reality through magic; it takes sweat, determination, and hard work.",
    author: "Colin Powell",
  },
  {
    text: "Great things are not done by impulse, but by a series of small things brought together.",
    author: "Vincent van Gogh",
  },
  {
    text: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh",
  },
  {
    text: "I dream of painting, and then I paint my dream.",
    author: "Vincent van Gogh",
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    text: "Don't be pushed around by the fears in your mind; be led by the dreams in your heart.",
    author: null,
  },
  {
    text: "Your present circumstances don't determine where you can go; they merely determine where you start.",
    author: "Nido Qubein",
  },
  {
    text: "The starting point of all achievement is desire.",
    author: "Napoleon Hill",
  },
  {
    text: "Do not wait; the time will never be just right.",
    author: "Napoleon Hill",
  },
  {
    text: "Success is to be measured not so much by the position one has reached as by the obstacles overcome.",
    author: "Booker T. Washington",
  },
  {
    text: "The block of granite which is an obstacle in the path of the weak becomes a stepping stone in the path of the strong.",
    author: "Thomas Carlyle",
  },
  {
    text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    author: null,
  },
  {
    text: "Limitations live only in our minds, but if we use our imaginations, our possibilities become limitless.",
    author: "Jamie Paolinetti",
  },
  {
    text: "What you do today can improve all your tomorrows.",
    author: "Ralph Marston",
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: null,
  },
  {
    text: "Don't watch the clock; do what it does, keep going.",
    author: "Sam Levenson",
  },

  // ----- A full year of unique days -----
  {
    text: "Whatever you do, do it with all your might. Work at it, early and late, in season and out of season.",
    author: "P.T. Barnum",
  },
  {
    text: "Finish each day and be done with it; you have done what you could.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Adopt the pace of nature; her secret is patience.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Make the most of yourself, for that is all there is of you.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Wisely and slowly; they stumble that run fast.",
    author: "William Shakespeare",
  },
  {
    text: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    author: "Albert Camus",
  },
  {
    text: "Real generosity toward the future lies in giving all to the present.",
    author: "Albert Camus",
  },
  {
    text: "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend.",
    author: "Albert Camus",
  },
  {
    text: "Man is condemned to be free; once thrown into the world, he is responsible for everything he does.",
    author: "Jean-Paul Sartre",
  },
  {
    text: "Freedom is what you do with what's been done to you.",
    author: "Jean-Paul Sartre",
  },
  {
    text: "One is not born, but rather becomes, oneself.",
    author: "Simone de Beauvoir",
  },
  {
    text: "Change your life today; don't gamble on the future, act now, without delay.",
    author: "Simone de Beauvoir",
  },
  {
    text: "Whatever you are, be a good one. I do the very best I know how, the very best I can, and I mean to keep on doing so until the end.",
    author: "Abraham Lincoln",
  },
  {
    text: "Folks are usually about as happy as they make their minds up to be.",
    author: "Abraham Lincoln",
  },
  {
    text: "Have no fear of perfection; you'll never reach it.",
    author: "Salvador Dalí",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: null,
  },
  {
    text: "Every child is an artist; the problem is how to remain an artist once we grow up.",
    author: "Pablo Picasso",
  },
  {
    text: "The meaning of life is to find your gift; the purpose of life is to give it away.",
    author: "Pablo Picasso",
  },
  {
    text: "Inspiration exists, but it has to find you working.",
    author: "Pablo Picasso",
  },
  {
    text: "Art washes away from the soul the dust of everyday life.",
    author: "Pablo Picasso",
  },
  {
    text: "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.",
    author: "Langston Hughes",
  },
  {
    text: "I have discovered in life that there are ways of getting almost anywhere you want to go, if you really want to go.",
    author: "Langston Hughes",
  },
  {
    text: "There is no defeat except in no longer trying.",
    author: null,
  },
  {
    text: "The pessimist sees difficulty in every opportunity; the optimist sees the opportunity in every difficulty.",
    author: "Winston Churchill",
  },
  {
    text: "Optimism is a happiness magnet; if you stay positive, good things and good people will be drawn to you.",
    author: "Mary Lou Retton",
  },
  {
    text: "Once you replace negative thoughts with positive ones, you'll start having positive results.",
    author: null,
  },
  {
    text: "Keep your eyes on the stars, and your feet on the ground.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Comparison is the thief of joy.",
    author: "Theodore Roosevelt",
  },
  {
    text: "It is not the critic who counts; the credit belongs to the one who is actually in the arena, whose face is marred by dust and sweat and blood.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Order your soul; reduce your wants.",
    author: "Saint Augustine",
  },
  {
    text: "You cannot swim for new horizons until you have courage to lose sight of the shore.",
    author: "Anaïs Nin",
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: "Anaïs Nin",
  },
  {
    text: "Each friend represents a world in us, a world not born until they arrive.",
    author: "Anaïs Nin",
  },
  {
    text: "The big question is whether you are going to be able to say a hearty yes to your adventure.",
    author: "Joseph Campbell",
  },
  {
    text: "Doubt kills more dreams than failure ever will.",
    author: null,
  },
  {
    text: "The expert in anything was once a beginner.",
    author: null,
  },
  {
    text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: null,
  },
  {
    text: "If opportunity doesn't knock, build a door.",
    author: "Milton Berle",
  },
  {
    text: "If you don't like something, change it; if you can't change it, change your attitude.",
    author: "Maya Angelou",
  },
  {
    text: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    author: "Mark Caine",
  },
  {
    text: "Setting goals is the first step in turning the invisible into the visible.",
    author: "Tony Robbins",
  },
  {
    text: "It is in your moments of decision that your destiny is shaped.",
    author: "Tony Robbins",
  },
  {
    text: "If you do what you've always done, you'll get what you've always gotten.",
    author: "Tony Robbins",
  },
  {
    text: "The future depends on what we do in the present.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Glory lies in the attempt to reach one's goal and not in reaching it.",
    author: "Mahatma Gandhi",
  },
  {
    text: "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    text: "Most of the important things in the world have been accomplished by people who kept on trying when there seemed to be no hope at all.",
    author: "Dale Carnegie",
  },
  {
    text: "Develop success from failures; discouragement and failure are two of the surest stepping stones to success.",
    author: "Dale Carnegie",
  },
  {
    text: "Inaction breeds doubt and fear; action breeds confidence and courage.",
    author: "Dale Carnegie",
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: null,
  },
  {
    text: "The two most powerful warriors are patience and time.",
    author: null,
  },
  {
    text: "Wherever you are, be all there.",
    author: "Jim Elliot",
  },
  {
    text: "Tough times never last, but tough people do.",
    author: "Robert H. Schuller",
  },
  {
    text: "Spectacular achievement is always preceded by unspectacular preparation.",
    author: "Robert H. Schuller",
  },
  {
    text: "What great thing would you attempt if you knew you could not fail?",
    author: "Robert H. Schuller",
  },
  {
    text: "Always be a first-rate version of yourself, instead of a second-rate version of somebody else.",
    author: "Judy Garland",
  },
  {
    text: "You'll never find a rainbow if you're looking down. Life is a great big canvas; throw all the paint on it you can.",
    author: "Danny Kaye",
  },
  {
    text: "We do not believe in ourselves until someone reveals that deep inside us something is valuable, worth listening to.",
    author: "E.E. Cummings",
  },
  {
    text: "It takes courage to grow up and become who you really are.",
    author: "E.E. Cummings",
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUOTES;
}
