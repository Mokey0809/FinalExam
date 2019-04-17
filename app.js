const express = require('express');
const get = require('./function')
const fs = require('fs')
const hbs = require('hbs')

var text = undefined
get.getCity('asdad').then((msg) =>{
    return get.getWeather(msg.city)
}).then((msg) => {
    text = {
        capital:msg.city, 
        country:'Canada',
        temp: msg.temp,
        wind: msg.des
    }
    fs.writeFileSync(__dirname+'/public/weather.json', JSON.stringify(text))
}).catch((error) => {
    text = 'Error!!!'
})

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('getCurrentWeather', () => {
    return JSON.stringify(text)
})

app.set('')
app.use('/', express.static(__dirname + '/public'));

app.get('/main', (request, response) => {
    response.render('index.hbs', {
        title: 'The Main Page',
        year: new Date().getFullYear(),
        message: 'Welcome To'
    })
})

app.get('/info', (request, response) => {
    response.render('info.hbs', {
        title: 'The Info Page',
        message: 'Welcome To'
    })
})

app.get('/weather', (request, response) => {
    response.render('weather.hbs', {
        title: 'The Weather Page',
        message: 'Welcome To'
    })
})

app.get('*', (request, response) => {
  response.send('404 Page not Found');
});

app.listen(9000, () => {
    console.log('Server is up on the port 9000')
});
