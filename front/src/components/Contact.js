import React, { useState } from 'react';


// Importación de imágenes
import bg from '../images/bg.png';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <header id="contact-header" className="header">
      <img src={bg} className="bg" alt="Background" />
      <div className="header-content container">
        <div className="header-txt">
          <h1 className="text-center">Contáctanos</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="nombre@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Contact;
