import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import BookItem from '../Item'

const getBookList = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

const BookList = props => {

  const { data } = props

  return (
    <div>
      <ul id="book-list">
      {
        data.loading ?
        <div>Loading...</div> :
        data.books.map(book => (
          <BookItem key={book.id} { ...book } />
        ))
      }
      </ul>
    </div>
  )

}

export default graphql(getBookList)(BookList)
