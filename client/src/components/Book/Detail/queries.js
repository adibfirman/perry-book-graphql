import { gql } from 'apollo-boost';

export const getDetailBook = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;
