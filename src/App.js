import React from 'react';
import {Home}  from  './components/Home.js';
import {Register} from './components/Register.js'
import {Login} from './components/Login.js';
import { NavBar } from './components/NavBar';

import {BrowserRouter , Route,  Routes} from 'react-router-dom';
import { AuthProvider } from "./context/authContext";
import "./components/Login-Register.css"
import "./components/Home.css";
import "./components/NavBar.css";
import "./components/title.css";
import Main from './components/Main.js';


 function App() {
  return (
    
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Note' element={<><NavBar /> <Main /></>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
   
  );
}
export default App;