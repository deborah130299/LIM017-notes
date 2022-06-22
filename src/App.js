import React from 'react';
import {Home}  from  './components/Home.js';
import {Register} from './components/Register.js'
import {Login} from './components/Login.js';
import {Note} from './components/Note.js';
import {BrowserRouter , Route,  Routes} from 'react-router-dom';
import { AuthProvider } from "./context/authContext";
import "./components/Login-Register.css"
import "./components/Home.css";


 function App() {
  return (
    <div >
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/note' element={<Note />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}
export default App;