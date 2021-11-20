import React from 'react';
import Navbar from './components/navbar';
import Home from './components/sections/home';
import About from './components/sections/about';
import Shop from './components/sections/shop';
import Delivery from './components/sections/delivery';
import Instagram from './components/sections/instagram';
import Contact from './components/sections/contact';

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Shop />
            <Delivery />
            <Instagram />
            <Contact />
        </>
    )
}

export default App;