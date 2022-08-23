import './App.css';
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from './Checkout';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <header className="App-header">
        <Header />
          <Switch>

            <Route path='/checkout'>

              <Checkout />

            </Route>
            
            <Route path='/'>  {/*default route should be at the botom */}

              <Home />
            
            </Route>

          </Switch>
        </header>
      </div>
      </Router>
  );
}

export default App;
