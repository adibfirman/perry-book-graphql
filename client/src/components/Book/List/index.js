import React from 'react';
import { graphql } from 'react-apollo';

import BookItem from '../Item'
import { getBookList } from './queries';


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
