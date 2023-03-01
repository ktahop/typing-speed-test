const express = require('express')
const app = express()
const cors = require('cors')

require('./server/config/mongoose.config')

app.use(cors(), express.json(), express.urlencoded({ extended: true }))

require('./server/routes/leaderboard.routes')(app)

const server = app.listen(8000, () => {
  console.log('Server is running')
})

const io = require('socket.io')(server, {
  cors: true
})


io.on('connect', socket => {
  console.log('User Connected:',socket.id)
  socket.on('send', data => {
    io.emit('receive', data)
  })
})