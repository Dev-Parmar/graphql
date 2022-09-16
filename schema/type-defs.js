const { gql } = require("apollo-server")

const typeDefs = gql`

type User{
id: ID!
name: String!
favMovies: [Movie!]
}

type Query{
users: [User!]!
user(id: ID!): User
movies:[Movie!]!
movie(name:String!): Movie
}

input NewUser{
name: String!
}

input UpdateName{
id: ID!
newName: String!
}

type Mutation{
createUser(input: NewUser!):  User!
updateName(input:UpdateName!): User
deleteUser(id: ID!):User

}



type Movie{
name: String!
releaseYear: Int!
}


`

module.exports = { typeDefs }