import React from 'react';
import { graphql } from 'react-apollo';

import Authors from './Authors';
import { createNewBook } from './queries';
import { getBookList } from '../List/queries';

const initialReducer = {
  name: '',
  genre: '',
  authorId: ''
}

function reducerForms(state, payload) {
  switch (payload.type) {
    case 'reset':
      return initialReducer
    default:
      return { ...state, [payload.name]: payload.value }
  }
}

function BookForm({ createBook }) {
  const [forms, dispatch] = React.useReducer(reducerForms, initialReducer)

  function handleOnChange(e) {
    const { name, value } = e.target
    dispatch({ name, value })
  }

  function handleSubmitForm(e) {
    e.preventDefault()

    createBook({
      variables: { ...forms },
      refetchQueries: [{ query: getBookList }],
      awaitRefetchQueries: true,
      update: dispatch({ type: 'reset' })
    })
  }

  return (
    <form id="add-book" onSubmit={handleSubmitForm}>
      <div className="field">
        <label>Book Name:</label>
        <input type="text" name="name" value={forms.name} onChange={handleOnChange} />
      </div>
      <div className="field">
        <label>Genre Book:</label>
        <input type="text" name="genre" value={forms.genre} onChange={handleOnChange} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select name="authorId" value={forms.authorId} onChange={handleOnChange}>
          <Authors />
        </select>
      </div>

      <button type="submit">+</button>
    </form>
  )
}

export default graphql(createNewBook, { name: 'createBook' })(BookForm)
