const mongoose = require('mongoose')

function connect(){
  mongoose.connect('mongodb://localhost:27017/projeto-apirestful')
  const db = mongoose.connection

  db.once('open', () => {
    console.log('Connected to database')
  })

  db.on('error', () => console.log('Error'))
}

module.exports = {
  connect
}