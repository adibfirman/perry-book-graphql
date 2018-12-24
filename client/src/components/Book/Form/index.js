import React from 'react';

import Authors from './Authors'

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

    console.log(this.state)
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.handleSubmitForm}>
        <div className="field">
          <label>Book Name:</label>
          <input type="text" name="name" onChange={this.handleOnChange} />
        </div>
        <div className="field">
          <label>Genre Book:</label>
          <input type="text" name="genre" onChange={this.handleOnChange} />
        </div>
        <div className="field">
          <label>Author:</label>
          <select name="authorId" onChange={this.handleOnChange}>
            <Authors />
          </select>
        </div>
  
        <button type="submit">+</button>
      </form>
    )
  }

}

export default BookForm
