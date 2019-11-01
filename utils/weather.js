const req = require('request')
const fs = require('fs')
const chalk = require('chalk')

const tempData = (({ latitude, longitude }, callback) => {
    const url = "https://api.darksky.net/forecast/9bc2407c5427131df3cebdac944bd30f/" + longitude + "," + latitude
        // console.log(url)
        // console.log(d.latitude)
        // console.log(d.longitude)
    req({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("connection error!!", undefined)
        } else if (body.error) {
            callback("location not found!!", undefined)
        } else {
            temperature = body.currently.temperature
            probablity = body.currently.precipProbability
            callback(undefined, { temperature, probablity })
        }
    })
})

module.exports = tempData