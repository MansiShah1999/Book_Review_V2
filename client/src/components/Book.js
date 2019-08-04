import React,{Component} from 'react';
import f1 from './images/fantasy_book1.jpeg';
import styled from 'styled-components';


const Styles=styled.div`
img{
    width:200px;
    height:200px;
}
p{
    padding:5px;
}
`;
class Book extends Component{
    state={
        book:[]
    };

    componentDidMount(){
        this.getbook()
    }
    
    getbook(){
        const name=this.props.name
        fetch(`https://localhost:4000/book/${name}`)
        .then(res => res.json())
        .then(res=>this.setState({book:res.data}))
        .catch(err=>console.log(err))
    }

    

    fetchBook = ({Id,Name,Author}) => (
        <div key="1">
            <p>{{Id}}</p>
            <h1>{Name}</h1>
            <h2>{Author}</h2>
        </div>
    )

    render(){
        const {book}= this.state;
        const booklist=book.map(this.fetchBook)
        return(
            <Styles>
                <div>{booklist}</div>
            </Styles>
        )
    }
}
export default Book