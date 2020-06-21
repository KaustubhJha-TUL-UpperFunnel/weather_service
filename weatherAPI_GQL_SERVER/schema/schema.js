const graphql = require('graphql');
const Weather = require('../models/weatherDataModel');
const MAP_CITY_TO_COORDINATES = require('./citytoCoorMap');

const{
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLFloat,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLID,
} = graphql

const currentWeatherType = new GraphQLObjectType({
    name:"current_Weather",
    fields:()=>({
        id:{type:GraphQLInt},
        main:{type:GraphQLString},
        description:{type:GraphQLString},
        icon:{type:GraphQLString}
    })
})
const Weather_ = new GraphQLObjectType({
    name: 'weather',
    fields: ()=>({
        dt: {type:GraphQLInt},
        sunrise: {type:GraphQLInt},
        sunset: {type:GraphQLInt},
        temp:{type:GraphQLFloat},
        feels_like: {type:GraphQLFloat},
        pressure: {type:GraphQLFloat},
        humidity: {type:GraphQLFloat},
        dew_point: {type:GraphQLFloat},
        uvi: {type:GraphQLFloat},
        clouds: {type:GraphQLFloat},
        visibility: {type:GraphQLFloat},
        wind_speed: {type:GraphQLFloat},
        wind_deg: {type:GraphQLFloat},
        weather:{type:new GraphQLList(currentWeatherType)}
    })
})

const WeatherType = new GraphQLObjectType({
    name: 'WeatherReport',
    fields: ()=>({
        id:{type:GraphQLID},
        lat:{type:GraphQLFloat},
        lon:{type:GraphQLFloat},
        timezone:{type:GraphQLString},
        timezone_offset: {type:GraphQLInt},
        current: {
            type: Weather_,
        },
        hourly:{
            type: new GraphQLList(Weather_)
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        getWeatherReport:{
            type: new GraphQLList(WeatherType),
            args:{
                name:{type:GraphQLString}
            },
            resolve(parent,args){
                //find and return
                var city_name = MAP_CITY_TO_COORDINATES[args.name];
                var lon = city_name.lon.toFixed(2);
                var lat = city_name.lat.toFixed(2);
                console.log(lon,lat);
                return Weather.find({lat,lon});
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
})