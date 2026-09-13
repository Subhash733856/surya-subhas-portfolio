'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      {/* Navigation */}
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div>
          <h1>Surya Subhas</h1>
          <p>Full Stack Developer | Creative Problem Solver</p>
          <a href="#projects" className="cta-button">View My Work</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
          I'm a passionate developer with expertise in building modern web applications.
          With a strong foundation in full-stack development, I love creating elegant solutions
          to complex problems. My journey in tech has taught me the importance of clean code,
          user-centric design, and continuous learning.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Heavy Rent Go</h3>
            <p>A modern rental platform built with Next.js and React. Features include real-time search, booking management, and secure payment integration.</p>
            <div className="project-tags">
              <span className="tag">Next.js</span>
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Digital House Rents</h3>
            <p>MVP for a property rental application with comprehensive listing management and user authentication system.</p>
            <div className="project-tags">
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
              <span className="tag">REST API</span>
            </div>
          </div>
          <div className="project-card">
            <h3>PartyBox</h3>
            <p>Event management platform connecting party organizers with venues and vendors. Features real-time notifications and booking system.</p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Firebase</span>
              <span className="tag">CSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <h4>Frontend</h4>
            <p>React, Next.js, TypeScript, CSS, HTML</p>
          </div>
          <div className="skill-item">
            <h4>Backend</h4>
            <p>Node.js, Express, MongoDB, REST API</p>
          </div>
          <div className="skill-item">
            <h4>Tools</h4>
            <p>Git, GitHub, VS Code, Figma</p>
          </div>
          <div className="skill-item">
            <h4>Soft Skills</h4>
            <p>Problem Solving, Communication, Teamwork</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message here..."
            />
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
          {submitted && <p style={{ color: '#667eea', marginTop: '1rem', fontWeight: 'bold' }}>✓ Message sent successfully!</p>}
        </form>
      </section>

      {/* Footer */}
      <footer>
        <div className="social-links">
          <a href="https://github.com/Subhash733856" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <p>&copy; 2026 Surya Subhas. All rights reserved.</p>
        <p>Built with Next.js & Deployed on GitHub Pages</p>
      </footer>
    </>
  )
}