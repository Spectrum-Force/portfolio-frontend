import React from 'react';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import Navbar from './Navbar';  
import Home from './Home';   
import About from './About';  
import Services from './Services';  
import Portfolio from './Portfolio';  
import Experiences from './Experiences';  
import Contact from './Contact';  

const Index = () => {  
  return (  
    <Router>  
      <Navbar />  
      <Switch>  
        <Route path="/" exact component={Home} />  
        <Route path="/about" component={About} />  
        <Route path="/services" component={Services} />  
        <Route path="/portfolio" component={Portfolio} />  
        <Route path="/experiences" component={Experiences} />  
        <Route path="/contact" component={Contact} />  
      </Switch>  
    </Router>  
  );  
};  

export default Index;