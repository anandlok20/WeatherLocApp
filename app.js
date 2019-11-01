const req = require('request')
const fs = require('fs')
const chalk = require('chalk')
const location = require('./utils/geocode')
const weather = require('./utils/weather')
const address = process.argv[2]

if (!address) {
    console.log(chalk.red.inverse("Please provide an address!!!"))
} else {
    //calling of the function
    location(address, (error, { latitude, longitude, placeName }) => {
        // console.log(d + " | " + d.latitude + " | " + d.longitude)
        if (error) {
            console.log(chalk.red.inverse(error))
        } else {
            weather({ latitude, longitude }, (err, { temperature, probablity }) => {
                if (err) {
                    console.log(chalk.red.inverse(error))
                } else {
                    console.log(chalk.green.inverse("Temperature: " + temperature + " Rain Probablity: " + probablity + "% for " + placeName))
                }
            })
        }
    })
}