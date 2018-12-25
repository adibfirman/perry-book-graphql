import { gql } from 'apollo-boost';

export const createNewBook = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook (name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`;
