const db = require("../models");

// Defining methods for the UserssController
module.exports = {
  findAll: function(req, res) {
    db.Trips
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Trips
      .findById(req.params.id)
      .populate("activities")
      .populate("expenses")
      .populate("photos")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Trips
      .create(req.body)
      .then(dbModel => {
        console.log(dbModel);
        return db.Users.findOneAndUpdate({ _id: req.params.id }, { $push : {trips: dbModel._id }}, { new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  update: function(req, res) {
    db.Trips
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  remove: function(req, res) {
    db.Trips
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};