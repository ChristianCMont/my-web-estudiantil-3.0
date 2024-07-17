import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// Importación de imágenes y estilos para usar en el componente
import Style from './Style.css';
import menu from './images/menu.png';

// Importación de componentes y utilidades de react-router-dom
import {  Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Ingreso from './components/Ingreso';
import Animes from './components/Animes';


import CompCreateBlog from './components/blog/CreateBlog';
import CompEditBlog from './components/blog/EditBlog';




const App = () => {
  return (

    <div className={Style.container}>

      <div className="menu container">

        <Link to="/" className="logo">WebClass</Link>


        <input type="checkbox" id='menu' />
        <label htmlFor='menu'><img src={menu} className="menu-icono" alt="" /></label>
        {/* <label for='menu'><img src={menu} className="menu-icono" alt="" /></label> */}

        <nav className="navbar">
          <ul>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/ingresar">Ingresar</Link></li>
            <li><Link to="/animes">Animes</Link></li>
            
            
       

          </ul>
        </nav>

        

      </div>

      <div>
     
   
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ingresar" element={<Ingreso/>} />
          <Route path="/animes/*" element={<Animes />} />
          <Route path='/create' element={ <CompCreateBlog />} />
          <Route path='/edit/:id' element={ <CompEditBlog />} />

         
        

         
        </Routes>

     

      </div>

      <Footer />

    </div>




  );
}




export default App;
