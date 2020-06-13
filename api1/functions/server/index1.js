const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
var firebase =require('firebase/app');
require('firebase/database');

const firebaseConfig = {
  apiKey: "AIzaSyDNo9aBeCqchlsft5ZJ12BRvMljqo8Fe38",
  authDomain: "nodejsjsonapi.firebaseapp.com",
  databaseURL: "https://nodejsjsonapi.firebaseio.com",
  projectId: "nodejsjsonapi",
  storageBucket: "gs://nodejsjsonapi.appspot.com",
  messagingSenderId: "210696855329",
  appId: "1:210696855329:web:7aa78ffe667dda475b6860"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation{
    setName: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello roger!',
  },
  Mutation:{
    setName:async()=>
    {
      await database.ref('users/').push({
        name: 'alejandro',
        surname: 'gomez gonzalez the best'
      })
      return true
    }
  }
};

function gqlServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // Enable graphiql gui
    introspection: true,
    playground: true
  })

  const app = express()
  server.applyMiddleware({app, path: '/', cors: true})

  return app
}

module.exports = gqlServer