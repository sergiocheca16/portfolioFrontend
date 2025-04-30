import { useState } from 'react'
import axios from 'axios'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3000/contact', form)
    alert('Mensaje enviado')
  }

  return (
    <div className="fade-in">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Tu nombre" onChange={handleChange} required />
        <input name="email" placeholder="Tu email" onChange={handleChange} required />
        <textarea name="message" placeholder="Tu mensaje" onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contact;


