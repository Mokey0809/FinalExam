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

var getBrandNewDeck2 = () =>{
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

var getBrandNewDeck3 = () =>{
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

var getBrandNewDeck4 = () =>{
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

var getBrandNewDeck5 = () =>{
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

var getCards = (deck_id) =>{
    return new Promise((resolve, reject) => {
        request({
            url:`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=5`,
            json:true
        }, (error, response, body) =>{
            if(error){
                reject("Cannot connect to weather")
            }
            else {
                resolve({
                    cards: body.cards[0].images.png
                })
            }
        })
    })
};

module.exports = {
    getBrandNewDeck,
    getCards,
    getBrandNewDeck2,
    getBrandNewDeck3,
    getBrandNewDeck4,
    getBrandNewDeck5
}