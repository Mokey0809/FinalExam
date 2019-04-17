const express = require('express');
const functions = require('./serverFunctions');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 9000;
var text = undefined;

var app = express();

app.set('view engine', 'hbs');

app.use('/', express.static(__dirname + '/vies/index.hbs'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCard1', () => {
    getDeck((text1) => (
        text = text1
    ));
    return text
});

hbs.registerHelper('getCard2', () => {
    getDeck2((text1) => (
        text = text1
    ));
    return text
});

hbs.registerHelper('getCard3', () => {
    getDeck3((text1) => (
        text = text1
    ));
    return text
});

hbs.registerHelper('getCard4', () => {
    getDeck4((text1) => (
        text = text1
    ));
    return text
});

hbs.registerHelper('getCard5', () => {
    getDeck5((text1) => (
        text = text1
    ));
    return text
});


var getDeck = (callback) => {
    functions.getBrandNewDeck().then((msg) =>{
        return functions.getCards(msg.deck_id)
    }).then((msg) => (
        callback(
            msg.cards
        )
    )).catch((error) => {
        callback('Error 404')
    })
}

var getDeck2 = (callback) => {
    functions.getBrandNewDeck2().then((msg) =>{
        return functions.getCards(msg.deck_id)
    }).then((msg) => (
        callback(
            msg.cards
        )
    )).catch((error) => {
        callback('Error 404')
    })
}

var getDeck3 = (callback) => {
    functions.getBrandNewDeck3().then((msg) =>{
        return functions.getCards(msg.deck_id)
    }).then((msg) => (
        callback(
            msg.cards
        )
    )).catch((error) => {
        callback('Error 404')
    })
}

var getDeck4 = (callback) => {
    functions.getBrandNewDeck4().then((msg) =>{
        return functions.getCards(msg.deck_id)
    }).then((msg) => (
        callback(
            msg.cards
        )
    )).catch((error) => {
        callback('Error 404')
    })
}

var getDeck5 = (callback) => {
    functions.getBrandNewDeck5().then((msg) =>{
        return functions.getCards(msg.deck_id)
    }).then((msg) => (
        callback(
            msg.cards
        )
    )).catch((error) => {
        callback('Error 404')
    })
}


app.get('/', (request, response) => {
    response.render('index.hbs', {
        title: "Home Page",
        msg: "Welcome"
    })
});

app.get('/index', (request, response) => {
    response.render('index.hbs', {
        title: "Home Page",
        msg: "Welcome"
    })
});


app.get('/nasa', (request, response) => {
    response.render('nasa.hbs', {
        title: 'NASA Page'
    })
});

app.get('/decks', (request, response) => {
    response.render('decks.hbs', {
        title: 'Deck Page'
    })
});

app.listen(port, () => {
    console.log('Server is up on the port 9000')
});