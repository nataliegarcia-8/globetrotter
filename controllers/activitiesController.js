const db = require("../models");

// Defining methods for the UserssController
module.exports = {
  findAll: function(req, res) {
    db.Activities
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Activities
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Activities
      .create(req.body)
      .then(dbModel => {
        console.log(dbModel);
        return db.Trips.findOneAndUpdate({ _id: req.params.id }, { $push : {activities: dbModel._id }}, { new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  update: function(req, res) {
    db.Activities
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));n
  },
  remove: function(req, res) {
    db.Activities
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};