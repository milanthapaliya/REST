// const express = require('express')
// const app = express()
// require('./db')

// app.listen(8000,() => {
//     console.log("Server listening on port 8000")
// })

const express = require('express')
const app = express()
require('./db')
const Student = require('./models/student')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : false}))
app.get('/',(req,res) =>{
    res.render('index', {title : 'Home'})
})
app.get('/about', (req,res) => {
    res.render('about' , {title : 'About'})
})
app.get('/add', (req, res) => {
    res.render('addstudent', {title : 'Add Students'})
})
app.post('/students', (req, res) => {
    console.log(req.body)
    const student = new Student({
        name : req.body.name,
        age : req.body.age
    })
    student.save().then(() => {
        console.log("Data Insert Success");
        res.send("Data successfully inserted")
    }).catch((e) =>{
        console.log(e);
        res.send("Data Insert Failed");
    })
})

// app.get('students', (req,res) => {
//     const student = new Student({
//         name : 'Milan',
//         age : 23
//     })
//     student.save().then(() => console.log("Insert Success")).catch((e) => console.log(e))
// })

//404 page using middleware
app.use((req,res) => {
    res.status(404).render('404', {title : '404'})
})

const port  = process.env.port || 8000;
app.listen(port, () =>{
    console.log(`Server listening on ${port} `)
})

