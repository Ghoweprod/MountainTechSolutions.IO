import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import './App.css'

// Animated grid background
function GridBackground() {
  return (
    <div className="grid-bg">
      <div className="grid-overlay" />
      <div className="gradient-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
    </div>
  )
}

// Floating particles
function Particles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10
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
            opacity: [0.2, 0.8, 0.2],
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

// Typewriter effect
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

// Navigation
function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <a href="#" className="logo">
        <div className="logo-icon">
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M16 2L4 28H28L16 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M16 10L8 28H24L16 10Z" fill="currentColor" opacity="0.3"/>
            <circle cx="16" cy="18" r="3" fill="currentColor"/>
          </svg>
        </div>
        <span className="logo-text">
          <span className="logo-mts">MTS</span>
          <span className="logo-dot">_</span>
        </span>
      </a>
      <div className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#contact" className="nav-link cta">Contact</a>
      </div>
    </motion.nav>
  )
}

// Hero Section
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section className="hero" ref={ref}>
      <GridBackground />
      <Particles />
      <motion.div className="hero-content" style={{ y, opacity }}>
        <motion.div 
          className="badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-dot" />
          <span className="mono">Robbinsville, NC</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mountain<span className="accent">Tech</span>
          <br />Solutions
        </motion.h1>

        <motion.div 
          className="terminal-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span className="prompt">$</span>
          <Typewriter text=" securing rural businesses..." delay={60} />
        </motion.div>

        <motion.p 
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Practical IT security and cost reduction for small businesses 
          in Western North Carolina.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a href="#contact" className="btn btn-primary">
            <span>Get Started</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#services" className="btn btn-ghost">
            View Services
          </a>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div 
            className="scroll-line"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

// About Section
function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="mono">01</span>
          <span className="label-line" />
          <span>About</span>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Your local IT partner for the <span className="accent">digital age</span></h2>
            <p>
              I help small businesses in the Robbinsville area save money and secure 
              their technology systems. With expertise in network security, system 
              optimization, and IT troubleshooting, I provide practical solutions 
              that protect your business and reduce costs.
            </p>
            <p>
              As a member of this mountain community, I understand the unique 
              challenges rural businesses face. That's why I focus on delivering 
              straightforward, effective IT solutions without the big-city price 
              tag or unnecessary complexity.
            </p>
          </motion.div>

          <motion.div 
            className="stats-grid"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="stat-value mono">100%</div>
              <div className="stat-label">Local Focus</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon emerald">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="stat-value mono">24/7</div>
              <div className="stat-label">Support</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon amber">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div className="stat-value mono">$0</div>
              <div className="stat-label">Hidden Fees</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Services Section
const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Security Assessment",
    description: "Comprehensive evaluation of your security posture. Identify vulnerabilities before they become problems.",
    tag: "Protection"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Cost Reduction",
    description: "Discover where you're overspending on technology and find opportunities to cut costs.",
    tag: "Optimization"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="8" rx="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    title: "Network Troubleshooting",
    description: "Quick diagnosis and resolution of network issues, slow systems, and connectivity problems.",
    tag: "Support"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    title: "Custom Solutions",
    description: "Technology solutions specifically tailored to your operations and growth goals.",
    tag: "Innovation"
  }
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div 
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="mono">02</span>
          <span className="label-line" />
          <span>Services</span>
        </motion.div>

        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What I <span className="accent">offer</span>
        </motion.h2>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <span className="service-tag mono">{service.tag}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="mono">03</span>
          <span className="label-line" />
          <span>Contact</span>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Let's <span className="accent">connect</span></h2>
            <p>Ready to secure your business and reduce IT costs? Reach out today for a free consultation.</p>

            <div className="contact-items">
              <a href="mailto:MTS@Gmail.com" className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label mono">Email</span>
                  <span className="contact-value">MTS@Gmail.com</span>
                </div>
              </a>

              <a href="tel:864-404-1054" className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label mono">Phone</span>
                  <span className="contact-value">864-404-1054</span>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <span className="contact-label mono">Service Area</span>
                  <span className="contact-value">Robbinsville & Western NC</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-cta"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="cta-card">
              <div className="cta-badge mono">Free Assessment</div>
              <h3>Get a Security Checkup</h3>
              <p>Not sure where to start? Let me evaluate your current technology setup and identify opportunities to improve security and reduce costs.</p>
              <a href="mailto:MTS@Gmail.com?subject=Free Security Assessment Request" className="btn btn-primary btn-full">
                <span>Request Assessment</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <div className="cta-glow" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="mono">MTS_</span>
            <span className="footer-divider">|</span>
            <span>Mountain Tech Solutions</span>
          </div>
          <div className="footer-copy">
            © 2026 · Serving small businesses in Western North Carolina
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App

