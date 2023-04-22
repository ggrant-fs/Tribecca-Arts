import {Route,Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Art from "./pages/Art";
import Tickets from './pages/Tickets';


function App() {
  return (
    <div className="App">
          <Switch>
           <Route exact path="/home">
             <Home/>
           </Route>
           <Route path="/art">
             <Art/>
           </Route>
           <Route path="/tickets">
             <Tickets/>
           </Route>
          </Switch>
    </div>
  );
}

export default App;
