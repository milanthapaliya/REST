const mongoose = require('mongoose')
const dbUrl = process.env.DB_URL
mongoose.connect(dbUrl).then(() => console.log("Connection Success"))
.catch((e) => console.log("Connection Failed"))
