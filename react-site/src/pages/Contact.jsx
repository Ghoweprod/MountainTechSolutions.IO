import { useState } from 'react'
import { motion } from 'framer-motion'

function PageHero() {
  return (
    <section className="page-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Contact</span>
          <h1>Let's Talk Automation</h1>
          <p className="page-hero-subtitle">
            Ready to save 10-20 hours per week? Start with a free workflow audit—no commitment required.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send to a backend
    const mailtoLink = `mailto:mntntechsolutions@gmail.com?subject=Automation Inquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService Interest: ${formData.service}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
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
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 555-5555"
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company name"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="service">What are you interested in?</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select a service...</option>
          <option value="workflow-audit">Free Workflow Audit</option>
          <option value="business-automation">Business Process Automation ($1.5K-$6K)</option>
          <option value="ai-solutions">Advanced AI Solutions ($8K-$30K)</option>
          <option value="security-automation">IT & Security Automation ($10K-$100K)</option>
          <option value="ongoing-support">Ongoing Support & Maintenance</option>
          <option value="not-sure">Not Sure - Need Guidance</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Tell us about your needs</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="What repetitive tasks are eating up your time? What would you automate if you could?"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-lg">
        Send Message
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
        </svg>
      </button>
    </form>
  )
}

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Get in Touch</h2>
            <p className="contact-intro">
              Multiple ways to reach us. We typically respond within 24 hours.
            </p>

            <div className="contact-methods">
              <a href="mailto:mntntechsolutions@gmail.com" className="contact-method">
                <div className="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="method-details">
                  <span className="method-label">Email</span>
                  <span className="method-value">mntntechsolutions@gmail.com</span>
                </div>
              </a>

              <a href="tel:864-404-1054" className="contact-method">
                <div className="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="method-details">
                  <span className="method-label">Phone</span>
                  <span className="method-value">864-404-1054</span>
                </div>
              </a>

              <div className="contact-method">
                <div className="method-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                </div>
                <div className="method-details">
                  <span className="method-label">Location</span>
                  <span className="method-value">Nationwide</span>
                  <span className="method-note">Based in North Carolina</span>
                </div>
              </div>
            </div>

            <div className="availability-cards">
              <div className="availability-card">
                <h4>📍 Serving Clients Nationwide</h4>
                <p>We work with businesses across the country. Your location doesn't limit what we can build together.</p>
              </div>
              <div className="availability-card">
                <h4>⚡ Fast Turnaround</h4>
                <p>We move quickly. Most projects start within days of signing, not weeks.</p>
              </div>
            </div>

            <div className="response-time">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Typical response time: <strong>within 24 hours</strong></span>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-header">
              <h3>Send Us a Message</h3>
              <p>Or use the form below and we'll get back to you.</p>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AuditSection() {
  return (
    <section className="audit-section bg-slate">
      <div className="container">
        <motion.div 
          className="audit-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="audit-badge badge badge-emerald">Free • No Commitment</div>
          <h2>Start With a Workflow Audit</h2>
          <p>
            Not sure where to start? Our free workflow audit identifies your biggest automation 
            opportunities and shows you exactly what's possible—with real numbers on time saved 
            and ROI.
          </p>
          
          <div className="audit-includes">
            <h4>What You'll Get:</h4>
            <ul>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                30-60 minute discovery call (video or in-person)
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Analysis of your current workflows and pain points
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Prioritized list of automation opportunities
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Estimated time savings and ROI for each
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Recommended solutions and pricing ranges
              </li>
            </ul>
          </div>

          <a 
            href="mailto:mntntechsolutions@gmail.com?subject=Free Workflow Audit Request" 
            className="btn btn-secondary btn-lg"
          >
            Request Your Free Audit
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <main>
      <PageHero />
      <ContactSection />
      <AuditSection />
    </main>
  )
}

