const MongoClient =  require('mongodb').MongoClient;
const axios = require('axios');
const unirest = require('unirest');
const Cities = require('./citiesData.json');
const unixTime = require('unix-time');
var _COUNT = 22;


var url = 'mongodb://mongodb:27017';
var I = 0;
var _ID ;
let dt = unixTime(new Date())-86400;

function getNewCityDetails(){
    if(I===22){
        console.log("BREAKING");
        clearInterval(_ID);
    }
    var currCity = Cities[I%_COUNT];
    I+=1;

    console.log(currCity,dt);
    var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/onecall/timemachine");
    req.query({
        "lat": currCity.lat,
        "lon": currCity.long,
        "dt": dt
    });
    req.headers({
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "9c9c0ac5e2mshd84af4b05aaa638p15e691jsn0a5910340e27",
        "useQueryString": true
    });
    req.end((res)=>{
        if(typeof(res)===undefined)
            console.log('res undefiend')
        else{
            var data = res.body;
            MongoClient.connect(url,(error,client)=>{
                var db = client.db('weather');
                db.collection('city').insertOne(data,(error,result)=>{
                    if(error) throw error;
                    console.log("Data Inserted");
                })
                client.close();
            })
            
        }
    })
}


function every24Hour(){
  ID_ = setInterval(getNewCityDetails, 12000);
}

var HourID_ = setInterval(every24Hour,86400000)
