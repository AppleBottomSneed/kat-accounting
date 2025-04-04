import React from 'react';

import { Navbar, Header, Brand, Services, Whyus, Testimonials, Findus, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <div className='parrallax__bg'>
        <Services />
        <Whyus />
      </div>
      <Testimonials />
      <Findus />
      <Footer />
    </div>
  )
}

export default App