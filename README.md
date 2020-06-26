# weather_service(Back-end Only)
Free Public API to get all the weather of Indian states. This Project is made on GraphQL and NodeJS

## How to run the app
- 1.)  Either fork or clone
- 2.)  Run:- npm install in weatherAPI_GQL_SERVER, weatherAPI_endpoints(installing dependencies)
- 3.)  Run:- docker-compose build 
- 4.)  Run:- docker-compose up
- 2b.) ~create a mongo db "weather" with collection "city" with required schema or __Use This__ [link](https://github.com/kimj0588/weather_service/tree/master/weatherAPI_DB)~
- 2c.) ~Add your rapid key~

### To Do
- [ ]  Handle Error Requests
- [x]  Dockerise the project :rocket: :boom:
- [ ]  Host it for free
- [x]  Update the Documentation

## How to use the app

1.) you can make a post request to ```/city/name```
__Ex:- /city/HR__

__Where the name are the abbreviation of the states in India__
__There are only the following abbreviation for now__

	
   - MP
   - TN
   - TG
   - HR
   - CT
   - MP
   - MH
   - TR
   - CH_TL
   - KA
   - KL
   - UT
   - AS
   - MH_2
   - WB
   - GJ
   - OR
   - RJ
   - HP
   - HR_2
 
 
# Output Format (When No body is passed)
```
 {
      getWeatherReport{
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
```

## Example Would be
```
{
  "data": {
    "getWeatherReport": [
      {
        "lat": 29.24,
        "lon": 76.43,
        "current": {
          "dt": 1592206098,
          "sunrise": 1592178882,
          "sunset": 1592229299,
          "temp": 316.54,
          "feels_like": 311.83,
          "pressure": 997,
          "humidity": 8,
          "dew_point": 275.15,
          "uvi": 12.04,
          "clouds": 0,
          "visibility": null,
          "wind_speed": 4.32,
          "wind_deg": 329,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ]
        },
        "hourly": [
          {
            "dt": 1592179200,
            "sunrise": null,
            "sunset": null,
            "temp": 305.62,
            "feels_like": 304.51,
            "pressure": 998,
            "humidity": 24,
            "dew_point": 282.46,
            "uvi": null,
            "clouds": 0,
            "visibility": null,
            "wind_speed": 1.37,
            "wind_deg": 51,
            "weather": null
          },
          .......
```

## For Just some Part of the Data you can throw in a body also.

### _Put the values you want in current and hourly to be 1_
#### Example if you only want dt in current and pressure in hourly

```
{
	"lat": 1,
	"lon": 1,
	"current":{
	    "dt": 1
	},
	"hourly":{
	    "dt": 1,
	    "pressure": 1
	}
}
```
