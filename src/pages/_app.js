

import { useState } from 'react';

import '../styles/globals.css'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'

import LogRocket from 'logrocket';
LogRocket.init('rcl5sd/blackbook');

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import { PRIVATE_BLACKBOOK_API } from './api/constant';


const apolloHttpLink = createHttpLink({
  uri: PRIVATE_BLACKBOOK_API,
})

const apolloAuthContext = setContext(async (_, {headers}) => {
  return {
      headers: {
          ...headers,
          'content-type' : 'application/json',
          'x-hasura-admin-secret' : '0QIGXLSmIeT5WmkAfv0Q054OjI0iBIgxn5EPMgj06Hp2MKCzndW5zt69ahl3XBzT'
      },
  }
})


const client = new ApolloClient({
  link: apolloAuthContext.concat(apolloHttpLink),
  cache: new InMemoryCache(),
})


const classes = {
  root : "bg-[#1F1F1F]",
}

const MyApp = ({ Component, pageProps }) => {

  const [ route, setRoute ] = useState();

  const handleRouteChange = (value) => {
      setRoute(value);
  }
  
    
  return (
    <div className={classes.root}>
      
      <ApolloProvider client={client}>
        <Header handleRouteChange={handleRouteChange}/>
        <Component {...pageProps} />
        <Footer />
      
      </ApolloProvider>
    </div>
  )
}

export default MyApp
