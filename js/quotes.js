const quotes = [
  {
    quote:
      'When you go through hardships and decide not to surrender, that is strength.',
    quthor: 'Arnold Schwarzenegger',
  },
  {
    quote: 'It is kind of fun to do the impossible.',
    quthor: 'Walt Disney',
  },
  {
    quote: 'Tough times never last, but tough people do.',
    quthor: 'Robert H. Schuller',
  },
  {
    quote:
      'I’ve failed over and over and over again in my life and that is why I succeed.',
    quthor: 'Michael Jordan',
  },
  {
    quote: 'Grind Hard, Shine Hard.',
    quthor: 'Dwayne Johnson',
  },
  {
    quote:
      'The road to success and the road to failure are almost exactly the same.',
    quthor: 'Colin R. Davis',
  },
  {
    quote:
      'Success is walking from failure to failure with no loss of enthusiasm.',
    quthor: 'Winston Churchill',
  },
  {
    quote: 'In order to succeed, we must first believe that we can.',
    quthor: 'Nikos Kazantzakis',
  },
  {
    quote:
      'If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.',
    quthor: 'Angelina Jolie',
  },
  {
    quote:
      'But I know, somehow, that only when it is dark enough can you see the stars.',
    quthor: 'Martin Luther King, Jr',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
