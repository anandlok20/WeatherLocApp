const req = require('request')
const fs = require('fs')
const chalk = require('chalk')

//finding the location
const location = ((place, callback) => {
    const url_gl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(place) + ".json?access_token=pk.eyJ1IjoiYW5hbmRsb2syMCIsImEiOiJjazJlbnR2bmIwYmRiM2hxdzVuYTFsd2hxIn0.hGE1yoNmk7wW8ZQnTfkXIA&limit=1"
        // console.log(url_gl)
    req({ url: url_gl, json: true }, (error, { body }) => {
        if (error) {
            // console.log(chalk.red.inverse("Error in connection or place not found!!"))
            callback("Error in connection!!", undefined)
        } else if (body.features.length === 0) {
            callback("Place not found!!", undefined)
        } else {
            const wData = {
                    latitude: body.features[0].center[0],
                    longitude: body.features[0].center[1],
                    placeName: body.features[0].place_name
                }
                // console.log(wData)
            callback(undefined, wData)
        }
    })
})

module.exports = location