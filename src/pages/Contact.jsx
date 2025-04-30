import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      await axios.post(`${backendUrl}/contact`, form);
      alert('Mensaje enviado');
    } catch (error) {
      console.error('Error enviando el mensaje:', error);
      alert('Hubo un error al enviar el mensaje');
    }
  };

  return (
    <div className="fade-in">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Tu nombre"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Tu email"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;



