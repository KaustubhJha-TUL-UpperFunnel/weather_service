const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const weatherSchema = new mongoose.Schema({
    lat: Number,
    lon: Number,
    timezone: String,
    timezone_offset: Number,
    current: {
        dt: Number,
        sunrise: Number,
        sunset: Number,
        temp:Number,
        feels_like: Number,
        pressure: Number,
        humidity: Number,
        dew_point: Number,
        uvi: Number,
        clouds: Number,
        visibility: Number,
        wind_speed: Number,
        wind_deg: Number,
        weather: [{
            id: Number,
            main: String,
            description: String,
            icon: String
        }]
    },
    hourly:[
        {
            dt: Number,
            sunrise: Number,
            sunset: Number,
            temp:Number,
            feels_like: Number,
            pressure: Number,
            humidity: Number,
            dew_point: Number,
            uvi: Number,
            clouds: Number,
            visibility: Number,
            wind_speed: Number,
            wind_deg: Number,
        }
    ]
},{
    collection:'city'
})

module.exports = mongoose.model('City',weatherSchema);
