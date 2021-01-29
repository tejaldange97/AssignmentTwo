import React from 'react'
import { TextField,Button } from '@material-ui/core';

export default class WeatherDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
                countryName:'',
                dataSource:''
        }
    }

  

    render(){
        console.log("VV",JSON.stringify(this.props.weatherData))
        const data=this.props.weatherData
        return(
            <div style={{marginTop:20,}}>

                <div style={style.inputDiv}>
                        <text style={style.labelText}>Capital Name:-  </text>
                        <text style={style.text}>{data.location.name}</text>
                    </div>

                    <div style={style.inputDiv}>
                        <text style={style.labelText}>Temperature:-  </text>
                        <text style={style.text}>{data.current.temperature}</text>
                    </div>

                    <div style={style.inputDiv}>
                        <text style={style.labelText}>Wind_speed:- </text>
                        <text style={style.text}>{data.current.wind_speed}</text>
                    </div>

                    <div style={style.inputDiv}>
                        <text style={style.labelText}>Precip:- </text>
                        <text style={style.text}>{data.current.precip}</text>
                    </div>

                    <img style={{marginTop:20}}       
                            width="5%"
                            height="5%"
                            src={data.current.weather_icons[0]}
                         /> 
                               
              
            </div>
        )
    }
}

const style={
    inputDiv:{
      flexDirection:'row',
      marginTop:20
    },
    labelText:{
      fontWeight:'bold',
      fontSize:20,
    },
    text:{
      fontSize:20
    }
  }