const request = require('request');

var getBrandNewDeck = () =>{
    return new Promise((resolve, reject) => {
        request({
            url:`https://deckofcardsapi.com/api/deck/new/`,
            json:true
        }, (error, response, body) =>{
            if(error){
                reject("Cannot connect to weather")
            }
            else {
                resolve({
                    deck_id: body.deck_id
                })
            }
        })
    })
};


var getCards = () =>{
    return new Promise((resolve, reject) => {
        request({
            url:`https://deckofcardsapi.com/api/deck/new/draw/?count=5`,
            json:true
        }, (error, response, body) =>{
            if(error){
                reject("Cannot connect to weather")
            }
            else {
                resolve({
                    cards: body.cards[0].image,
                    card2: body.cards[1].image,
                    card3: body.cards[2].image,
                    card4: body.cards[3].image,
                    card5: body.cards[4].image
                })
            }
        })
    })
};

var getImage = () => {
        return new Promise((resolve, reject) => {
        request({
            url:`http://jsonplaceholder.typicode.com/photos`,
            json:true
        }, (error, response, body) =>{
            if(error){
                reject("Cannot connect to weather")
            }
            else {
                resolve({
                    cards: body.cards[0].url,
                    card2: body.cards[1].url,
                    card3: body.cards[2].url,
                    card4: body.cards[3].url,
                    card5: body.cards[4].url
                })
            }
        })
    })
}

module.exports = {
    getBrandNewDeck,
    getCards,
    getImage
}