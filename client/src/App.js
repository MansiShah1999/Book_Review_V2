import React,{Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Menu} from './components/Menu';
import {Header} from './components/Header';
import Booklist from './components/Booklist';
import Authors from './components/Authors';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';

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
          <Route path='/login' component={LogIn} />
          <Route path='/logout' component={LogOut} />
          <Route path='/:type' component={Booklist} />
          <Route path='/book/:name' component={Booklist} />
        </Switch>
    </BrowserRouter>
  );

}
  
}

export default App;
