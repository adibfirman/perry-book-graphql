import React from 'react';
import { graphql } from 'react-apollo';

import { getListAuthor } from './queries';

const Authors = ({ data }) => {

  if (data.loading) {
    return <option>Loading...</option>
  }

  return (
    data.authors.map(({ name, id }) => (
      <option key={id} >{name}</option>
    ))
  )

}

export default graphql(getListAuthor)(Authors)
