const { ApolloServer, gql } = require('apollo-server')
const fs = require('fs')
const mongoose = require('mongoose')

// Database connection
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
const database = mongoose.connection
database.on('error', console.error.bind(console, 'connection error:'))
database.once('open', () => console.log('We are connected to MongoDB'))

// GraphQL schema types and resolvers
const typeDefs = gql(
  fs.readFileSync(`${__dirname}/graphql/schema.graphql`, { encoding: 'utf-8' })
)
const resolvers = require('./graphql/resolvers')

// Apollo GraphQL server
const server = new ApolloServer({ typeDefs, resolvers })
server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`GraphQL server ready on ${url}`))
  