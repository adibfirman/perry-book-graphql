const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt } = graphql

// dummy data
const books = [
  { id: 1, name: 'Harry Potter', genre: 'Fantasy' },
  { id: 2, name: 'Mr. Bean', genre: 'Comedy' },
  { id: 3, name: 'xXx: The return Cage', genre: 'Action' }
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLInt } },
      resolve(_, args) {
        return books.filter(book => book.id === args.id)[0]
      }
    }
  }
})

module.exports = new GraphQLSchema({ query: RootQuery })
