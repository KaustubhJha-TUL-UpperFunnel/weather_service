const gql = require("graphql-tag");
const ApolloClient = require("apollo-client").ApolloClient;
const fetch = require("node-fetch");
const { HttpLink } = require("apollo-link-http");
const InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;
const express = require('express'); 
var bodyParser = require('body-parser')
var {wantCoordinates,wantWeatherH,wantWeather,isEmpty} = require('./reqFunctions');

const app = express();

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:8080/graphql',
  fetch: fetch
});

const client = new ApolloClient({
  cache,
  link
});



// parse application/x-www-form-urlencoded
/*app.use(bodyParser.urlencoded({ extended: false }))*/

// parse application/json
app.use(bodyParser.json())

app.post('/city/:name',async (req,res)=>{
    if (!req.params.name) {
        res.sendStatus(500);
        return;
    }
    
    let variables = {}
    if(req.body!=={}){
        variables = req.body;
    }
    console.log(req.body);
    var query;
    var name = req.params.name.trim();
    if(req.body===undefined||isEmpty(variables)){
        query = gql`
        {
            getWeatherReport(name: "${name}"){
                lat,
                lon,
                current{
                    dt
                    sunrise
                    sunset
                    temp
                    feels_like
                    pressure
                    humidity
                    dew_point
                    uvi
                    clouds
                    visibility
                    wind_speed
                    wind_deg,
                    weather {
                    id,
                    main,
                    description,
                    icon
                    }
                },
                hourly{
                    dt
                    sunrise
                    sunset
                    temp
                    feels_like
                    pressure
                    humidity
                    dew_point
                    uvi
                    clouds
                    visibility
                    wind_speed
                    wind_deg,
                    weather {
                    id,
                    main,
                    description,
                    icon
                    }
                }
            }
        }
        `;
    }else{
        //make query dynamic
        //need to extract and paste
        var lat = wantCoordinates(variables.lat,"lat");
        var lon = wantCoordinates(variables.lon,"lon");

        var current =  ``;
        if(variables.current!==undefined && !isEmpty(variables.current))
            current=wantWeather(variables);

        var hourly = ``;
        if(variables.hourly!==undefined && !isEmpty(variables.current))
            hourly=wantWeatherH(variables);

        query = gql`
        {
            getWeatherReport(name: "${name}"){
                ${lat},
                ${lon},
                ${current},
                ${hourly}
            }    
        }`
    }
    
    try{
        const result = await client.query({
            query
        })
        res.json(result);
    }catch(err){
       console.log(err);
       res.json(JSON.stringify(err));
    }
})

app.listen(4000.,()=>console.log('Server Running'));