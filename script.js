//I LOVE DEADLOCK!!!!
const quotes = [
  {
    text: "Sometimes I put these on people and they’re like ‘oh no, what can I do?’ and it’s like ‘nothing mate - you’re gonna blow up!’",
    author: "Bebop",
    character: "Bebop",
  },
  {
    text: "You know, it's important to give back. That's why I'm taking 3% of my earnings a day and donating them to Lash Back. It's my charity dedicated to children who kinda suck.",
    author: "Lash",
    character: "Lash",
  },
  {
    text: "A caminar*... no va a ser suficiente. (To walk... it's not going to be enough.)",
    author: "Ivy",
    character: "Ivy",
  },
  {
    text: "You ever get the feeling that something bad is gonna happen?... Yeah so, I don't, that's why I end up in jail so much.",
    author: "Vyper",
    character: "Vyper",
  },
  {
    text: "Arin, your mother and father love you, and would be glad to see you come ho-... [Breaks into laughter] Sorry, I tried, but I couldn’t keep a straight face, you have no home..",
    author: "Doorman",
    character: "Doorman",
  },
  {
    text: "I'm not a one-trick pony!.. I got like four. Five if you count the one where I get an injured audience member not to sue!",
    author: "Celeste",
    character: "Celeste",
  },
  {
    text: "When you need to be trapped in a protoplasmic cube, you're going to be thinking, `man, I wish I had Viscous' help. He seems like a nice person who would trap me in a protoplasmic cube'",
    author: "Viscous",
    character: "Viscous",
  },
  {
    text: "I don't get to walk the Righteous path. I blaze the trail so that others may do so safely.",
    author: "Venator",
    character: "Venator",
  },
];

var quoteText = document.querySelector('#quote-text');
var quoteAuthor = document.querySelector('#quote-author');
var quoteCard = document.querySelector('#quote-card');
var newQuoteBtn = document.querySelector('#new-quote');
var copyBtn = document.querySelector('#copy-quote');
var playBtn = document.querySelector('#play-line');

var currentAudio = null;

function showQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quote = quotes[randomIndex];


  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  quoteText.textContent = quote.text;
  quoteAuthor.textContent = "- " + quote.author;

  quoteCard.src = "Cards/" + quote.character + ".png";
  quoteCard.alt = quote.character;


  playBtn.dataset.character = quote.character;
}

function copyQuote() {
  var quote = quoteText.textContent + " " + quoteAuthor.textContent;
  navigator.clipboard.writeText(quote).then(function () {
    alert("Quote copied to clipboard!");
  });
}

function playLine() {
  var character = playBtn.dataset.character;
  var audioSrc = "Audio/" + character + ".mp3";

  currentAudio = new Audio(audioSrc);

  currentAudio.play();
}

copyBtn.addEventListener('click', copyQuote);
newQuoteBtn.addEventListener('click', showQuote);
playBtn.addEventListener('click', playLine);


showQuote();
