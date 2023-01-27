const express = require('express')
const groceriesRoute = require('./routes/groceris')

const app = express()
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded())
/*
express.json() is a method inbuilt in express to 
recognize the incoming Request Object as a JSON Object. 
This method is called as a middleware in your application using the code: 
app.use(express.json());

express.urlencoded() 
is a method inbuilt in express to 
recognize the incoming Request Object as strings or arrays. 
This method is called as a middleware in your application using the code: 
app.use(express.urlencoded());
*/

app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`)
    next()
})

app.use('/api/v1/groceries', groceriesRoute)
// http://localhost:3001/api/v1/groceries/milk

app.listen(PORT, () => console.log(`Running Express Server on port ${PORT}`))