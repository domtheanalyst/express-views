// Configurations
const express = require('express');
const app = express();
const path = require('path');

// Middlewares
app.use('/static', express.static('public'));

app.use(express.urlencoded({extended:false}));



// Settings

//app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// Routes
app.get('/home', (req, res) => {

    let data = { 
        name: 'Dominic', 
        hobbies: ['watching football', 'learning chinese', 'coding', 'researching', 'swimming'] 
    } 

    res.render('home', {data:data});
});


app.post('/feedback', (req, res)=>{
    console.log(req.body)
    res.json(req.body)
})


module.exports = app





