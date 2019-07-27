import React,{Component} from 'react';
import {NavLink,Link} from 'react-router-dom';
import f1 from './images/fantasy_book1.jpeg';

class Booklist extends Component{
    state = { 
        books: [] 
      };
    
      componentDidMount=()=> {
        this.getBooks()
      }
      
      componentDidUpdate=(prevState)=>{
        if(prevState.books!=this.state.books){
            this.getBooks()
        }
        
    }
      getBooks=()=>{
        const { type }=this.props.match.params
        fetch(`http://localhost:4000/${type}`)
            .then(res => res.json())
            .then(res=>{
                this.setState({books:res.data})
            })
            .catch(err=>console.log(err))    
    }

    
    fetchBooks = ({Id,Name,Author}) => (

        <div key={Id}>
            <h1>{Name}</h1>
            <h2>{Author}</h2>
            <button onClick={this.getBookData({Name})}>More</button>
        </div>
    )
    
    getBookData=({Name})=>{
        fetch(`http://localhost:4000/${Name}`)
            .then(res => res.json())
            .then(res=>{
                this.setState({Name:res.data})
            })
            .catch(err=>console.log(err))    
    }
    
    render(){
        const {books}= this.state;
        const booklist=books.map(this.fetchBooks)
        return(
                <div>{booklist}</div>
            )
        };
        
}
    

export default Booklist