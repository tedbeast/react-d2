import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PokeSearch from './components/PokeSearch/PokeSearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';

export const contextVar = React.createContext(true);

function App() {

  let [loginState, swapLoginState] = useState(false);

  function loginButton(){
    swapLoginState(!loginState);
  }

  return (
    <div className="App">
      
      <contextVar.Provider value={loginState}>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/search" element={<PokeSearch></PokeSearch>}/>
        <Route path="/home" element={<Home></Home>}/>
      </Routes>
      
      </BrowserRouter>
      </contextVar.Provider>

      <button onClick={loginButton}>login/logout</button>
      
    </div>
  );
}

export default App;
