const req = require('request')
const fs = require('fs')
const chalk = require('chalk')
const loc = require('./geocode')
const weathers = require('./weather')

//calling of the function
loc.location("pune", (error, data) => {
    // console.log(d + " | " + d.latitude + " | " + d.longitude)
    if (data === undefined) {
        console.log(chalk.red.inverse(error))
    } else {
        weathers.weather(data, (err, val) => {
            if (val === undefined) {
                console.log(chalk.red.inverse(error))
            } else {
                console.log(chalk.green.inverse("Temperature: " + val.temperature + " Rain Probablity: " + val.probablity + "% for " + data.placeName))
            }
        })
    }
})