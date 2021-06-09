const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  period_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Period'
  },
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  times_clicked: {
    type: Number,
    default: 0,
  },
  // participants: {
  //   type: String,
  //   required: true,
  // },
  github: {
    type: String,
    required: true,
  },
  // trello: {
  //   type: String,
  //   required: true,
  // },
  video: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema)
