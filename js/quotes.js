const quotes = [
  {
    quote:
      'When you go through hardships and decide not to surrender, that is strength.',
    author: 'Arnold Schwarzenegger',
  },
  {
    quote: 'It is kind of fun to do the impossible.',
    author: 'Walt Disney',
  },
  {
    quote: 'Tough times never last, but tough people do.',
    author: 'Robert H. Schuller',
  },
  {
    quote:
      'I’ve failed over and over and over again in my life and that is why I succeed.',
    author: 'Michael Jordan',
  },
  {
    quote: 'Grind Hard, Shine Hard.',
    author: 'Dwayne Johnson',
  },
  {
    quote:
      'The road to success and the road to failure are almost exactly the same.',
    author: 'Colin R. Davis',
  },
  {
    quote:
      'Success is walking from failure to failure with no loss of enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    quote: 'In order to succeed, we must first believe that we can.',
    author: 'Nikos Kazantzakis',
  },
  {
    quote:
      'If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.',
    author: 'Angelina Jolie',
  },
  {
    quote:
      'But I know, somehow, that only when it is dark enough can you see the stars.',
    author: 'Martin Luther King, Jr',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
