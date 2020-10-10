import React from 'react';
import './App.css';
import Navigation  from './components/Navigation';
import CardImage from './components/CardImage';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Order from './components/Order';
import Services from './components/Services'
import Footer from './components/Footer';
import  AboutUs  from "./components/AboutUs";
import  ContactUs  from "./components/ContactUs";
import ShopList from './components/ShopList';
import Cart from './components/Cart';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ShopContextProvider from './components/context/ShopContext';




function App() {
  return (
    <Router>
    <Navigation />
      <div>
        <Switch>
          <ShopContextProvider>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={AboutUs}/>
          <Route path='/contact' component={ContactUs}/>
          <Route path='/shop' exact component={ShopList}/>
          <Route path='/cart' component={Cart} />
          </ShopContextProvider>
        </Switch>
      </div>
      </Router>
  );
}
function Home () {
  return(
    <div>
      <CardImage />
      <Categories />
      <FeaturedProducts />
      <Order />
      <Services />
      <Footer />
    </div>
  )
}

export default App;
