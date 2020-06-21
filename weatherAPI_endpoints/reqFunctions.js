wantCoordinates = (variables,coor)=>{
    var res = ``;
    if(variables!==undefined && variables==true){
        if(coor==="lat") res = `lat`;
        else res = `lon`;
    }
    return res;
}

wantWeatherH = (variables)=>{
    var res = `hourly{`;
    var end = 
        `
            \t}`;
    const _ = variables.current;

    if(variables.current!==undefined){
        if(_.dt == true){
            res += `
                dt
            `;
        }
        if(_.sunrise == true){
            res += `
                sunrise
            `;
        }
        if(_.sunset == true){
            res += `
                sunset
            `;
        }
        if(_.temp == true){
            res += `
                temp
            `;
        }
        if(_.feels_like == true){
            res += `
                feels_like
            `;
        }
        if(_.pressure == true){
            res += `
                pressure
            `;
        }
        if(_.humidity == true){
            res += `
                humidity
            `;
        }
        if(_.dew_point == true){
            res += `
                dew_point
            `;
        }
        if(_.uvi == true){
            res += `
                uvi
            `;
        }
        if(_.clouds == true){
            res += `
                clouds
            `;
        }
        if(_.visibility == true){
            res += `
                visibility
            `;
        }
        if(_.wind_speed == true){
            res += `
                wind_speed
            `;
        }
        if(_.wind_deg == true){
            res += `
                wind_deg
            `;
        }
        if(_.weather == true){
            res += `
                weather {
                    id,
                    main,
                    description,
                    icon
                }
            `;
        }
    }

    return  res+end;
}

wantWeather = (variables)=>{
    var res = `current{`;
    var end = 
    `
        \t}`;
    const _ = variables.current;

    if(variables.current!==undefined){
        if(_.dt == true){
            res += `
                dt
            `;
        }
        if(_.sunrise == true){
            res += `
                sunrise
            `;
        }
        if(_.sunset == true){
            res += `
                sunset
            `;
        }
        if(_.temp == true){
            res += `
                temp
            `;
        }
        if(_.feels_like == true){
            res += `
                feels_like
            `;
        }
        if(_.pressure == true){
            res += `
                pressure
            `;
        }
        if(_.humidity == true){
            res += `
                humidity
            `;
        }
        if(_.dew_point == true){
            res += `
                dew_point
            `;
        }
        if(_.uvi == true){
            res += `
                uvi
            `;
        }
        if(_.clouds == true){
            res += `
                clouds
            `;
        }
        if(_.visibility == true){
            res += `
                visibility
            `;
        }
        if(_.wind_speed == true){
            res += `
                wind_speed
            `;
        }
        if(_.wind_deg == true){
            res += `
                wind_deg
            `;
        }
        if(_.weather == true){
            res += `
                weather {
                    id,
                    main,
                    description,
                    icon
                }
            `;
        }
    }

    return  res+end;
}

isEmpty = (obj)=>{
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
}

module.exports = {wantWeather,wantWeatherH,wantCoordinates,isEmpty}