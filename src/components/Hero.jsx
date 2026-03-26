import { useEffect, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={`hero ${isVisible ? 'visible' : ''}`} id="top">
      <div className="hero-content">
        <p className="eyebrow">Computer Science Undergraduate • Backend Focus</p>
        <h1>Building scalable products that feel fast, reliable, and real.</h1>
        <p className="hero-copy">
          I am Sunny Prabhakar, a developer focused on backend engineering, distributed systems, and full-stack product development. I build practical systems with
          Node.js, Docker, RabbitMQ, SQL, and React.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn btn-ghost" href="mailto:anmsunnyprabhakar@gmail.com">Email Me</a>
        </div>
        <ul className="quick-stats">
          <li>
            <span>20+</span>
            security events/sec pipeline
          </li>
          <li>
            <span>&lt; 100ms</span>
            sync latency in real-time app
          </li>
          <li>
            <span>OCI 2025</span>
            certified foundations associate
          </li>
        </ul>
      </div>

      <div className="hero-image">
        <img src="/images/profile.jpg" alt="Sunny Prabhakar" className="profile-img" />
      </div>
    </section>
  )
}
