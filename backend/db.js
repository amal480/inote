const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inotebook"
const connecttomongo = () => {
    mongoose.connect(mongoURI,
        console.log("Connected")
    )
}
module.exports = connecttomongo;
