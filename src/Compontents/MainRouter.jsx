// MainRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function Home() {
  return <h2>Home Page</h2>;
}

function Shop() {
  return <h2>Shop Page</h2>;
}

function Product() {
  return <h2>Product Page</h2>;
}

function Element() {
  return <h2>Element Page</h2>;
}

function MainRouter() {
  return (
    <Router>
   
  
      <Route path="/" exact component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/product" component={Product} />
      <Route path="/element" component={Element} />
    
  </Router>
  );
}

export default MainRouter;
