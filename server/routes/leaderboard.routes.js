const LeaderboardController = require('../controllers/leaderboard.controller');

module.exports = app => {
  app.get('/api', LeaderboardController.index)
  app.get('/api/leaderboard', LeaderboardController.getAll)
  app.post('/api/leaderboard', LeaderboardController.createOne)
  app.delete('/api/leaderboard/:id', LeaderboardController.deleteOne)
};