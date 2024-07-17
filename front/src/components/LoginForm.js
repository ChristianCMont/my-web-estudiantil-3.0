// src/components/LoginForm.js

import React from 'react';
import estilos from "../estilos.css";

const LoginForm = () => {
  return (
    <form action="" className="formulario__login">
      <h2>Iniciar Sesión</h2>
      <input type="text" placeholder="Correo Electrónico" />
      <input type="password" placeholder="Contraseña" />
      <button>Entrar</button>
    </form>
  );
}

export default LoginForm;
