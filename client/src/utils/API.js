// import { gql } from '@apollo/client';
// // route to get logged in user's info (needs the token)
// // 

// export const GET_ME = gql`
//   query getMe {
//     getMe {
//       token
//       _id
//       name
//     }
//   }
// `;

// export const ADD_USER = gql`
//   mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;



// export const loginUser = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const saveBook = gql`
//   mutation saveBook($bookData: String!){
//     saveBook(bookData: $bookData) {
//       token
//       user{
//         _id
//         username
//       }
//     }
//   }
// `;


// export const DELETE_BOOK = gql`
//   mutation deleteBook($bookId: String!){
//     deleteBook(bookId: $bookId) {
//       token
//       user{
//         _id
//         username
//       }
//     }
//   }
// `;



// // make a search to google books api
// // https://www.googleapis.com/books/v1/volumes?q=harry+potter
// export const searchGoogleBooks = (query) => {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// };


// // export const getMe = (token) => {
//   //   return fetch('/api/users/me', {
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //       authorization: `Bearer ${token}`,
//   //     },
//   //   });
//   // };

//   // export const createUser = (userData) => {
// //   return fetch('/api/users', {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify(userData),
// //   });
// // };

// // export const loginUser = (userData) => {
// //   return fetch('/api/users/login', {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify(userData),
// //   });
// // };

// // save book data for a logged in user
// // export const saveBook = (bookData, token) => {
// //   return fetch('/api/users', {
// //     method: 'PUT',
// //     headers: {
// //       'Content-Type': 'application/json',
// //       authorization: `Bearer ${token}`,
// //     },
// //     body: JSON.stringify(bookData),
// //   });
// // };


// // remove saved book data for a logged in user
// // export const deleteBook = (bookId, token) => {
// //   return fetch(`/api/users/books/${bookId}`, {
// //     method: 'DELETE',
// //     headers: {
// //       authorization: `Bearer ${token}`,
// //     },
// //   });
// // };