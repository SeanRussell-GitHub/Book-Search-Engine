import { gql } from '@apollo/client';
// route to get logged in user's info (needs the token)
// 

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, password: $password, email: $email) {
      user {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            image
            link
            title
            description
        }
      }
      token
    }
  }
`;

// TODO refactor to allow mutation to take all the needed book info (not some field called input) ---- input renamed bookShelf **
export const SAVE_BOOK = gql`
  mutation saveBook($bookData: InputBook){
    saveBook(bookData: $bookData) {
      _id
      username
      email
        savedBooks {
          bookId
          authors
          image
          description
          title
          link
        }
    }
  }
`;


export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: String!){
    deleteBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            image
            link
            title
            description
        }
      }
    }
`;



// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
