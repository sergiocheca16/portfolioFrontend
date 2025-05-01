import { useEffect, useState } from 'react'
import axios from 'axios'

function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    axios.get(`${backendUrl}/projects`)
      .then(res => setProjects(res.data))
      .catch(err => console.error("Error cargando proyectos:", err))
  }, [])

  return (
    <div className="fade-in">
      <h2>Proyectos</h2>
      {projects.map(p => (
        <div className="project" key={p.id}>
          <a href={p.web} target="_blank" rel="noopener noreferrer">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}${p.image}`}
            alt={p.name}
            style={{ maxWidth: '100%', borderRadius: '8px' }}
          />
          </a>
          <a href={p.web} target="_blank" rel="noopener noreferrer">
            <h3 style={{ color: 'var(--primary)'}}>{p.name}</h3>
          </a> 
          <p>{p.description}</p>
          <div>
            {p.tags.map(tag => (
              <span key={tag} style={{ marginRight: '8px', fontSize: '0.85rem', color: '#666' }}>
                #{tag}
              </span>
            ))}
          </div>
          <div style={{ marginTop: '8px' }}>
            {p.githubFrontend && p.githubBackend ? (
              <>
                <a href={p.githubFrontend} target="_blank" rel="noopener noreferrer">
                  🖥️ GitHub Frontend
                </a>
                {' | '}
                <a href={p.githubBackend} target="_blank" rel="noopener noreferrer">
                  🛠️ GitHub Backend
                </a>
              </>
            ) : (
                <a href={p.githubFrontend || p.githubBackend} target="_blank" rel="noopener noreferrer">
                  🔗 Ver en GitHub
                </a>
            )}
          </div>
        </div> 
      ))}
    </div>
  )
}

export default Projects;


