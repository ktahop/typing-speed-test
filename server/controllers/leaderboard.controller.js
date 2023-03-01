const { Leaderboard } = require('../models/leaderboard.model')

module.exports.index = (req, res) => {
  res.json({ message: 'Test '})
}

module.exports.getAll = (req, res) => {
  Leaderboard.find()
    .then(allData => res.json(allData))
    .catch(err => res.status(400).json(err))
}

module.exports.createOne = (req, res) => {
  Leaderboard.create(req.body)
    .then(createData => res.json(createData))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteOne = (req, res) => {
  Leaderboard.findOneAndDelete({ _id: req.params.id })
    .then(deleteData => res.json(deleteData))
    .catch(err => res.status(400).json(err))
}