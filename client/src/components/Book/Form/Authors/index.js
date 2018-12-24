import React from 'react';
import { graphql } from 'react-apollo';

import { getListAuthor } from './queries';

const Authors = ({ data }) => {

  if (data.loading) {
    return <option>Loading...</option>
  }

  return (
    <React.Fragment>
      <option>--- Select Author ---</option>
      {data.authors.map(({ name, id }) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </React.Fragment>
  )

}

export default graphql(getListAuthor)(Authors)
