import React from 'react';
import { HashRouter, 
  BrowserRouter as Router, 
  Route, 
  a, 
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
    <div className="App" id='page'>
          <header className="sticky-top" id="navar">
            <nav className="navbar navbar-expand-lg navbar-dark navbar-bg">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="btn black accent navbar-brand px-10 mx-0 col-lg-4 nomobile" href="#home">Hizashi</a>
                    <button id="menu" className="btn accent noreg">Menu</button>
                    <ul className="navbar-nav px-8 col-lg-8 justify-content-end nomobile">
                        <li className="nav-item mx-4"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item mx-4"><a className="nav-link" href="#interest">What I Do</a></li>
                        <li className="nav-item mx-4"><a className="nav-link" href="#service">Service</a></li>
                        <li className="nav-item mx-4"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item mx-4"><a className="nav-link" href="#about">About</a></li>
                    </ul>
                    <ul id="mobnav" className="navbar-nav px-8 col-lg-8 justify-content-end nonr">
                        <li className="nav-item mx-4"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item mx-4"><a className="nav-link" href="#interest">What I Do</a></li>
                        <li className="nav-item mx-4"><a className="nav-link" href="#service">Service</a></li>
                        <li className="nav-item mx-4"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item mx-4"><a className="nav-link" href="#about">About</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        <div id="spacing"></div>
        <Home themeclr={getclr()} />
        <Interest />
        <Service />
        <Projects />
        <About />
    </div>
  );
}

export default App;
