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
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = QUOTES;
}
