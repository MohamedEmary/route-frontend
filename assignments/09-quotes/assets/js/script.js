var quotes = [
  {
    content: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    content:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
  },
  {
    content: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    content:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    content: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    content:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },
  {
    content:
      "You've gotta dance like there's nobody watching,\nLove like you'll never be hurt,\nSing like there's nobody listening,\nAnd live like it's heaven on earth.",
    author: "William W. Purkey",
  },
  {
    content:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
  },
  {
    content: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    content: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    content:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    content:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "J.K. Rowling",
  },
  {
    content:
      "Don't walk in front of me… I may not follow\nDon't walk behind me… I may not lead\nWalk beside me… just be my friend",
    author: "Albert Camus",
  },
  {
    content: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    content:
      'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . ."',
    author: "C.S. Lewis",
  },
  {
    content:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    content: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    content:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    content: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde",
  },
  {
    content:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    author: "Martin Luther King Jr.",
  },
  {
    content:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    content: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
  {
    content: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
  {
    content:
      "I am so clever that sometimes I don't understand a single word of what I am saying.",
    author: "Oscar Wilde",
  },
  {
    content:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    content:
      "Insanity is doing the same thing, over and over again, but expecting different results.",
    author: "Narcotics Anonymous",
  },
  {
    content:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide",
  },
  {
    content:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: "H. Jackson Brown Jr.",
  },
  {
    content:
      "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
    author: "Jane Austen",
  },
  {
    content:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "J.K. Rowling",
  },
  {
    content:
      "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
    author: "Marilyn Monroe",
  },
  {
    content:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein",
  },
  {
    content: "It does not do to dwell on dreams and forget to live.",
    author: "J.K. Rowling",
  },
  {
    content:
      "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    author: "Mark Twain",
  },
  {
    content:
      "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
    author: "John Green",
  },
  {
    content:
      "We are all in the gutter, but some of us are looking at the stars.",
    author: "Oscar Wilde",
  },
  {
    content:
      "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    author: "Neil Gaiman",
  },
  {
    content:
      "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    author: "William Shakespeare",
  },
  {
    content:
      "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
    author: "Maurice Switzer",
  },
  {
    content:
      "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
    author: "Mark Twain",
  },
  {
    content: "Life is what happens to us while we are making other plans.",
    author: "Allen Saunders",
  },
  {
    content:
      "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "Bill Keane",
  },
  {
    content: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
  {
    content:
      "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    author: "Friedrich Nietzsche",
  },
  {
    content:
      "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.",
    author: "Elie Wiesel",
  },
  {
    content:
      "The man who does not read has no advantage over the man who cannot read.",
    author: "Mark Twain",
  },
  {
    content:
      "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
    author: "Eleanor Roosevelt",
  },
  {
    content:
      "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
    author: "Douglas Adams",
  },
  {
    content: "If you don't stand for something you will fall for anything.",
    author: "Gordon A. Eadie",
  },
  {
    content:
      "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
    author: "Groucho Marx",
  },
  {
    content: "I solemnly swear that I am up to no good.",
    author: "J.K. Rowling",
  },
  {
    content:
      "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    author: "Albert Einstein",
  },
  {
    content:
      "Love all, trust a few,\nDo wrong to none: be able for thine enemy\nRather in power than use; and keep thy friend\nUnder thy own life's key: be check'd for silence,\nBut never tax'd for speech.",
    author: "William Shakespeare",
  },
  {
    content:
      "Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.",
    author: "Neil Gaiman",
  },
  {
    content:
      "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.",
    author: "Dr. Seuss",
  },
  {
    content:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
  },
  {
    content:
      "All you need is love. But a little chocolate now and then doesn't hurt.",
    author: "Charles M. Schulz",
  },
  {
    content:
      "Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.",
    author: "Jim Henson",
  },
  {
    content:
      "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
    author: "J.K. Rowling",
  },
  {
    content:
      "Today you are You, that is truer than true. There is no one alive who is Youer than You.",
    author: "Dr. Seuss",
  },
  {
    content:
      "I'm not afraid of death; I just don't want to be there when it happens.",
    author: "Woody Allen",
  },
  {
    content:
      "If one cannot enjoy reading a book over and over again, there is no use in reading it at all.",
    author: "Oscar Wilde",
  },
  {
    content:
      "To the well-organized mind, death is but the next great adventure.",
    author: "J.K. Rowling",
  },
  {
    content:
      "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all—in which case, you fail by default.",
    author: "J.K. Rowling",
  },
  {
    content:
      "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
    author: "Albert Einstein",
  },
  {
    content:
      "Logic will get you from A to Z; imagination will get you everywhere.",
    author: "Albert Einstein",
  },
  {
    content:
      "Whenever I feel the need to exercise, I lie down until it goes away.",
    author: "Paul Terry",
  },
  {
    content:
      "Sometimes people are beautiful. Not in looks. Not in what they say. Just in what they are.",
    author: "Markus Zusak",
  },
  {
    content:
      "The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
    author: "Bob Marley",
  },
  {
    content:
      "Love looks not with the eyes, but with the mind; And therefore is wing'd Cupid painted blind. Nor hath love's mind of any judgment taste; Wings and no eyes figure unheedy haste: And therefore is love said to be a child, Because in choice he is so oft beguil'd.",
    author: "William Shakespeare",
  },
  {
    content:
      "You don't get to choose if you get hurt in this world...but you do have some say in who hurts you. I like my choices.",
    author: "John Green",
  },
  {
    content:
      "Folks are usually about as happy as they make their minds up to be.",
    author: "Abraham Lincoln",
  },
  {
    content:
      "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    author: "Dr. Seuss",
  },
  {
    content: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    content: "There is no friend as loyal as a book.",
    author: "Ernest Hemingway",
  },
  {
    content:
      "The story so far: In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
    author: "Douglas Adams",
  },
  {
    content:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    content: "One good thing about music, when it hits you, you feel no pain.",
    author: "Bob Marley",
  },
  {
    content:
      "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.",
    author: "Groucho Marx",
  },
  {
    content: "Love is like the wind, you can't see it but you can feel it.",
    author: "Nicholas Sparks",
  },
  {
    content:
      "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    author: "Helen Keller",
  },
];

var quoteContent = document.getElementById("content");
var quoteAuthor = document.getElementById("author");

var currentIndex = -1;
function getRandomQuote() {
  var newIndex = Math.round(Math.random() * 82);
  while (currentIndex === newIndex) {
    // To prevent the same quote from appearing twice in a row
    newIndex = Math.round(Math.random() * 82);
  }
  currentIndex = newIndex;
  quoteContent.innerHTML = `<i class="fa-solid fa-quote-left text-white fs-2"></i> ${quotes[newIndex].content}`;
  quoteAuthor.innerHTML = `- ${quotes[newIndex].author} -`;
}
