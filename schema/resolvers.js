const { FakeData } = require("../FakeData")
const { FakeMovie } = require("../FakeData")
const _ = require("lodash")


const resolvers = {
    Query: {
        users: () => {
            return FakeData
        },
        user: (parent, args) => {
            let id = args.id
            let data = _.find(FakeData, { id: Number(id) })
            return data

        },
        movies: () => {
            return FakeMovie
        },
        movie: (parent, args) => {
            let name = args.name
            let data = _.find(FakeMovie, { name })
            return data
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            let newUser = args.input
            newUser.id = FakeData.length
            FakeData.push(newUser)
            return newUser
        },
        updateName: (parent, args) => {
            let newName = args.input.newName
            let userID = args.input.id
            let uUser
            FakeData.forEach((user) => {
                if (user.id == userID) {
                    user.name = newName
                    console.log(user)
                    uUser = user
                }
            })
            return uUser
        },
        deleteUser: (parent, args) => {
            let delUser = args.id
            _.remove(FakeData, (user) => user.id === Number(delUser))
            return null

        }

    },

    User: {
        favMovies: () => {
            let movies = _.filter(FakeMovie, (movi) => {
                return movi.realeaseYear > 2000
            })
            return movies
        }
    }



}


module.exports = { resolvers }