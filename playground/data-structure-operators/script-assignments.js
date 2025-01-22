const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// 1.1 Destructure the books array into two variables called firstBook and secondBook
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// 1.2 Destructure the books array into a variable called thirdBook. You must skip the first two books.
const [, , thirdBook] = books;
console.log(thirdBook);

// 1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(ratings);

//1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(ratingStars);

// 2.1 Destructure the first book object from the books array into variables called title, author and ISBN.

const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

// 2.2 Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
const { keywords: tags } = books[0];
console.log(tags);

// 2.3 The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.
const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);

// 2.4 Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.

const { title: bookTitle, author: bookAuthor } = books[0];
console.log(bookTitle, bookAuthor);

// 2.5

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

// 2.6

function printBookInfo(title, author, year = 'year unkwnown') {
  console.log(`${title} by ${author}, ${year}`);
}

printBookInfo(books[1]);

// 3.1
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

// 3.2
function spellWord(word) {
  console.log(...word);
}
spellWord('Margo');

// 4.1
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, ...rest);

// 4.2
const { publisher: bookPublisher, ...restOftheBook } = books[1];
console.log(bookPublisher, restOftheBook);

// 4.3
function printBookAuthorsCount(title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors`);
}

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// 5.1
function hasExamplesInJava(book) {
  return book.programmingLanguage === 'Java' || 'no data available';
}
hasExamplesInJava(books[0]);

//5.2
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`${books[i].title} provide online content`);
}

// 6.1
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(`${books[i].title} provide no data about its online content`);
}

// 7.1
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
  console.log(books[i].edition);
}

// 7.2
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= books[i].thirdParty?.goodreads?.rating >= 4.2;
}

//8.1
let pageSum = 0;
for (let book of books) {
  pageSum += book.pages;
}
console.log(pageSum);

// 8.2
let allAuthors = [];
for (let book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}
console.log(allAuthors);

// 15.1
let firstISBN = books[0].ISBN;
console.log(firstISBN['6'], firstISBN['4'], firstISBN['9'], firstISBN['8']);

// 15.2
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));

// 15.3
console.log(quote.slice(-7));
console.log(quote.slice(quote.lastIndexOf('') + 1)); // if we do not know the index

// 15.4

function isContributor(author) {
  return author.lastIndexOf('(Contributor)') !== -1;
}

console.log(isContributor('Julie Sussman (Contributor)'));
console.log(isContributor('Robert Sedgewick'));

// 16.1

// function normalizedAuthorName(author) {
//   // remove space at the beg
//   let trimmedAuthor = author.trim();
//   let lowerAuthor = trimmedAuthor.toLowerCase();
//   //get first name and capitalise first letter
//   let firstName = trimmedAuthor.slice(0, author.indexOf(' '));
//   console.log(firstName);
//   // get last name, remove (contributor) if exists  and capitalise first letter
// if (lowerAuthor.includes('(Contributor)')) {
//   lowerAuthor.slice(lastIndexOf(''));
//   // add first and last name together
//   l;
//   return author;
// }
// normalizeAuthorName('  JuliE sussMan (Contributor)');

function normalizeAuthorName(author) {
  author = author.trim();
  const firstName = author.slice(0, author.indexOf(' '));

  let lastName = '';
  if (author.indexOf(' ') === author.lastIndexOf(' ')) {
    lastName = author.slice(author.indexOf(' ') + 1, author.length);
  } else {
    lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' '));
  }

  const capitalizedFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const capitalizedLastName =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return capitalizedFirstName + ' ' + capitalizedLastName;
}

console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

// 16.2
const newBookTitle = books[1].title.replace('Programs', 'Software');
console.log(newBookTitle);

// 16.3
const logBookTheme = function (title) {
  let lowerTitle = title.toLowerCase();
  if (lowerTitle.startsWith('computer')) {
    console.log('This book is about computers');
  } else if (
    lowerTitle.includes('algorithms') &&
    lowerTitle.includes('structures')
  ) {
    console.log('This book is about algorithms and data structures');
  } else if (
    (lowerTitle.endsWith('system') || lowerTitle.endsWith('systems')) &&
    !lowerTitle.includes('operating')
  ) {
    console.log(
      'This book is about some systems, but definitely not about operating systems'
    );
  }
};

console.log(logBookTheme(' algorithms and systems'));
