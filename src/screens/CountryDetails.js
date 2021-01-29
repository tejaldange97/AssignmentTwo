
import React from 'react';
import WeatherDetails from './WeatherDetails';
import { Button } from '@material-ui/core';




const style={
  inputDiv:{
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center',
    marginTop:20
  },
  labelText:{
    fontWeight:'bold',
    fontSize:20,
  },
  text:{
    fontSize:20
  },
  button:{
    marginTop:20,
    width:'50%',
    height:'25%',
    fontWeight:'bold',
    fontSize:'20',
    
  },
}
export default class CountryDetails extends React.Component{

    constructor(props){
      super(props);

      this.state= {
        capitalData:[],
        nextPage:true
      }
    }

    getWeather(capital){
    fetch('http://api.weatherstack.com/current?access_key=227155e36099ced5bcc0b91eb244717e&QUERY='+capital)
     .then((response) => response.json())
     .then((responseJson)=>{
         this.setState({capitalData:responseJson,nextPage:false})
     })
     .catch((error)=>{
         console.log(error);
     })
    }

  render(){
      console.log("data",JSON.stringify(this.props.countryData))
    return (
      <div>
      {this.state.nextPage ?
                <div>
                    {this.props.countryData.map((item, index) =>
                                        
                                        
                                            
                        <div class="card" style={{width: '23rem',margin: '0 auto',
                                               marginBottom: '10px',border:'23rem'}}>
                         <div class="card-body">
           
                        <div style={style.inputDiv}>
                            <text style={style.labelText}>Name:-  </text>
                            <text style={style.text}>{item.name}</text>
                        </div>

                        <div style={style.inputDiv}>
                            <text style={style.labelText}>Capital:-  </text>
                            <text style={style.text}>{item.capital}</text>
                        </div>

                        <div style={style.inputDiv}>
                            <text style={style.labelText}>Population:- </text>
                            <text style={style.text}>{item.population}</text>
                        </div>
                                
                        <div style={style.inputDiv}>
                            <text style={style.labelText}>Latlng:- </text>
                            <text style={style.text}>{item.latlng}</text>
                        </div>
                      <div style={{display: 'flex', flexDirection: 'row',display: 'flex', flexDirection: 'row',justifyContent:'space-around'}}>  
                        <img style={{marginTop:20}}       
                            width="25%"
                            height="25%"
                            src={item.flag}
                                    /> 
                                      
                    <Button variant="contained" 
                            color="primary" 
                            style={style.button}
                            onClick={()=> this.getWeather(item.capital)}
                                                >

                             Capital Weather

                      </Button>
                      </div>
                    </div>                          
                </div>
                                    
                             
                                    )}
            </div>

                                    :

                                    <WeatherDetails weatherData={this.state.capitalData}/>
      }

    
      </div>
    );
  }
}
 

