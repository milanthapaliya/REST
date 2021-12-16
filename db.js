const mongoose = require('mongoose')
const dbUrl = 'mongodb://localhost:27017/database'
mongoose.connect(dbUrl).then(() => console.log("Connection Success"))
.catch((e) => console.log("Connection Failed"))