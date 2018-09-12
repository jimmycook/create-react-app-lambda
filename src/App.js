import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.svg';
import './App.css';

import client from './apollo';

import { Query } from "react-apollo";
import gql from "graphql-tag";

const Books = () => (
  <Query
    query={gql`
      {
        books {
          title
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.books.map(({ title }) => (
        <div key={title}>
          <p>{`${title}`}</p>
        </div>
      ));
    }}
  </Query>
);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Books />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
