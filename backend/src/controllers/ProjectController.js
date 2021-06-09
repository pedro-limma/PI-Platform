const Project = require('../models/Project');
const Period = require('../models/Period');

class ProjectController {
  async index(req, res) {
    const projects = await Project.find({});

    return res.json(projects);
  }

  async show(req, res) {
    const { id } = req.params;

    const project = await Project.find({ id });
    if (!project) {
      return res.status(401).json({
        message: 'Projeto nao encontrado'
      })
    }

    return res.json(project);
  }

  async store(req, res) {
    const {
      title, image, description, participants, github, video, period_id
    } = req.body;

    const period = await Period.findOne({ _id: period_id });
    if (!period) {
      return res.status(401).json({
        message: 'Periodo nao encontrado'
      })
    }

    const project = await Project.create({
      title, image, description, participants, github, video, period_id: period.id
    });

    period.projects.push(project);
    period.save();

    return res.json(project);
  }

  async update(req, res) {
    const { id } = req.params;
    const { image, github, video } = req.body;

    const project = await Project.findByIdAndUpdate({ _id: id }, { image, github, video });

    return res.json(project);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Project.findByIdAndDelete(id);

    return res.send(true);
  }
}

module.exports = new ProjectController();
