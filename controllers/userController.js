const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.user
      .find(req.query)
      .sort({ date: -1 })
      .then(dbuser => res.json(dbuser))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.user      
      .findOne({'email': req.params.email})
      .then(dbuser => res.json(dbuser))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const user = {
      _id: req.body._id,
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      bio: req.body.bio,
      linkTo: req.body.linkTo,
      relationship: req.body.relationship,
      status: req.body.status
    };
    db.user
      .create(user)
      .then(dbuser => res.json(dbuser))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.user
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbuser => res.json(dbuser))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.user
      .findById({ _id: req.params.id })
      .then(dbuser => dbuser.remove())
      .then(dbuser => res.json(dbuser))
      .catch(err => res.status(422).json(err));
  }
};