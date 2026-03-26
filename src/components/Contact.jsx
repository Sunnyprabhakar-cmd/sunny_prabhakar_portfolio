import { useEffect, useState } from 'react'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.2 })

    const section = document.getElementById('contact')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className={`panel contact ${isVisible ? 'visible' : ''}`}>
      <h2>Let us build something useful together.</h2>
      <p>Open to internships, backend engineering roles, and full-stack product opportunities.</p>
      <div className="contact-links">
        <a href="mailto:anmsunnyprabhakar@gmail.com" className="contact-item">
          <Mail size={20} />
          <span>anmsunnyprabhakar@gmail.com</span>
        </a>
        <a href="tel:+919508211315" className="contact-item">
          <Phone size={20} />
          <span>+91 9508211315</span>
        </a>
        <a href="https://github.com/Sunnyprabhakar-cmd" target="_blank" rel="noreferrer" className="contact-item">
          <Github size={20} />
          <span>GitHub Profile</span>
        </a>
        <a href="https://www.linkedin.com/in/sunny-prabhakar-anm" target="_blank" rel="noreferrer" className="contact-item">
          <Linkedin size={20} />
          <span>LinkedIn Profile</span>
        </a>
      </div>
    </section>
  )
}
