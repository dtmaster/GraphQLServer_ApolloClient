import React from 'react';
import './App.css';
import {Query, ApolloProvider } from "react-apollo";
import {gql} from "apollo-boost";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/'
})

const client = new ApolloClient({
  cache,
  link
})



const GET_LAUNCHES = gql` 
query{
  user(id:1){
    name
    email
  }
}`;

function QUERYS(){
return(
<Query query={GET_LAUNCHES}>
{({ data, loading, error }) => {
        if (loading) return <p>Loading</p>;
        if (error) return <p>ERROR</p>;

        return (
          <div>
              Name : {data.user.name}<p/>
              Email : {data.user.email}
          </div>
          
        );
      }}
    </Query>
  );
};


function App() {
  return (
<ApolloProvider client={client}>
    <div className="App">
          <h2>Learn React</h2>
          <QUERYS/>
    </div>
    </ApolloProvider>
  );
}

export default App;
