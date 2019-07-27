import React,{Component} from 'react';

class Authors extends Component{
    state={
        authors:[]
    };

    componentDidMount(){
        this.getAuthors()
    }

    getAuthors(){
        fetch('http://localhost:4000/author')
        .then(res=>res.json())
        .then(res=>this.setState({authors:res.data}))
        .catch(err=>console.log(err))
    }

    
    fetchAuthor=({Author,Id})=>(
        <div key={Id}>
            <h1>{Author}</h1>
        </div>
    )

    render(){
        const {authors}=this.state
        const authorList=authors.map(this.fetchAuthor)
        return(
            <div>
                {authorList}
            </div>
        )
    }
}
export default Authors