import React,{Component} from 'react';
import {BrowserRouter,Redirect,Switch,Route} from 'react-router-dom';
import {Menu} from './components/Menu';
import {Header} from './components/Header';
import Booklist from './components/Booklist';
import Book from './components/Book';
import Authors from './components/Authors';
import SignUp from './components/SignUp';
import Login from './components/Login';

class App extends Component{

render(){
  return (
    <BrowserRouter>
        <h1>BOOKTOPIA</h1>
        <Menu />
        <Switch>
          <Route path='/' component={Header} exact />
          <Route path='/author' component={Authors} />
          <Route path='/api/register' component={SignUp} />
          <Route path='/:type' component={Booklist} />
          <Route path='/:name' component={Book} />
          <Route path="/api/login" component={Login} />
        </Switch>
    </BrowserRouter>
  );

}
  
}

export default App;
