const contactInfoController = require('../controllers').contactinfo;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the contactinfo API!',
  }));

  app.post('/api/contactinfos', contactInfoController.create);
  app.get('/api/contactinfos', contactInfoController.list);
  app.get('/api/contactinfos/:id', contactInfoController.retrieve);
};
