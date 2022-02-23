const express = require('express')
const {PrismaClient} = require('@prisma/client')
const {graphqlHTTP} = require('express-graphql')
const {makeExecutableSchema}= require('@graphql-tools/schema')

const app = express()
const prisma = new PrismaClient()

const typeDefs=`
    
    type Books{
        title: String!
        category : String 
    }
    
    type Query{
        allBooks:[Books!]!
    }
`
const resolvers={
    Query:{
        allBooks:()=>{
            return prisma.books.findMany()
        }
    }
}

 const schema = makeExecutableSchema({
    resolvers,
    typeDefs
})

app.use('/graphql',graphqlHTTP({
    schema
}))


app.get('/',(req,res)=>{
    res.status(200).send({
        message:'Hello world'
    })
})

app.listen(8000,()=>console.log("http://localhost:8000"))
