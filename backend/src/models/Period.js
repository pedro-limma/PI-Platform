const mongoose = require('mongoose')
const ProjectSchema = require('./Project');

const PeriodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
    description: {
    type: String,
    required: true,
  },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Period', PeriodSchema)
