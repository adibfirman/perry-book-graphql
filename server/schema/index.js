const graphql = require('graphql')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql

// dummy data
const books = [
  { id: '1', name: 'Harry Potter', genre: 'Fantasy' },
  { id: '2', name: 'Mr. Bean', genre: 'Comedy' },
  { id: '3', name: 'xXx: The return Cage', genre: 'Action' }
]

const authors = [
  { id: '1', age: 60, name: 'Rothfuss' },
  { id: '2', age: 61, name: 'Rothfuss Man' },
  { id: '3', age: 63, name: 'Rothfuss Fir' }
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    age: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(_, args) {
        return books.filter(book => book.id === args.id)[0]
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(_, args) {
        return authors.filter(author => author.id === args.id)[0]
      }
    }
  }
})

module.exports = new GraphQLSchema({ query: RootQuery })
