const express = require('express')
const app = express()
require('./db')
const studentRoutes = require('./routes/studentRoutes')
// const Student = require('./models/student')
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.get('/',(req,res) =>{
    res.redirect('/students')
})

//ABOUT ROUTE
app.get('/about', (req,res) => {
    res.render('about' , {title : 'About'})
})
//STUDENTS ROUTE
app.use(studentRoutes)

//404 page using middleware
app.use((req,res) => {
    res.status(404).render('404', {title : '404'})
})

const port  = process.env.port || 8000;
app.listen(port, () =>{
    console.log(`Server listening on ${port} `)
})

