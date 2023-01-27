const { Router } = require('express')

const router = Router()

const groceryList = [
  {
    item: 'milk',
    quantity: 2,
  },
  {
    item: 'cereal',
    quantity: 1,
  },
  {
    item: 'pop-tarts',
    quantity: 1,
  },
]

router.get('/', (request, response) => {
  // set cookie
  response.cookie('visited', true, {
    maxAge: 60000,
  });
  response.send(groceryList);
})

router.get('/:item', (request, response) => {
  // unparsed cookie
  // console.log(request.headers.cookie);
  console.log(request.cookies);
  const { item } = request.params;
  const groceryItem = groceryList.find((g) => g.item === item);
  response.send(groceryItem);
})

router.post('/', (request, response) => {
  console.log(request.body);
  groceryList.push(request.body);
  response.send(201);
})

module.exports = router

/*
HTTP cookies in general are really just blocks of data or pieces of information
that is sent from the web server (in our case it's our express api)
it sends data from our web server to the client (web browser)

Why is cookies useful?
In general, http is stateless, that means is between subsequent requests 
there's no correlation, no information that's shared between those requests at all

Cookies allow http request to have state
Request to web server -> web server send back a cookie -> cookie is stored on the client side -> subsequent request will get cookie data for caling new api

*/