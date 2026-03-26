import { useEffect, useState } from 'react'
import './About.css'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.2 })

    const section = document.getElementById('about')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className={`panel about ${isVisible ? 'visible' : ''}`}>
      <h2>About Me</h2>
      <p>
        I am currently pursuing B.E. in Computer Science at Chandigarh University (2023-2027). I enjoy designing event-driven systems, APIs, and
        user-focused applications that scale cleanly and remain easy to maintain.
      </p>
      <p>
        I have hands-on experience with microservices architecture, containerized deployment, and collaborative leadership through campus roles.
      </p>
    </section>
  )
}
