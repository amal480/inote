const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/r"
const connecttomongo = () => {
    // try {
    //     mongoose.connect(mongoURI)
    //     console.log('connected ')
    // } catch (error) {
    //     console.log(error)
    // }

    mongoose.connect(mongoURI,
        console.log("Connected")
    )
}
module.exports = connecttomongo;
