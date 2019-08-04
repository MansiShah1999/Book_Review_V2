import React,{Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';

const Styles=styled.div`
input[type=text],input[type=email],input[type=password]{
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

class SignUp extends Component{

    constructor(props){
        super(props)

        this.state={
            name:'',
            password:'',
            email:'',
            errors:[]
        }
        this.formHandler=this.formHandler.bind(this);
    }

    formHandler=(e)=>{
       e.preventDefault();
       const data={
            name : this.state.name,
            password: this.state.password,
            email:this.state.email
        };
        const errors=this.validate(data.name,data.email,data.password);
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }
        console.log(data);
        fetch('http://localhost:4000/api/register', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
                }                
       })
       .then(res => res.text())
       .then(res => alert(res))
       .catch(err => console.log(err)) ;


    }

    validate=(name,email,password)=>{
        // we are going to store errors for all fields
        // in a signle array
        const errors = [];

        if (name.length === 0) {
            errors.push("Name can't be empty");
        }

        if (email.length < 5) {
            errors.push("Email should be at least 5 charcters long");
        }
        if (email.split("").filter(x => x === "@").length !== 1) {
            errors.push("Email should contain a @");
        }
        if (email.indexOf(".") === -1) {
            errors.push("Email should contain at least one dot");
        }

        if (password.length < 6) {
            errors.push("Password should be at least 6 characters long");
        }

        return errors;
    }

    render(){
        const {errors}=this.state
        return(
            <Styles>
                <form>
                    {errors.map(error => (
                    <p key={error}>Error: {error}</p>
                    ))}
                    <div>
                        <label>Name</label>
                        <input name="name" type="text" value={this.state.name} 
                        onChange={e=>this.setState({name:e.target.value})}/>
                        <br />
                    </div>
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
                    <center><p>ALready a member?<Link to="/login">Log in</Link></p></center>
                </form >
            </Styles>
        )
    }
}
export default SignUp