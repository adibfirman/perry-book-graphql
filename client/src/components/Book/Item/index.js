import React from 'react';

const BookItem = props => {

  const { id, name, onClick } = props

  return (
    <li onClick={() => onClick(id)}>{name}</li>
  )

}

export default BookItem
