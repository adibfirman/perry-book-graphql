const express = require('express')
const graphQlHTTP = require('express-graphql')
const schema = require('./schema')

const app = express()

app.use('/graphql', graphQlHTTP({
  schema,
  graphiql: true
}))
app.listen(4000, () => {
  console.log('server listening on port 4000')
})
