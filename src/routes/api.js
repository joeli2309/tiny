module.exports = function (express) { //setup router
  var router = express.Router();

// function to gen url
  function urlGen(){
    var characters = " ";
    var alphanumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//function for generating a random alphanumeric string
    for(var i = 0; i < 10; i++) {
        characters += alphanumeric.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
// this will return the json with random using urlgen
  router.get('/url', function(req, res){
    res.json({
      url:urlGen()}
    )});

     router.post('/url', function(req, res){
         url.create(req.body, function(err){
             res.status(500).json(err)
         },
         function(data){
             res.status(200).json(data)
         })
     });

     return router;
 };
