const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Menu.find({})
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  }
};