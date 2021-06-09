const mongoose = require('mongoose')

const VoteSchema = new mongoose.Schema({
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Period'
  },
  email: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Vote', VoteSchema)
