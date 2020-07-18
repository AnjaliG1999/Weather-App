const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=142fd2dfd79255125c44cec4446f080b&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback(body.error.info)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. There is a ' + body.current.precip + '% chance of rain. Timezone ID is ' + body.location.timezone_id + ' and local time is ' + body.location.localtime + '.')
        }
    })
}

module.exports = forecast