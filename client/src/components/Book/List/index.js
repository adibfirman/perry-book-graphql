import React from 'react';
import { graphql } from 'react-apollo';

import BookItem from '../Item';
import { getBookList } from './queries';
import BookDetail from '../Detail'

class BookList extends React.PureComponent {

  state = {
    bookId: ''
  }

  handleClickBook = bookId => {
    this.setState({ bookId })
  }

  render() {
    const { data } = this.props
    const { bookId } = this.state

    return (
      <div>
        <ul id="book-list">
        {
          data.loading ?
          <div>Loading...</div> :
          data.books.map(book => (
            <BookItem
              key={book.id}
              onClick={this.handleClickBook}
              { ...book } />
          ))
        }
        </ul>
        <BookDetail bookId={bookId} />
      </div>
    )
  }

}

export default graphql(getBookList)(BookList)
