import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Intro></Intro>
      <About />
      <Hero videoUrl={"https://www.youtube.com/watch?v=SEMiqcUdYrQ"} />
      <Team />
      <Footer />
    </>
  );
}

export default App;
