import React from 'react'
import { TextField,Button } from '@material-ui/core';
import CountryDetails from './CountryDetails';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
                countryName:'',
                dataSource:'',
                nextPage:true
        }
    }

    componentDidMount(){
        fetch("https://restcountries.eu/rest/v2" +  "")
            .then(response => response.json())
            .then((responseJson)=> {
               // console.log("responseJson",JSON.stringify(responseJson))
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error=>console.log(error)) //to catch the errors if any
    }


    submit(input){
        this.setState({isLoading:true})
         return fetch('https://restcountries.eu/rest/v2/name/'+input)
         .then((response) => response.json())
         .then((responseJson)=>{
            this.setState({
                //loading: false,
                dataSource: responseJson,
                nextPage:false
            })
           
         })
         .catch((error)=>{
             console.log(error);
         })
       }

    render(){
        return(
            <div style={{marginTop:20,textAlign:'center'}}>
            {this.state.nextPage ?
            <div>
               <TextField value={this.state.countryName} 
                          label="Enter Country Name"
                          variant="filled"
                          style={{width:'20%'}} 
                          onChange={(event)=>this.setState({countryName: event.target.value})}
                      />

                     <div>   
                        <Button variant="contained" 
                                color="primary" 
                                style={style.button}
                                disabled={this.state.countryName.length <1 ? true : false}
                                onClick={()=> this.submit(this.state.countryName)}
                                
                                >

                                Submit

                            </Button>
                 </div>
               </div>  
                 :
                <CountryDetails countryData={this.state.dataSource}/>
            }
            </div>
        )
    }
}

const style={
    button:{
      marginTop:40,
      width:'10%',
      height:'25%',
      fontWeight:'bold',
      fontSize:'20'
    },
    
  }