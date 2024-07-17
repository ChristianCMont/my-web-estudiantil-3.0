import React from 'react';
import bg from '../images/bg.png';

// importamos los componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';

// importamos el router
import { Route, Routes } from 'react-router-dom';

function Animes() {
    return (
        <>
            <div className='container' style={{ marginTop: '60px', textAlign: 'center' }}>


                <div style={{ color: 'white', textAlign: 'center' }}>
                    <h1>
                        <span style={{ fontSize: '1.3em', fontWeight: 'bold' }}>Sobre</span> Nosotros
                    </h1>
                </div>



                <Routes>
                    <Route path='/' element={<CompShowBlogs />} />



                </Routes>




                <img src={bg} className="bg" alt="" style={{ display: 'block', margin: '0 auto' }} />

                <div className="header-txt">
                    <h1><span>Sobre</span> Nosotros</h1>
                    <p>
                        ¡Bienvenido a una nueva era de aprendizaje! En nuestros cursos interactivos en vivo, descubrirás una manera innovadora de adquirir conocimientos y habilidades desde la comodidad de tu hogar. Disfruta de una experiencia educativa sin igual, donde expertos te guiarán en tiempo real para asegurar tu éxito. ¡Únete a nosotros y transforma tu futuro hoy mismo!
                    </p>
                </div>
            </div>



        </>
    );
}

export default Animes;
