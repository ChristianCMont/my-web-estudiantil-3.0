import React from 'react';
import { Route, Link, useMatch, useResolvedPath, Routes } from 'react-router-dom';
import bg from '../images/bg.png';


const About = () => {
  let resolvedPath = useResolvedPath("");
  let match = useMatch({ path: resolvedPath.pathname, end: false });

  return (

    <>

      <header class="header">

        <img src={bg} className="bg" alt="" />

        <div class="header-content container">

          <div class="header-txt" >
            <h1><span>Sobre</span> Nosotros
            </h1>
            <p>
            ¡Bienvenido a una nueva era de aprendizaje! En nuestros cursos interactivos en vivo, descubrirás una manera innovadora de adquirir conocimientos y habilidades desde la comodidad de tu hogar. Disfruta de una experiencia educativa sin igual, donde expertos te guiarán en tiempo real para asegurar tu éxito. ¡Únete a nosotros y transforma tu futuro hoy mismo!
            </p>

            <Link to="/" className="btn-1">Inicio</Link>

          </div>

        


          <div class="header-txt">
           
        <h1 className="text-center">About Page</h1>
        <ul className="text-center">
          <li><Link to={`${match.url}/team`}>Our Team</Link></li>
          <li><Link to={`${match.url}/history`}>Our History</Link></li>
        </ul>
        <Routes>
          <Route path={`${match.path}/team`} element={<Team />} />
          <Route path={`${match.path}/history`} element={<History />} />
        </Routes>
      </div>



        </div>
      </header>

      

    </>
  );
}


const Team = () => <div><h2>Team Page</h2></div>;
const History = () => <div><h2>History Page</h2></div>;

export default About;
