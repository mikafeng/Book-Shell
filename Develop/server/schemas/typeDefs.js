const {gql} = require ('apollo-server-express');

const typeDefs = gql `

    type User{
        _id: ID
        username: String
        email: String
        bookCount: Integer
        savedBooks: [Book]
    }

    type Book{
        bookID: Integer
        authors: [String]
        description: String
        title: String
        image:
        link: String
    }

    type Auth{
        token: ID!
        user: User
    }

    type Query{
        me: User
    }

    type Mutation{
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        addBook(
            author: [String]! 
            description: String!
            title: String
            bookId: ID!
            image:
            link: String
            ) : User

        deleteBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;