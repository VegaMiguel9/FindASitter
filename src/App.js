import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
// import About from './components/About';
// import Contact from './components/Contact';   
import Header from './components/Header';
import LandingPage from './components/LandingPage';
// import Projects from './components/Projects';
import Sitters from './components/Sitters';
import styled from 'styled-components';
import navBar from './components/Nav';

const httpLink = createHttpLink({
  uri: 'graphql',
});

const authLink = setContext((_, { headers}) => {
 // get the authentication token from local storage if it exists 
  const token = localStorage.getItem('id_token');
//return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  //set up our client to execute the `authlink` middleware prior to making the request t our Graphql API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// code for login form

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;`;

  // function App() {
  //   return (
  //     <AppContainer>
  //     <AccountBox />
  //   </AppContainer>
  //   );
  // }


function App() {


  return (
    <ApolloProvider client={client}>
    <Router>
      <Routes>
        {/* <Route path="/" element={<navBar />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/sitters" element={<Sitters />} />
      </Routes>
    </Router>
    </ApolloProvider>
    
     

  );
}

export default App;