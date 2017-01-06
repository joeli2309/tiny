const url = require('../../models/tiny');

module.exports = (express) => {
  const router = express.Router();


  router.get('/url/:tiny' (req,res) =>{
    req.body.tiny = req.params.tiny;
    url.find(req.body,(err) => {
      res.status(500).json(err);
    }, (data) => {
      res.redirect(data.domain);
      console.log(data.domain);

    })
  });

  return router;
}
