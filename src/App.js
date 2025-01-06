import { BrowserRouter, Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Espial from "./components/Espial";
import Portfolio from "./components/Portfolio"
import Inquiry from "./components/Inquiry";





function App() {
  return (
    < BrowserRouter >
      <NavBar />
      <div className="content">
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Espial} path='/espial' />
        <Route component={Portfolio} path='/projects' />
        <Route component={Inquiry} path='/inquiry' />
      </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
