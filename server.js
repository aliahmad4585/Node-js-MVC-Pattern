const express = require('express');
const app = express()
const path =  require('path')
const PORT = 3000

//built in middleware
app.use(express.json())
app.use('/site', express.static(path.join(__dirname,'public')));

//set param
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));


const  friendRouter = require('./routes/friends.route')

//friends route
app.use('/friends', friendRouter);

app.get('/', (req, res) => {
      res.render('index', {
          name:"Ali Ahmad"
      });
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});