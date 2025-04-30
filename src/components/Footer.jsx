import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Sergio. Todos los derechos reservados.</p>
      <div className="footer-links">
        <a 
          href="https://github.com/sergiocheca16" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
        >
          <FaGithub size={30} />
        </a>
        <a 
          href="https://linkedin.com/in/sergiochecaalvea" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} />
        </a>
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sergiochecaalvea@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Email"
        >
          <FaEnvelope size={30} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

