import React from 'react';

// Importación de imágenes para usar en el componente
import bg from '../images/bg.png';
import lap from '../images/lap.gif';

// Importación de componentes y utilidades de react-router-dom
import { Link } from 'react-router-dom';


const Header = () => {
  return (

    <header class="header">

      <img src={bg} className="bg" alt="" />

      <div class="header-content container">

        <div class="header-txt" >
          <h1><span>¡Inscríbete ya</span> y sera tu camino al éxito!
          </h1>
          <p>
            Descubre una nueva forma de aprender con nuestros cursos interactivos en vivo. Disfruta de una experiencia educativa única desde la comodidad de tu hogar. ¡No te pierdas esta oportunidad de crecer y desarrollar nuevas habilidades con la guía de expertos en tiempo real!

          </p>

          <Link to="/About" className="btn-1">WebClass</Link>

        </div>

        <div class="header-img">
          <img src={lap} className="lap" alt="" />
        </div>

      </div>
    </header>

  );
}

export default Header;
