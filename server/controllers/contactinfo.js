const ContactInfo = require('../models').ContactInfo;

module.exports = {
  create(req, res) {
    return ContactInfo
      .create({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        country: req.body.country,
        email: req.body.email,
      })
      .then(contactinfo => res.status(200).send(contactinfo))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return ContactInfo
      .all()
      .then(contactinfo => res.status(200).send(contactinfo))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return ContactInfo
    .findById(req.params.id)
    .then(contactinfo => {
      if (!contactinfo) {
        return res.status(404).send({
          message: 'contact Not Found',
        });
      }
      return res.status(200).send(contactinfo);
    })
    .catch(error => res.status(400).send(error));
  },
};
