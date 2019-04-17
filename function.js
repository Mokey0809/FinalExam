const request = require('request');

var getWeather = (city) =>{
    return new Promise((resolve, reject) => {
        request({
            url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7f253b3f0415a60df2a06fad4561a16b&units=imperial`,
            json:true
        }, (error, response, body) =>{
            if(error){
                reject("Cannot connect to weather")
            }
            else if(body.cod == 200){
                resolve({
                    city:body.name,
                    temp:body.main.temp,
                    des:body.wind.speed
                })
            }
            else{
                reject("UNKNOWN ERROR HAS OCCURRED (2)")
             }
        })
    })
}

var getCity = (country) =>{
    return new Promise((resolve, reject) => { 
        request({
            url:`https://restcountries.eu/rest/v2/name/${country}?fullText=true`,
            json:true
        }, (error, response, body) => {
            if(error){
                reject("Cannot connect")
                //console.log("Cannot connect to google maps")
            }
            else if(body.hasOwnProperty('status')){
                reject(body.status, body.message)
                //console.log('Cannot find requested address')
            }
            else if(body[0].hasOwnProperty('name')){
                resolve({
                    city:body[0].capital
                })
            }
            else{
                reject("UNKNOWN ERROR HAS OCCURRED (1)")
            }
        });
    })
};

module.exports = {
    getWeather,
    getCity
}