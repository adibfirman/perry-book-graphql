import { gql } from 'apollo-boost';

export const getListAuthor = gql`
  {
    authors {
      name
      age
      id
    }
  }
`;
