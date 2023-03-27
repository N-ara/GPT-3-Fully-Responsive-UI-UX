import React from "react";

import { CTA, Navbar, Brand } from "./components";
import {
  Blog,
  WhatGPT3,
  Features,
  Header,
  Footer,
  Possibilities,
} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
