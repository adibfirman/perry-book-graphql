import { gql } from 'apollo-boost';

export const getBookList = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;
