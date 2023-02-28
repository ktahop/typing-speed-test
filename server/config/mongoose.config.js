const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/typing_leaderboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connection to database established'))
  .catch(err => console.log('Failed to connect to database', err))