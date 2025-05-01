import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaReact, FaNodeJs, FaCss3Alt, FaJsSquare, FaDatabase, FaGit, FaHtml5, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiExpress } from 'react-icons/si';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    axios.get(`${backendUrl}/skills`)
      .then(res => setSkills(res.data))
      .catch(err => console.error("Error al cargar página:", err));
  }, []);

  const skillIcons = {
    React: <span className="iconSkill"><FaReact size={80} /></span>,
    'Node.js': <span className="iconSkill"><FaNodeJs size={80} /></span>,
    Express: <span className="iconSkill"><SiExpress size={80} /></span>,
    CSS: <span className="iconSkill"><FaCss3Alt size={80} /></span>,
    JavaScript: <span className="iconSkill"><FaJsSquare size={80} /></span>,
    SQL: <span className="iconSkill"><FaDatabase size={80} /></span>,
    HTML: <span className="iconSkill"><FaHtml5 size={80} /></span>,
    MongoDB: <span className="iconSkill"><SiMongodb size={80} /></span>,
    Git: <span className="iconSkill"><FaGit size={80} /></span>,
    GitHub: <span className="iconSkill"><FaGithub size={80} /></span>,
    Firebase: <span className="iconSkill"><SiFirebase size={80} /></span>
  };
  
  

return (
  <div className="fade-in">
    <h2>Skills</h2>
    <div className="skills">
    {skills.map(skill => (
      <a 
        key={skill.id}
        href={skill.certificate}
        target="_blank"
        rel="noopener noreferrer"
        className="skill"
        style={{ textDecoration: 'none', marginRight: '15px', textAlign: 'center' }}
      >
        {skillIcons[skill.name]}
        <h3 style={{ color: 'var(--primary)' }}>{skill.name}</h3>
      </a>
    ))}
    </div>
  </div>
);
}

export default Skills;


