/* const { text } = require('express');
const http = require('http');
const {readFileSync} = require('fs');


const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeImg = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req,res)=>{
 //console.log(req.method)
 const url = req.url
 // home page
 if(url==="/"){
 console.log(req.url)
 res.writeHead(200,{'content-type':'text/html'})
 res.write(homePage)
 res.end()} 
 // about page
 else if(url==='/about'){
  console.log(req.url)
  res.writeHead(200,{'content-type':'text/html'})
  res.write("<h1>about page</h1>")
  res.end()}

 // style
 else if (url === '/styles.css'){
  res.writeHead(200,{'content-type':'text/css'})
  res.write(homeStyle)
  res.end()
 }


 // iamge
 else if(url==='/logo.svg'){
  console.log(req.url)
  res.writeHead(200,{'content-type':'image/svg+xml'})
  res.write(homeImg)
  res.end()}
  
 // logic
 else if(url==='/broswer-app.js'){
  console.log(req.url)
  res.writeHead(200,{'content-type':'text/javascript'})
  res.write(homeLogic )
  res.end()}
  
  // error page
 else{
  res.writeHead(404,{'content-type':'text/html'})
  res.write("<h1>page is not fund</h1>")
  res.end();
 }
})

server.listen(5000) */


// express_app instead of traditional node. 


/* app.get('/', (req, res)=>{
 res.status(200).send('home page')
})

app.get('/about',(req, res)=>{
 res.status(200).send('about page')
})

app.all('*', (req,res)=>{
 res.status(404).send("<h4>resource not found</h4>")
}) */



/* // setup static and middleware
app.use(express.static('./public'))

const path = require('path')
/* app.get('/', (req, res)=>{
 res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
}) */

// adding to static assets
//SSR

/* app.all('*',(req, res)=>{
 res.status(404).send('resource is not found.')
})

//app.get
//app.post
//app.put
//app.del
//app.all
//app.use
//app.listen 
*/


/* const {products} = require('./data')


app.get('/',(req, res)=>{
 //res.json(products)
 res.send("<h1>home page</h1> <a href='/api/products'>products</a>" )
}) */

//  return new product to the api
/* app.get('/api/products', (req,res)=>{  
 const newProduct = products.map((product)=>{
  const {id, name, image}=product
  return{id, name, image} 
 })
 res.json(newProduct)
}) */

// return specific product to the api
//app.get('/api/products/:productID', (req,res)=>{
 //console.log(req)
 //console.log(req.params)
 //const {productID} = req.params;
 //const singleProduct = products.find((product)=>
/*  product.id===Number(productID))
 if(!singleProduct){
  return res.status(404).send('product does not exist')
 }
 else{return res.json(singleProduct)}
 })

app.get('/api/products/:productID/reviews/:reviewID',(req, res)=>{
 console.log(req.params)
 res.send('hello world')
}) */


// we can scraping data by sorting them first. the key value is 
// ......api/search_by_date?tags=front_page .... usw
// the query string is however depends on how we designed the server
// let us now set us api for my own web.

/* app.get('/api/v1/query',(req,res)=>{
 //console.log(req.query)
 const {search, limit} = req.query
 let sortedProducts=[...products]
 if(search){
   sortedProducts = sortedProducts.filter((product)=>{
   return product.name.startsWith(search)
  })}
 if(limit){
  sortedProducts=sortedProducts.slice(0, Number(limit))
 }
 if(sortedProducts.length<1){
  //res.status(200).send('no product matches your searchs.')
  return res.status(200).json({'secuss':'True','data':[]})
 }
 res.status(200).json(sortedProducts)
}) */
/// please go return when we set operaters, otherwise the server will keep working


//const authorize  = require('./authorize')

//const logger = require('./logger')




//const morgan = require('morgan')

// req => middleware =>res

//app.use([logger, authorize])
// use third party mittelware morgan

/* app.use(morgan('tiny'))
// api/home/about/product, this is now only applying on brower but also the ones with api.
app.get('/',(req,res)=>{ 
 res.send('Home')
})


app.get('/about',(req,res)=>{
 res.send('About')
})

app.get('/api/products',(req,res)=>{ 
 res.send('products')
})


app.get('/api/items',(req,res)=>{
 res.send('items')
})
 */

const express = require('express')
const app = express()
const auth = require('./routers/auth')
const people = require('./routers/people')
//console.log(people)

app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({extended: false}))

// parse json
app.use(express.json())
app.use('/api/people',people)
app.use('/login', auth)




















app.listen(5000,()=>{
 console.log('server is listening on port 5000')
}) 