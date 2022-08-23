import './App.css';
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from './Checkout';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";



function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => { //will only run once when app component loads for[]. if[user, basket] it loads everytime when user or basket changes
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>> ', authUser);

      if(authUser){ //loggen in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <header className="App-header">

          <Switch>
            <Route path='/login'>

              <Login />

            </Route>
            <Route path='/checkout'>

              <Header />
              <Checkout />

            </Route>

            <Route path='/checkout'>

              <Header />
              <Checkout />

            </Route>
            
            <Route path='/'>  {/*default route should be at the botom */}
            
              <Header />
              <Home />
            
            </Route>

          </Switch>
        </header>
      </div>
      </Router>
  );
}

export default App;
