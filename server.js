const express = require('express');
const app = express();
// const dotenv = require('dotenv');
const mongoose = require('mongoose');
const port = process.env.PORT || 8081;

app.use (express.json());
app.use (express.urlencoded({extended:false}));
// app.use (authRoutes);
// app.use (category);

app.use ((req,res)=> {
     res.send("<h2>This is my App</h2>");
});

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 8081;
// const server = http.createServer(function(req, res) {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n I Love Myself');
// });
mongoose.connect(`mongodb+srv://Sarah:${process.env.DATABASEURL}@cluster0-qwxt7.mongodb.net/test?retryWrites=true&w=majority}`, 
{
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    })
    .then(result => {
        console.log("Successfully connect to MongoDB.");
        app.listen(8081);
        initial();
})
    .catch(err => console.error("Connection error", err));

// server.listen(port, hostname, function() {
//   console.log('Server running at http://'+ hostname + ':' + port + '/');
// });