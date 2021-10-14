import { gql } from '@apollo/client';
// route to get logged in user's info (needs the token)
// 

export const GET_ME = gql`
  query getMe {
    me {
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
  }
`;