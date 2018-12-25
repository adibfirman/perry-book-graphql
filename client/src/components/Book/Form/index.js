import React from 'react';
import { graphql } from 'react-apollo';

import Authors from './Authors';
import { createNewBook } from './queries';
import { getBookList } from '../List/queries';

class BookForm extends React.PureComponent {

  state = {
    name: '',
    genre: '',
    authorId: ''
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmitForm = e => {
    e.preventDefault()

    this.props.createBook({
      variables: { ...this.state },
      refetchQueries: [{ query: getBookList }],
      awaitRefetchQueries: true,
      update: this.resetDataForm
    })
  }

  resetDataForm = () => {
    this.setState({
      name: '',
      genre: '',
      authorId: ''
    })
  }

  render() {
    const { name, genre, authorId } = this.state

    return (
      <form id="add-book" onSubmit={this.handleSubmitForm}>
        <div className="field">
          <label>Book Name:</label>
          <input type="text" name="name" value={name} onChange={this.handleOnChange} />
        </div>
        <div className="field">
          <label>Genre Book:</label>
          <input type="text" name="genre" value={genre} onChange={this.handleOnChange} />
        </div>
        <div className="field">
          <label>Author:</label>
          <select name="authorId" value={authorId} onChange={this.handleOnChange}>
            <Authors />
          </select>
        </div>
  
        <button type="submit">+</button>
      </form>
    )
  }

}

export default graphql(createNewBook, { name: 'createBook' })(BookForm)
