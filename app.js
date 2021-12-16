// const express = require('express')
// const app = express()
// require('./db')

// app.listen(8000,() => {
//     console.log("Server listening on port 8000")
// })

const express = require('express')
const app = express()
require('./db')
app.set('view engine', 'ejs')

app.get('/',(req,res) =>{
    res.render('index', {title : 'Home'})
})
app.get('/about', (req,res) => {
    res.render('about' , {title : 'About'})
})
app.get('/add', (req, res) => {
    res.render('addstudent', {title : 'Add Students'})
})

//404 page using middleware
app.use((req,res) => {
    res.status(404).render('404', {title : '404'})
})

const port  = process.env.port || 8000;
app.listen(port, () =>{
    console.log(`Server listening on ${port} `)
})

