import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

class LogOut extends Component{

       componentDidMount=()=>{
        fetch('http://localhost:4000/logout')
       .then(res => res.text())
       .then(res=>alert(res))
       .catch(err => console.log(err)) ;
       } 

       render(){
              return(
                     <Redirect to="/" /> 
              )
       }

}  
export default LogOut