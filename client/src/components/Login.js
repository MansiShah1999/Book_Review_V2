import React,{Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Link,{Redirect} from 'react-router-dom';

const Styles=styled.div`
input[type=email],input[type=password]{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  input[type=button] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  input[type=button]:hover {
    background-color: #45a049;
  }
  
  div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
  
`;
class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            email:"",
            password:""
        }
    }

    formHandler=(e)=>{
        fetch('http://localhost:4000/api/login')
       .then(res => res.json())
       .then(res=>{
           //var n=len(res.data)
           //for(var i=0;i<n;i++){
                //if(this.state.email===res.data.email[i]){
                  //  if(this.state.password===res.data.password[i]){
                    //    res.send("Login correctly");
                      //  <Redirect to="/" />
                    //}
                //else{
                 //   alert('Incorrect password');
               // }    
           // }
            //else{
              //  alert('Incorrect email id')
           // }
        //}
    })
       .catch(err => console.log(err)) 

    }

    render(){
        return(
            <Styles>
                <form action="/">
                    <div>
                        <label>Email</label>
                        <input name="email" type="email" value={this.state.email} 
                        onChange={e=>this.setState({email:e.target.value})}/>
                        <br />
                    </div>
                    <div>
                        <label>Password</label>
                        <input name="password" type="password" value={this.state.password} 
                        onChange={e=>this.setState({password:e.target.value})} min='6'/>
                        <br />
                    </div>
                    <input type="button" value="Log In" onClick={e=>this.formHandler(e)}/>
                </form >
            </Styles>
        )
    }
}
export default Login
