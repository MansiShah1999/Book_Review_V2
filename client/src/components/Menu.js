import React,{Component} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Styles=styled.div`
body {
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .navbar {
    overflow: hidden;
    background-color: #333;
  }
  
  .navbar a{
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  .dropdown {
    float: left;
    overflow: hidden;
  }
  
  .dropdown .dropbtn {
    font-size: 16px;  
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }
  
  .navbar a:hover, .dropdown:hover .dropbtn {
    background-color: red;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  
  .dropdown-content a:hover {
    background-color: #ddd;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .button{
    float: right;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  `;

  
export class Menu extends Component{

  render(){
    return(
      <Styles>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to='/author'>Author</Link>
        <div className="dropdown">
            <button className="dropbtn">Genre 
            <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/Fantasy">Fantasy</Link>
              <Link to="/Mystery">Mystery</Link>
              <Link to="/Fiction">Fiction</Link>
            </div>
        </div>
        <Link to="/api/register">Sign-Up</Link>
        <div className="button">
          <button><Link to="/logout" >Logout</Link></button> 
        </div>
        
      </div>
      </Styles>
    ) 
  }
    
}