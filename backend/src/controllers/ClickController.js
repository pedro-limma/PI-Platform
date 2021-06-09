const Project = require('../models/Project');

class ClickController {
  async increment(req, res) {
    const { id } = req.params;

    try {
      const project = await Project.findOneAndUpdate({ _id: id }, {
          $inc: {'times_clicked': 1}
        },
        { new: true }
      );

      return res.json(project);
    } catch (err) {
      return res.status(401).json({
        message: 'Projeto nao encontrado'
      })
    }
  }
}

module.exports = new ClickController();
