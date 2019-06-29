import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Switch, Route } from 'react-router-dom';
import AnimeListContainer from './components/AnimeListContainer/AnimeListContainer';
import AnimeSingle from './components/AnimeSingle/AnimeSingle';

// apollo client setup
const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <nav className="navbar">
        <span className="navbar-brand mb-0 h1">-Kushon-<i className="tagline">A collection of animes</i></span>
      </nav>
      <div className="App container mb-5">
        <Switch>
          <Route path="/anime/:id" component={AnimeSingle} />
          <Route exact path="/" component={AnimeListContainer} />
        </Switch>
      </div>
      <footer className="text-center">Powered by the <a href="https://kitsu.docs.apiary.io/#">Kitsu API</a></footer>
    </ApolloProvider>
  );
}

export default App;
