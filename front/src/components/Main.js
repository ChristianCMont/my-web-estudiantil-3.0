import React from 'react';
import uno from '../images/uno.svg';
import dos from '../images/dos.svg';
import tres from '../images/tres.svg';
import woman from '../images/woman.png';

const Main = () => {
  return (
    <main className="services container">

      <a href="/" className="info">Tiempo real</a>
      <h2>Nuestros Servicios</h2>

      <div className="services-content">
        <div className="services-txt">

          <div className="services-card">
            <img src={uno} className="uno" alt="Clases Interactivas en Vivo" />
            <div className="card-txt">
              <h3>Clases Interactivas en Vivo</h3>
              <p>
                Conéctate con expertos en tiempo real y mejora tus habilidades desde casa.
              </p>
              <a href="/">Información</a>
            </div>
          </div>

          <div className="services-card">
            <img src={dos} alt="Asesoramiento Personalizado" />
            <div className="card-txt">
              <h3>Asesoramiento Personalizado</h3>
              <p>
                Recibe orientación individualizada para alcanzar tus objetivos académicos y profesionales.
              </p>
              <a href="/">Información</a>
            </div>
          </div>

          <div className="services-card">
            <img src={tres} alt="Acceso a Material Exclusivo" />
            <div className="card-txt">
              <h3>Acceso a Material Exclusivo</h3>
              <p>
                Disfruta de recursos de aprendizaje únicos y actualizados para maximizar tu conocimiento.
              </p>
              <a href="/">Información</a>
            </div>
          </div>
        </div>

        <div className="services-img">
          <img src={woman} alt="Mujer usando laptop" />
        </div>
      </div>

    </main>
  );
}

export default Main;
