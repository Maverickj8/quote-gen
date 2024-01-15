
const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

// An array of quotes and names
const allQuotes = [
  {
    quote: `"You must be the change you wish to see in the world."`,
    person: `-Mahatma Gandhi`,
  },
  {
    quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
    person: `-Mother Teresa`,
  },
  {
    quote: `"The only thing we have to fear is fear itself."`,
    person: `-Franklin D. Roosevelt`,
  },
  {
    quote: `"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."`,
    person: `-Martin Luther King Jr`,
  },
  {
    quote: `"Do one thing every day that scares you."`,
    person: `-Eleanor Roosevelt"`,
  },
  {
    quote: `"Well done is better than well said."`,
    person: `-Benjamin Franklin`,
  },
  {
    quote: `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."`,
    person: `-Helen Keller`,
  },
  {
    quote: `"It is during our darkest moments that we must focus to see the light."`,
    person: `Aristotle`,
  },
  {
    quote: `"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
    person: -`Ralph Waldo Emerson`,
  },
  {
    quote: `"Be yourself; everyone else is already taken.`,
    person: `-Oscar Wilde"`,
  },
  {
    quote: `"You will face many defeats in life, but never let yourself be defeated.`,
    person: `-Maya Angelou`,
  },
  {
    quote: `Go cnfidently in the direction of your dreams! Live the life you've imagined.`,
    person: `-Henry David Thoreau}`,
  },
  {
    quote: `In the end, it's not the years in your life that count. It's the life in your years`,
    person: `-Abraham Lincoln`,
  },
  {
    quote: `Never let the fear of striking out keep you from playing the game.`,
    person: `-Babe Ruth`,
  },
  {
    quote: `In this life we cannot do great things. We can only do small things with great love.`,
    person: `-Mother Teresa`,
  },
  {
    quote: `"In the end, it's not the years in your life that count. It's the life in your years."`,
    person: `-Abraham Lincoln`,
  },
  {
    quote: `"Life is a succession of lessons which must be lived to be understood."`,
    person: `-Ralph Waldo Emerson`,
  },
  {
    quote: `"You will face many defeats in life, but never let yourself be defeated."`,
    person: `-Maya Angelou"`,
  },
  {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    person: `-Babe Ruth`,
  },
  {
    quote: `"Life is never fair, and perhaps it is a good thing for most of us that it is not."`,
    person: `-Oscar Wilde`,
  },
  {
    quote: `"The only impossible journey is the one you never begin."`,
    person: `-Tony Robbins`,
  },
  {
    quote: `"In this life we cannot do great things. We can only do small things with great love."`,
    person: `-Mother Teresa`,
  },
  {
    quote: `"Only a life lived for others is a life worthwhile."`,
    person: `-Albert Einstein`,
  },
  {
    quote: `"The purpose of our lives is to be happy."`,
    person: `-Dalai Lama"`,
  },
  {
    quote: `“You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.”`,
    person: `-John Lennon`,
  },
  {
    quote: `"You only live once, but if you do it right, once is enough."`,
    person: ` -Mae West`,
  },
  {
    quote: `"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`,
    person: `-Ralph Waldo Emerson`,
  },
  {
    quote: `"Don't worry when you are not recognized, but strive to be worthy of recognition."`,
    person: `-Abraham Lincoln`,
  },
  {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `-Nelson Mandela"`,
  },
  {
    quote: `"Life is really simple, but we insist on making it complicated."`,
    person: `-Confucius`,
  },
  {
    quote: `"May you live all the days of your life."`,
    person: `-Jonathan Swift`,
  },
  {
    quote: `"Life itself is the most wonderful fairy tale."`,
    person: `-Hans Christian Andersen`,
  },
  {
    quote: `"Do not let making a living prevent you from making a life."`,
    person: `John Wooden`,
  },
  {
    quote: `"Go confidently in the direction of your dreams! Live the life you've imagined."`,
    person: `-Henry David Thoreau"`,
  },
  {
    quote: `"Keep smiling, because life is a beautiful thing and there's so much to smile about."`,
    person: `-Marilyn Monroe`,
  },
  {
    quote: `"In the depth of winter, I finally learned that within me there lay an invincible summer."`,
    person: `-Albert Camus`,
  },
  {
    quote: `"In three words I can sum up everything I've learned about life: it goes on."`,
    person: `-Robert Frost`,
  },
  {
    quote: `"So we beat on, boats against the current, borne back ceaselessly into the past."`,
    person: `-F. Scott Fitzgerald`,
  },
  {
    quote: `"Life is either a daring adventure or nothing."`,
    person: `-Helen Keller`,
  },
  {
    quote: `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."`,
    person: `-Dr. Seuss`,
  },
  {
    quote: `"Life is made of ever so many partings welded together."`,
    person: `-Charles Dickens`,
  },
];

// add event listener
btn.addEventListener('click', function () {
     // A variable that generate a random number  
    let randomQuote = Math.floor(Math.random() * allQuotes.length)
    // This will change the quote and the name of the person
    quote.innerText = allQuotes[randomQuote].quote;
    person.innerText = allQuotes[randomQuote].person;
})