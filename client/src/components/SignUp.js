import React,{Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
            email:''
            

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
        
        fetch('http://localhost:4000/api/register', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(data => console.log(data))
       .catch(err => console.log(err)) ;

}

    render(){
        return(
            <Styles>
                <form>
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
                </form >
                <p>ALready a member?<Link to ="/api/login">Log in</Link></p>
            </Styles>
        )
    }
}
export default SignUp