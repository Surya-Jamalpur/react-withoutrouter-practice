import React from 'react';
import Header from './components/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/Aboutus';
import ContactUs from './components/ContactUs/ContactUs';

import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Route from './components/Route';
const App = () => {
    return (
        <div className="container">
            <Header />
            <Route path="/"> <Home /></Route>
            <Route path="/AboutUs"> <AboutUs /></Route>
            <Route path="/ContactUs"> <ContactUs /></Route>
            <Route path="/Services"> <Services /></Route>
            <Route path="/Products"> <Products /></Route>
        </div>
    )
}
export default App;