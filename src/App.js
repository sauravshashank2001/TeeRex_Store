import "./App.css";
import Header from "./Component/Navbar";
import {  Route, BrowserRouter,Switch } from "react-router-dom";
import Home from "./Component/LandingPage";
import Cart from "./Component/Cart";
import Context from "./Component2/Context";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
    <Header />
    <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cart" component={Cart}/>
    </Switch>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
      