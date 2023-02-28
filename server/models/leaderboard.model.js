const mongoose = require('mongoose')

const LeaderboardSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Enter a name!']
  },
  wordsPerMin: {
    type: Number
  },
  accuracy: {
    type: Number
  }
}, { timestamps: true })

module.exports.Leaderboard = mongoose.model('Leaderboard', LeaderboardSchema)