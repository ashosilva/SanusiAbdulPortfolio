import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects"
import Inquiry from "./components/Inquiry";
import Espial from "./components/Espial";




function App() {
  return (
    < BrowserRouter >
      <NavBar />
      <div className="content">
      <Switch>
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
        <Route component={Home} path='/' exact />
        <Route component={Espial} path='/espial' />
        <Route component={Projects} path='/projects' />
        <Route component={Inquiry} path='/inquiry' />
      </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
