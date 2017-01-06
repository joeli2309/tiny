const url = require('../../models/url');

module.exports = (express) => {
  const router = express.Router();


  // find read all users
  router.get('/url', (req, res) => {
    user.findAll( (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // find read one
  router.get('/url/:id', (req, res) => {
    req.body.id = req.params.id;
    user.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });


//create
router.post('/url', (req, res) => {
  user.create(req.body, (err) => {
    // errors call back
    res.status(500).json(err);
  }, (data) => {
    // success call back
    res.status(200).json(data);
  });
});

// delete
  router.delete('/url/:id', (req, res) => {
    req.body.id = req.params.id;
    user.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // update
  router.post('/url/:id', (req, res) => {
    req.body.id = req.params.id;
    user.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
