const express = require('express')
const router = express.Router()
const Student = require('../models/student')
router.get('/students', (req,res) => {
    Student.find().then((result) => {
        // console.log(result)
        res.render('index', {students : result, title : 'Home'})
    }).catch((e) => console.log(e));
})

router.get('/students/add', (req, res) => {
    res.render('addstudent', {title : 'Add Students'})
})
router.post('/students', (req, res) => {
    console.log(req.body)
    const student = new Student({
        name : req.body.name,
        age : req.body.age
    })
    student.save().then(() => {
        console.log("Data Insert Success");
        res.redirect('/students')
    }).catch((e) =>{
        console.log(e);
        res.send("Data Insert Failed");
    })
})
router.get('/students/:id', (req,res) => {
    const id = req.params.id
    Student.findById(id).then((result) => {
        res.render('singlestudent', {student : result, title : 'Single Student'})
    }).catch((e) => console.log(e));
})
router.get('/students/update/:id', (req,res) => {
    const id = req.params.id
    Student.findById(id).then((result) => {
        res.render('updatestudent', {student : result, title : 'Update Student'})
    }).catch((e) => console.log(e));
})
router.delete('/students/:id', (req,res) => {
    const id = req.params.id
    Student.findByIdAndDelete(id).then(result => {
        console.log("inside deletebyid in router.js")
        res.json({redirect : '/students'})
    }).catch((err) => console.log(err))

})
router.put('/students/:id', (req,res) => {
    const id = req.params.id
    console.log("reached Here");
    Student.findByIdAndUpdate(id, {name : req.body.name, age : req.body.age}, (err,docs) => {
        if(!err){
            console.log(docs)
            console.log(req.body.age)
            // res.redirect(`/students/${id}`)
        }
        else{
            console.log(err)
        }
    })
    
})

module.exports = router