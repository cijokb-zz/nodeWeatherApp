const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

console.log(__dirname);
const publicDirPath= path.join(__dirname,'../public');

app.use(morgan('combined'));

app.set('view engine','hbs');
app.use(express.static(publicDirPath));

app.get('',(req,res)=>{
    //res.send('<h1>Weather App</h1>');
    res.render('index',{
        title : 'Weather'
    });
});

app.get('/help',(req,res)=>{
    res.render('help');
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/weather',(req,res)=>{
    res.send({'weather':'nice'});
})

app.listen(3000,()=>{
    console.log("Sever is up on port 3000");
});