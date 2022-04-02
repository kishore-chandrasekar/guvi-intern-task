import logo from './logo.svg';
import './App.css';
import Createuser from './Createuser';
import Login from './Login';
import { BrowserRouter as Router, Switch, Routes, Route, NavLink } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Mainpage from './MainPage';

function App() {
  return (


    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route path="/additional" >
            <Mainpage />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/" >
            <Createuser />
          </Route>


        </Switch>
      </div>
    </BrowserRouter >



  );
}

export default App;
