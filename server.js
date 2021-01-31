const express = require('express')
const path = require('path')
const app = express()
const chalk = require('chalk');
const config = require('config');
const Routing = require('./routers/Routing');
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use('/', Routing);

app.use(function(req, res, next){
  res.status(404);
  if(req.accepts('json')){
      res.json(errormessage);
  }
  if(req.accepts('html')){
      res.render('error');
  }
  if(req.accepts('text')){
      res.send(errormessage);
  }
})






module.exports = app;

