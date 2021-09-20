const { books, authors } = require('../../mock_data/temp');

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        books: () => {
            return books
        },
        authors: () => { 
            return authors
        }
    },
    Mutation: {
        addBook: (parent, args, context, info) => { 
            return books[0]
        }
    }
};

module.exports.resolvers = resolvers;