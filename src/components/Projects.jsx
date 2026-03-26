import { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: 'ShadowGuard - Security Automation Platform',
    category: 'backend',
    stack: 'Node.js • Suricata • RabbitMQ • Docker • Fluent Bit • Microservices',
    description: [
      'Built a SOAR-style security pipeline for real-time IDS alert handling.',
      'Designed event-driven services processing 20+ security events per second.',
      'Delivered sub-second end-to-end latency from detection to response.'
    ],
    link: 'https://github.com/Sunnyprabhakar-cmd/ShadowGuard',
    metrics: ['20+', 'events/sec', 'Real-time']
  },
  {
    id: 2,
    title: 'Lumee - Real-Time Watch Together Platform',
    category: 'fullstack',
    stack: 'React • Node.js • Express • WebSockets • Docker',
    description: [
      'Built synchronized playback with sub-100ms local network latency.',
      'Implemented JWT auth, room lifecycle management, and persistent sessions.',
      'Created reusable React architecture across 5+ core views.'
    ],
    link: 'https://github.com/Sunnyprabhakar-cmd/Lumee',
    metrics: ['<100ms', 'latency', 'Real-time sync']
  },
  {
    id: 3,
    title: 'Ecommerce Website',
    category: 'fullstack',
    stack: 'React • Node.js • Express • SQL • Payments • Stripe',
    description: [
      'Developing a full ecommerce flow with product browsing, cart, and checkout.',
      'Building secure authentication, order management, and admin controls.',
      'Designing a conversion-focused UI for faster buyer decisions.'
    ],
    link: null,
    metrics: ['In Progress', 'Full-stack', 'Production-ready']
  }
]

export default function Projects({ activeFilter, setActiveFilter }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.1 })

    const section = document.getElementById('projects')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className={`panel projects ${isVisible ? 'visible' : ''}`}>
      <div className="section-head">
        <h2>Featured Projects</h2>
        <p>Impact-focused builds with measurable outcomes.</p>
      </div>

      <div className="filter-tabs">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setActiveFilter('fullstack')}
        >
          Full-Stack
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'backend' ? 'active' : ''}`}
          onClick={() => setActiveFilter('backend')}
        >
          Backend
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <article key={project.id} className={`project-card ${project.metrics[0] === 'In Progress' ? 'highlight' : ''}`} style={{ transitionDelay: `${idx * 100}ms` }}>
            <div>
              <h3>{project.title}</h3>
              <p className="stack">{project.stack}</p>
              <ul>
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="metrics">
                {project.metrics.map((metric, i) => (
                  <span key={i} className="metric-badge">{metric}</span>
                ))}
              </div>
            </div>
            {project.link ? (
              <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                <ExternalLink size={20} />
              </a>
            ) : (
              <span className="pill">Coming Soon</span>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
