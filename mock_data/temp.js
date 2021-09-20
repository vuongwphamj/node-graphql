const authors = [
    {
        name: 'Kate Chopin',
        books: [
            {
              title: 'The Awakening',
              author: 'Kate Chopin'
            },
        ]    
    },
    {
		name: 'Paul Auster',
		books: []    
    }
]

const books = [
    {
      title: 'The Awakening',
      author: authors[0],
    },
    {
      title: 'City of Glass',
      author: authors[1],
    },
];

module.exports.books = books;
module.exports.authors = authors;
