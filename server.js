var express = require('express'),
  app = express(),
  port = 8082; //process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Admin = require('./api/models/adminModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
mongoose
    .connect('mongodb+srv://Sarah:41860000@cluster0-qwxt7.mongodb.net/test?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true })
            .then((result)=>{
                console.log('database connected');
                app.listen(3000);
            })
            .catch(err=>{console.log(err)})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

var routes = require('./api/routes/adminRoute'); //importing route
routes(app); //register the route

app.listen(port);

console.log('TutoringApp API server started on: ' + port);
