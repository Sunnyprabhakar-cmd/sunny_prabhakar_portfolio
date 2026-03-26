import { useEffect, useState } from 'react'
import './Timeline.css'

const timelineEvents = [
  {
    year: '2023',
    title: 'Started B.E. in Computer Science',
    description: 'Began degree at Chandigarh University. Initial exposure to DSA, OOP, and backend concepts.',
    category: 'education'
  },
  {
    year: '2024',
    title: 'ShadowGuard & Lumee Projects',
    description: 'Designed and built security automation platform and real-time collaboration tool.',
    category: 'project'
  },
  {
    year: '2025',
    title: 'OCI Certification & Class Representative',
    description: 'Earned Oracle Cloud Infrastructure Certified Foundations Associate. Took leadership role at university.',
    category: 'achievement'
  },
  {
    year: '2026',
    title: 'Full-Stack Ecommerce Build',
    description: 'Currently developing ecommerce platform. Refining full-stack skills and preparing for industry roles.',
    category: 'project'
  }
]

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.1 })

    const section = document.getElementById('timeline')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    
    timelineEvents.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleItems(prev => new Set(prev).add(idx))
      }, idx * 150)
    })
  }, [isVisible])

  return (
    <section id="timeline" className={`panel timeline ${isVisible ? 'visible' : ''}`}>
      <h2>Journey</h2>
      <div className="timeline-container">
        {timelineEvents.map((event, idx) => (
          <div 
            key={idx} 
            className={`timeline-item ${visibleItems.has(idx) ? 'visible' : ''} ${event.category}`}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-year">{event.year}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  )
}
