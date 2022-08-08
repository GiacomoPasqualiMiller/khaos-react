
import './App.css';
import React from "react";
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

//Pages Import
import Home from "./components/Home";
import IronMan from "./components/IronMan";
import CapitanMarvel from './components/CapitanMarvel';
import BlackPanter from './components/BlackPanter';
import Wanda from './components/Wanda';
import RegoleGenerali from './components/RegoleGenerali';

const App =() =>  {
  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/iron-man" element={<IronMan />} />
        <Route path="/capitan-marvel" element={<CapitanMarvel />} />
        <Route path="/black-panter" element={<BlackPanter />} />
        <Route path="/wanda" element={<Wanda />} />
        <Route path="/regole-generali" element={<RegoleGenerali />} />
        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
