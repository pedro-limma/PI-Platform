const Vote = require('../models/Vote');
const Project = require('../models/Project');

const { Workbook } = require('exceljs');
const tempfile = require('tempfile');

class ResultController {
  async show(req, res) {
    const { projectId } = req.params;

    const votes = await Vote.find({
      project_id: projectId
    });

    if (!votes) {
      return res.status(401).json({
        message: 'Project not found'
      })
    }

    const populated = await Project.populate(
      votes,
      {
        path: 'project_id',
        select: 'title',
      },
    );

    const projectTitle = populated[0].project_id.title;
    const voteEmails = populated.map(vote => {
      return vote.email;
    });

    let result = {};
    voteEmails.forEach(x => {
      result[x] = (result[x] || 0) + 1;
    });

    const emailCounter = [];
    for (let i = 0; i < Object.keys(result).length; i += 1) {
      const objEmail = Object.keys(result)[i]

     emailCounter.push({
        email: objEmail,
        counter: result[objEmail]
      })
    }

    const workbook = new Workbook();
    const sheet = workbook.addWorksheet(projectTitle);

    sheet.columns = [
      { header: 'Email', key: 'email', width: 32 },
      { header: 'Qtde. votos', key: 'amount', width: 10 },
    ]

    emailCounter.forEach(i => {
      sheet.addRow({ email: i.email, amount: i.counter });
    })

    const tempFilePath = tempfile('.xlsx');
    await workbook.xlsx.writeFile(tempFilePath, { filename: projectTitle });

    return res.sendFile(tempFilePath);
  }
}

module.exports = new ResultController();
