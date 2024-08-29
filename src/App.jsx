import React from 'react';
import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Home />
            <About/>
            <br/>
            <Portfolio />
            <br/>
            <Skills />
            <br/>
            <br/>
            <br/>
            <br/>
            <Contact />
        </BrowserRouter>
    );
};

export default App;