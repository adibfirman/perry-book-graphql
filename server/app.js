const express = require('express')
const graphQlHTTP = require('express-graphql')
const mongoose = require('mongoose')

const schema = require('./schema')

mongoose.connect('mongodb://adib:qwerty123@ds141654.mlab.com:41654/gpl-perry', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to database')
})
const app = express()

app.use('/graphql', graphQlHTTP({
  schema,
  graphiql: true
}))
app.listen(4000, () => {
  console.log('server listening on port 4000')
})
