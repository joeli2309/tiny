module.exports = (express) => {
  const router = express.Router();

  router.post('/status', (req, res) => {
    console.log('req.body');
    res.json({
      healthy: true,
    });
  });

  //load indivifual file ROUTES
  //router.use('/api/', require('./api/user')(express));
  return router;
};
