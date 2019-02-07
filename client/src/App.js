import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/Book/List';
import BookForm from './components/Book/Form';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Perry's Reading List</h1>
        <BookList />
        <BookForm />
      </div>
    </ApolloProvider>
  );
}

export default App;
