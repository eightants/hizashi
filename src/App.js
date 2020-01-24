import React from 'react';
import { HashRouter, 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch
} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';


import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Interest from './components/interest';
import Service from './components/service';

function getclr() {
  return sessionStorage.getItem("clr");
}



function App() {
  return (
    <HashRouter basename="/">
    <div className="App" id='page'>
          <header className="sticky-top" id="navar">
            <nav className="navbar navbar-expand-lg navbar-dark navbar-bg">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="btn black accent navbar-brand px-10 mx-0 col-lg-4 nomobile" to="/">Anthony Teo</Link>
                    <button id="menu" className="btn accent noreg">Menu</button>
                    <ul className="navbar-nav px-8 col-lg-8 justify-content-end nomobile">
                        <li className="nav-item mx-4"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="interest">Pro. Image</Link></li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="service">Service</Link></li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="portfolio">Portfolio</Link></li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="about">About</Link></li>
                    </ul>
                    <ul id="mobnav" className="navbar-nav px-8 col-lg-8 justify-content-end nonr">
                        <li className="nav-item mx-4"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="interest">Pro. Image</Link></li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="service">Service</Link></li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="portfolio">Portfolio</Link></li>
                        <li className="nav-item mx-4"><Link className="nav-link" to="about">About</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
        <div id="spacing"></div>
        <Switch>
          <Route exact path='/' render={() => <Home themeclr={getclr()} />} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Projects} />
          <Route exact path='/interest' component={Interest} />
          <Route exact path='/service' component={Service} />
        </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
