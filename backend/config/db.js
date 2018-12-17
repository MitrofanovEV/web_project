const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://egormitrofanov:pass1234@ds026018.mlab.com:26018/project_web',
  { useNewUrlParser: true }
)

const connection = mongoose.connection

connection.on('error', function () {
  console.log('Connect error')
})
connection.once('open', async function () {
  console.log('MongoDB successfully connected')
})

module.exports = connection