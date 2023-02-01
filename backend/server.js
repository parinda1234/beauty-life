var express = require('express');

var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
mongoose.set('strictQuery', false); 
mongoose.connect("mongodb://localhost:27017/pari",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("DB Connectedddd!!!!!!!!!!!")
    }
});
const corsOptions = {
    origin: "http://localhost:4200",
    credentials: true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);



app.get('/', (req, res) => res.send('hello!'));
  http.listen(3000, () => {
  console.log('listening on *:3000');
});

io.on('connection', (socket) => {  

    console.log('a user connected');
 
   socket.on('message', (msg) => {
 
      console.log(msg);
 
     socket.broadcast.emit('message-broadcast', msg);
 
    });
 
 });
 app.use('/user/create', require('./routes/routes') , async (req, res) => {
    res.status(201).json({ message: "" });
  });
  app.use('/appoinment/getAll', require('./routes/routes') , async (req, res) => {
    res.status(201).json({ message: "" });
  });

  module.exports.app=app;