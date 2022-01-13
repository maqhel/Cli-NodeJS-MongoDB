const {connect, connection} = require('mongoose');
const {DB} = require("./config")

const connectDB = async ()=> {
    await connect(DB)
}

connection.on('error', err => console.log(err))

module.exports = {
    connectDB,
    connection
}

