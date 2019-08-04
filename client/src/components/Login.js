import React,{Component} from 'react';
import styled from 'styled-components';
import {Link,Redirect} from 'react-router-dom';

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
  
  input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  input[type=submit]:hover {
    background-color: #45a049;
  }
  
  div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
  
`;

class LogIn extends Component{

    constructor(props){
        super(props)

        this.state={
            password:'',
            email:''
            

        }
        this.formHandler=this.formHandler.bind(this);
    }

    formHandler=(e)=>{
       e.preventDefault();
       const data={
            password: this.state.password,
            email:this.state.email
        };
        console.log(data);
        fetch('http://localhost:4000/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
                }                
       })
       .then(res => res.text())
       .then(res=>alert(res))
       .catch(err => console.log(err)) ;

}

    render(){
        return(
            <Styles>
                <form action="auth">
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
                    <input type="submit" onClick={this.formHandler}/>
                </form >
            </Styles>
        )
    }
}
export default LogIn