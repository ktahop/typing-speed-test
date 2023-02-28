const express = require('express')
const app = express()
const cors = require('cors')

// require('./server/config/mongoose.config')

// app.use(cors(), express.json(), express.urlencoded({ extended: true }))

// require('./server/routes/leaderboard.routes')(app)

const server = app.listen(8000, () => console.log('Listening to port 8000'))

const io = require('socket.io')(server, { cors: true })

io.on('connection', socket => {
  socket.on('send_message', data => {
    socket.broadcast.emit('received_message', data)
  })
})