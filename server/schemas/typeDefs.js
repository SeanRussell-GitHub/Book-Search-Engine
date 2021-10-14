const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
    bookCount: Int
  }

  type Book {
    _id: ID
    description: String
    link: String
    title: String
    bookId: String
    image: String 
    bookAuthor: String
    createdAt: String
    comments: [Comment]!
    
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(bookText: String!): Book
    addComment(bookId: ID!, commentText: String!): Book
    removeBook(bookId: ID!): Book
    removeComment(bookId: ID!, commentId: ID!): Book
  }
`;

module.exports = typeDefs;
