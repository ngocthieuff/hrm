const express = require('express')

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

app.listen(PORT, () => console.log(`running express server on PORT ${PORT}`))

const groceries = [
    {
        item: 'ngoc',
        quantity: 1
    }, 
    {
        item: 'milk',
        quantity: 9
    }
]

// app.get('/groceries', 
//     (req, res, next) => {
//         console.log('before handling request')
//         next()
//     }, 
//     (req, res, next) => {
//         res.send(groceries)
//         next()
//     },
//     () => {
//         console.log('Finished')
//     }
// )

app.get('/groceries',
    (req, res, next) => {
        res.send(groceries)
        next()
    }
)

app.post('/groceries', (req, res) => {
    console.log(req.body)
    res.send(201)
})

app.get('/ab*cd', (req, res) => {
    res.send('ab*cd')
  })

app.get('/items/:item', (req, res) => {
    const { item } = req.params
    const groceryItem = groceries.find((g) => g.item == item)
    res.send(groceryItem)
})
