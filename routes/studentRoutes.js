const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')
router.get('/students', studentController.student_index)

router.get('/students/add',studentController.student_create_get)
router.post('/students', studentController.student_create_post)
router.get('/students/:id', studentController.student_details)
router.get('/students/update/:id', studentController.student_update_get)
router.delete('/students/:id', studentController.student_delete)
router.put('/students/:id', studentController.student_update_put)

module.exports = router