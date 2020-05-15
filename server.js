var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  user = require('./tutor-app/models/userModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
mongoose
    .connect('mongodb+srv://Sarah:41860000@cluster0-qwxt7.mongodb.net/test?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true })
            .then((result)=>{
                console.log('database connected');
                // app.listen(8082);
            })
            .catch(err=>{console.log(err)})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });

var routes = require('./tutor-app/routes/userRoute'); //importing route
// var lesson = require('./tutor-app/routes/lessonRoute');
var subject = require('./tutor-app/routes/subjectRoute');
var category = require('./tutor-app/routes/categoryRoute');
routes(app); //register the route
// lesson(app);
subject(app);
category(app);
// app.use('/', routes)
app.listen(port);

console.log('TutoringApp API server started on: ' + port);
  