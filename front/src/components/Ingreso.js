import React, { useState } from 'react';
import bg from '../images/bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ingreso = () => {
    const [formularioActual, setFormularioActual] = useState('login'); // Estado para controlar el formulario actual

    function cambiarFormulario(formulario) {
        setFormularioActual(formulario);
    }

    function iniciarSesion(e) {
        e.preventDefault();
        // Implementar la lógica de inicio de sesión
        console.log('Iniciando sesión...');
    }

    function registrarse(e) {
        e.preventDefault();
        // Implementar la lógica de registro
        console.log('Registrándome...');
    }

    return (
        <div>
            {/* Imagen de fondo */}
            <img src={bg} className="bg" alt="" />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3">
                                    <button
                                        className={`btn ${formularioActual === 'login' ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => cambiarFormulario('login')}
                                    >
                                        Iniciar Sesión
                                    </button>
                                    <button
                                        className={`btn ${formularioActual === 'registro' ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => cambiarFormulario('registro')}
                                    >
                                        Registrarse
                                    </button>
                                </div>

                                {formularioActual === 'login' && (
                                    <form className="formulario__login" onSubmit={iniciarSesion}>
                                        <h2>Iniciar Sesión</h2>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder="Correo Electrónico" name="correo" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" className="form-control" placeholder="Contraseña" name="contrasena" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Entrar</button>
                                    </form>
                                )}

                                {formularioActual === 'registro' && (
                                    <form className="formulario__register" onSubmit={registrarse}>
                                        <h2>Registrarse</h2>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Nombre completo" name="nombre" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder="Correo Electrónico" name="correo" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Usuario" name="usuario" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" className="form-control" placeholder="Contraseña" name="contrasena" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Registrarse</button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ingreso;
