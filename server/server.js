const express = require('express');
const app = express();
const controllers = require('./controllers');
const mcRouter = express.Router();
const Score = require('./dbSchema');
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://adminjen:T0lrNKqXpt42pLTK@cluster0.srewb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoURI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('pls help');
})

app.use('/api', mcRouter);

// works on localhost:3000/ "name"
mcRouter.get('/:name', (req, res)=> { 
  try{
    console.log('HELLO ', req.params.name);
    Score.find({name: req.params.name}, (err, found)=>{
      console.log('inside score find ', found);
      return res.status(200).json(found[0]);
    })
  } catch (err){
    return res.status(400).send(err);
  }
})

mcRouter.delete('/:name', (req, res)=>{
  try{
    console.log('deleting: ', req.params.name);
    Score.deleteOne({name: req.params.name}, (err, something)=>{
      console.log(something);
    })
    console.log('after score.remove line')
    return res.status(200).send('delete sucess');
  } catch (err){
    return res.status(400).send('DELETE ERROR WHAT: ', err);
  }
}) 

mcRouter.put('/:name', (req, res)=>{
  try{
    console.log('CHANGING SOMETHING: ', req.body);
    Score.updateOne({name: req.body.name}, req.body, (err, something)=>{
      console.log('CHANGING SOMETHING :' , something);
    })
    console.log('after updating')
    return res.status(200).send('update successf');
  } catch (err){
    return res.status(400).send('DELETE ERROR WHAT: ', err);
  }
});

app.post('/getDB', controllers.addDB, (req, res)=>{
  return res.json('Gj jen, u added');
}, );

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('pls rip');
});


app.listen(3000, () => console.log('Listening to port: 3000'));