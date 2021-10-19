const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('users');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('user');
    },
    books: async () => {
      // const params = username ? { username } : {};
      return Book.find().populate('books');
    },
    book: async (parent, { bookId }) => {
      return Book.findOne({ _id: bookId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('books');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log('we are adding user!!!!');
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, bookData, context) => {
      console.log("book datat is ", bookData);
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: bookData } },
          {
            new: true,
          }
        );
console.log("user returns ", user);
        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { bookId, commentText }, context) => {
      if (context.user) {
        return Book.findOneAndUpdate(
          { _id: bookId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const book = await Book.findOneAndDelete({
          _id: bookId,
          bookAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { books: book._id } }
        );

        return book;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { bookId, commentId }, context) => {
      if (context.user) {
        return Book.findOneAndUpdate(
          { _id: bookId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
