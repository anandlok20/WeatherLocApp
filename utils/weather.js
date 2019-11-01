const req = require('request')
const fs = require('fs')
const chalk = require('chalk')

const tempData = ((d, callback) => {
    const url = "https://api.darksky.net/forecast/9bc2407c5427131df3cebdac944bd30f/" + d.longitude + "," + d.latitude
        // console.log(url)
        // console.log(d.latitude)
        // console.log(d.longitude)
    req({ url, json: true }, (error, data) => {
        if (error) {
            callback("connection error!!", undefined)
        } else if (data.body.error) {
            callback("location not found!!", undefined)
        } else {
            const val = {
                    temperature: data.body.currently.temperature,
                    probablity: data.body.currently.precipProbability
                }
                // console.log(val)
            callback(undefined, val)
        }
    })
})

module.exports = tempData