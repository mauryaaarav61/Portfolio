import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Navbar/Home';
import About from './Navbar/About';
import Contacts from './Navbar/Contacts';

import './App.css';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contacts' element={<Contacts/>}/>
   
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
