import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
    </BrowserRouter>
  );
}

export default App;
