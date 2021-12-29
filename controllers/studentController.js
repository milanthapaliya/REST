const Student = require('../models/student')

const student_index = (req,res) => {
    Student.find().then((result) => {
        // console.log(result)
        res.render('index', {students : result, title : 'Home'})
    }).catch((e) => console.log(e));
}

const student_details = (req,res) => {
    const id = req.params.id
    Student.findById(id).then((result) => {
        res.render('singlestudent', {student : result, title : 'Single Student'})
    }).catch((e) => res.render('404', {title : '404'}));
}

const student_create_get = (req, res) => {
    res.render('addstudent', {title : 'Add Students'})
}


const student_create_post = (req,res) => {
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
}

const student_update_get = (req,res) => {
    const id = req.params.id
    Student.findById(id).then((result) => {
        res.render('updatestudent', {student : result, title : 'Update Student'})
    }).catch((e) => console.log(e));
}
const student_update_put = (req,res) => {
    const id = req.params.id
    console.log("reached Here");
    Student.findByIdAndUpdate(id, {name : req.body.name, age : req.body.age}, (err,docs) => {
        if(!err){
            console.log(docs)
            // res.redirect(`/students/${id}`)
        }
        else{
            console.log(err)
        }
    })
}

const student_delete = (req,res) => {
    const id = req.params.id
    Student.findByIdAndDelete(id).then(result => {
        console.log("inside deletebyid in router.js")
        res.json({redirect : '/students'})
    }).catch((err) => console.log(err))
}
module.exports = {
    student_index,
    student_details,
    student_create_get,
    student_create_post,
    student_update_get,
    student_update_put,
    student_delete
}