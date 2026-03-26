import { useEffect, useState } from 'react'
import './Education.css'

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.2 })

    const section = document.getElementById('education')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className={`panel education ${isVisible ? 'visible' : ''}`}>
      <div className="education-grid">
        <div className="education-card">
          <h2>Education</h2>
          <h3>Chandigarh University</h3>
          <p className="degree">B.E. Computer Science (2023-2027)</p>
          <p className="meta">GPA: 7.71 (Ongoing)</p>
        </div>
        <div className="education-card">
          <h2>Certification</h2>
          <h3>Oracle Cloud Infrastructure 2025 Certified Foundations Associate</h3>
          <p className="meta">Validated cloud architecture, compute, storage, networking, security, and IAM fundamentals.</p>
        </div>
      </div>

      <div className="leadership">
        <h2>Leadership & Activities</h2>
        <ul>
          <li>Class Representative at Chandigarh University, coordinating academic communication between students and faculty.</li>
          <li>Committee Member, Equal Opportunity & Diversity Committee, supporting inclusive initiatives and student activities.</li>
        </ul>
      </div>
    </section>
  )
}
