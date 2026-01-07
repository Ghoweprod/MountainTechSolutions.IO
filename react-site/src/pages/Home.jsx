import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Animated Grid Background
function GridBackground() {
  return (
    <div className="grid-bg">
      <div className="grid-lines" />
      <div className="gradient-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
    </div>
  )
}

// Floating Particles
function Particles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15
  }))

  return (
    <div className="particles">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Typewriter Effect
function Typewriter({ text, delay = 50 }) {
  const [displayed, setDisplayed] = useState('')
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, delay)
    return () => clearInterval(timer)
  }, [text, delay])

  useEffect(() => {
    const blink = setInterval(() => setCursor(c => !c), 500)
    return () => clearInterval(blink)
  }, [])

  return (
    <span className="mono">
      {displayed}
      <span className={`cursor ${cursor ? 'visible' : ''}`}>|</span>
    </span>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="hero">
      <GridBackground />
      <Particles />
      <div className="container">
        <motion.div 
          className="hero-content"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="badge badge-emerald">
            <span className="badge-dot" />
            Serving Clients Nationwide
          </motion.div>
          
          <motion.h1 variants={fadeInUp}>
            Save 10-20 Hours Per Week<br />
            <span className="text-gradient">With AI Automation</span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="terminal-line">
            <span className="prompt">$</span>
            <Typewriter text=" automating repetitive work..." delay={50} />
          </motion.div>
          
          <motion.p variants={fadeInUp} className="hero-subtitle">
            We help businesses automate repetitive tasks so you can focus on what matters. 
            Most automations pay for themselves in 30-60 days.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get a Free Workflow Audit
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg">
              View Services
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="hero-proof">
            <div className="proof-item">
              <span className="proof-value">10-20</span>
              <span className="proof-label">Hours saved weekly</span>
            </div>
            <div className="proof-divider" />
            <div className="proof-item">
              <span className="proof-value">30-60</span>
              <span className="proof-label">Day ROI payback</span>
            </div>
            <div className="proof-divider" />
            <div className="proof-item">
              <span className="proof-value">100%</span>
              <span className="proof-label">Remote capable</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div 
          className="scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}

// Services Overview
const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "Business Process Automation",
    description: "Automate email responses, lead capture, appointment booking, follow-ups, and data entry. Save hours every day on repetitive tasks.",
    price: "$1,500 - $6,000",
    link: "/services#automation"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    title: "Advanced AI Solutions",
    description: "Custom AI agents, private local models, RAG systems for company knowledge bases. Your data never leaves your infrastructure.",
    price: "$8,000 - $30,000",
    link: "/services#ai"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "IT & Security Automation",
    description: "Cloud infrastructure monitoring, security operations, threat detection, and compliance automation with auto-remediation.",
    price: "$10,000 - $100,000",
    link: "/services#security"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8v4l3 3"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    title: "Ongoing Support & Maintenance",
    description: "24/7 monitoring, continuous optimization, monthly maintenance, and incident response to keep your automations running smoothly.",
    price: "$200 - $2,000/mo",
    link: "/services#support"
  }
]

function ServicesSection() {
  return (
    <section className="services-section bg-surface">
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Automation That Pays For Itself</h2>
          <p className="section-subtitle">
            From simple workflow automation to enterprise AI infrastructure, we build solutions 
            that save time and money—whether you're down the street or across the country.
          </p>
        </motion.div>

        <div className="services-grid grid-2">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="service-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-footer">
                <span className="service-price mono">{service.price}</span>
                <Link to={service.link} className="service-link">
                  Learn more →
                </Link>
              </div>
              <div className="card-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Industries Section
const industries = [
  { name: "Real Estate", icon: "🏠" },
  { name: "Insurance", icon: "📋" },
  { name: "Contractors", icon: "🔧" },
  { name: "Law Offices", icon: "⚖️" },
  { name: "Medical", icon: "🏥" },
  { name: "E-commerce", icon: "🛒" },
  { name: "Marketing", icon: "📈" },
  { name: "And More", icon: "✨" }
]

function IndustriesSection() {
  return (
    <section className="industries-section">
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Who We Help</span>
          <h2 className="section-title">Built for Your Industry</h2>
          <p className="section-subtitle">
            We understand the unique workflows and challenges of each industry. 
            Our automations are tailored to how you actually work.
          </p>
        </motion.div>

        <motion.div 
          className="industries-grid grid-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              className="industry-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <span className="industry-icon">{industry.icon}</span>
              <span className="industry-name">{industry.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Value Props Section
function ValueProps() {
  return (
    <section className="value-section bg-surface">
      <div className="container">
        <div className="value-grid">
          <motion.div 
            className="value-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Remote-First, Results-Focused</h2>
            <p className="section-subtitle">
              We work with clients across the country through seamless remote collaboration. 
              No geographic limits—just expertise delivered wherever you are.
            </p>

            <div className="value-list">
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                </div>
                <div>
                  <h4>100% Remote Delivery</h4>
                  <p>Video calls, screen sharing, and async collaboration. Work with us from anywhere.</p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon emerald">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h4>Security-First Approach</h4>
                  <p>Cybersecurity background. Private AI models that never leave your infrastructure.</p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon amber">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                  </svg>
                </div>
                <div>
                  <h4>Outcome-Focused Pricing</h4>
                  <p>We charge for results, not hours. Most automations pay for themselves in 30-60 days.</p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-icon violet">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                    <polyline points="2 17 12 22 22 17"/>
                    <polyline points="2 12 12 17 22 12"/>
                  </svg>
                </div>
                <div>
                  <h4>Full-Stack Capability</h4>
                  <p>Business automation, IT automation, security automation—all in one partner.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="value-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="value-card">
              <div className="value-card-header">
                <span className="value-card-badge mono">Typical Results</span>
              </div>
              <div className="value-stat">
                <span className="value-stat-number">15</span>
                <span className="value-stat-label">hours/week saved on average</span>
              </div>
              <div className="value-stat">
                <span className="value-stat-number">45</span>
                <span className="value-stat-label">days to full ROI payback</span>
              </div>
              <div className="value-stat">
                <span className="value-stat-number">90%</span>
                <span className="value-stat-label">reduction in manual errors</span>
              </div>
              <div className="value-card-glow" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Testimonial Section
function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <motion.div 
          className="testimonial-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="testimonial-quote">
            <svg viewBox="0 0 24 24" fill="currentColor" className="quote-icon">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote>
              "We went from spending 3 hours a day on follow-up emails to having it fully automated. 
              The system qualifies leads, schedules appointments, and sends reminders—all without us touching anything. 
              It paid for itself in the first month."
            </blockquote>
<div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">Small Business Owner</span>
                  <span className="author-title">Remote Client</span>
                </div>
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-bg">
        <div className="cta-grid-lines" />
      </div>
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Save 10-20 Hours Per Week?</h2>
          <p>
            Get a free workflow audit to identify your biggest automation opportunities. 
            We'll show you exactly what can be automated and what it's worth.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Schedule Free Audit
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <span className="cta-note">No commitment required • 100% remote-friendly</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <IndustriesSection />
      <ValueProps />
      <TestimonialSection />
      <CTASection />
    </main>
  )
}
