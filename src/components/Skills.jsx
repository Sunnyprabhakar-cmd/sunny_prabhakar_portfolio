import { useEffect, useState } from 'react'
import './Skills.css'

const skills = [
  'C', 'C++', 'Python', 'JavaScript', 'SQL', 'HTML/CSS',
  'Node.js', 'Express.js', 'React.js', 'Material UI',
  'Docker', 'RabbitMQ', 'MySQL', 'PostgreSQL',
  'Git', 'Linux', 'Microservices', 'REST APIs'
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.2 })

    const section = document.getElementById('skills')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className={`panel skills ${isVisible ? 'visible' : ''}`}>
      <h2>Technical Skills</h2>
      <div className="chip-grid">
        {skills.map((skill) => (
          <span key={skill} className="chip">{skill}</span>
        ))}
      </div>
    </section>
  )
}
