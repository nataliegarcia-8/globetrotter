const db = require("../models");

// Defining methods for the UserssController
module.exports = {
  findAll: function(req, res) {
    db.Photos
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Photos
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Photos
      .create(req.body)
      .then(dbModel => {
        console.log(dbModel);
        return db.Trips.findOneAndUpdate({ _id: req.params.id }, { $push : {photos: dbModel._id }}, { new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  remove: function(req, res) {
    db.Photos
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};