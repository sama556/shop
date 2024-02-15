import React from 'react';

import Header from './Compontents/Header';
import Slid from './Compontents/Slid';
import Footer from './Compontents/Footer';
import First from './Compontents/First';
import Banner from './Compontents/Banner';
import BrandItem from './Compontents/BrandItem';
import Message from './Compontents/Message';
import Second from "./Compontents/Second";


function App() {
  return (
    <>
  
      <Header />
      <Slid/>
      <First/>
   <Second></Second>
      <Banner/>
      <Message></Message>
      <BrandItem></BrandItem>
    <Footer />
    
    </>
  );
}

export default App;
