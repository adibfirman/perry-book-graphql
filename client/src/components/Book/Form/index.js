import React from 'react';

import Authors from './Authors'

const BookForm = () => {

  return (
    <form id="add-book">
      <div className="field">
        <label>Book Name:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre Book:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author:</label>
        <select>
          <Authors />
        </select>
      </div>

      <button type="submit">+</button>
    </form>
  )

}

export default BookForm
