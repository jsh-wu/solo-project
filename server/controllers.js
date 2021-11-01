const Score = require('./dbSchema');
controllers = {};

controllers.addDB = (req, res, next) =>{
  Score.create(req.body, (err, totalEntry) => {
    console.log(req.body);
    if (err) return res.sendStatus(400);
    console.log(totalEntry);
  })
  return next();
}

controllers.deleteDB = (req, res, next) => {
  try{
    console.log('deleting: ', req.params.name);
    Score.deleteOne({name: req.params.name})
    console.log('after score.remove line')
    return next()
  } catch (err){
    return res.status(400).send('DELETE ERROR WHAT: ', err);
  }
  
}

module.exports = controllers;