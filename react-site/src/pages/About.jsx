import { Link } from 'react-router-dom'
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
          <span className="section-label">About Us</span>
          <h1>Automation That Works For You</h1>
          <p className="page-hero-subtitle">
            An AI automation agency helping businesses work smarter.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section className="story-section">
      <div className="container">
        <div className="story-grid">
          <motion.div 
            className="story-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Story</h2>
            <p>
              MNTN_Tech was founded with a simple mission: help businesses work smarter 
              through AI automation. We saw too many business owners drowning in repetitive tasks—follow-up 
              emails, data entry, appointment scheduling—work that machines could handle while humans 
              focused on what actually grows the business.
            </p>
            <p>
              We started by helping small businesses with practical automation. The contractor who was 
              losing leads because he couldn't respond fast enough. The real estate agent spending half 
              her day on email instead of showing houses. The insurance broker manually tracking policy 
              renewals in spreadsheets.
            </p>
            <p>
              Today, we work with businesses across the country—from startups to established companies. 
              The work we do doesn't require us to be in the same room. We focus on results, not logistics.
            </p>
          </motion.div>
          <motion.div 
            className="story-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="location-card">
              <div className="location-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
              </div>
              <h3>Nationwide</h3>
              <p>Serving Clients Everywhere</p>
              <div className="location-details">
                <span>Based in North Carolina</span>
                <span>Working with clients across the US</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MissionSection() {
  return (
    <section className="mission-section bg-slate">
      <div className="container">
        <motion.div 
          className="mission-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Our Mission</span>
          <h2>Helping Businesses Work Smarter</h2>
          <p className="mission-statement">
            We believe every business—from the local shop on Main Street to the growing 
            enterprise—deserves access to automation that saves time and money. Our goal 
            is to make AI practical, affordable, and actually useful for the work you do every day.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const differentiators = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: "No Geographic Limits",
    description: "We work with clients across the country. Location doesn't affect quality—you get the same expertise and results wherever you are."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Security-First Approach",
    description: "Background in cybersecurity means we build secure by default. Our private AI solutions ensure your data never leaves your infrastructure."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: "Outcome-Focused Pricing",
    description: "We charge for results, not hours. Project-based pricing tied to the time and money you'll save, with most automations paying for themselves in 30-60 days."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    title: "Full-Stack Capability",
    description: "From simple email automation to enterprise AI infrastructure to cloud security—we handle it all. One partner for all your automation needs."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Technical Depth",
    description: "We're not just connecting apps together. We build custom solutions—n8n workflows, Python automation, local AI models—whatever your business actually needs."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: "No Geographic Limits",
    description: "Location doesn't affect quality. We've built automation systems for clients across the country. Whether local or remote, you get the same expertise."
  }
]

function DifferentiatorsSection() {
  return (
    <section className="differentiators-section">
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Why Choose Us</span>
          <h2>What Makes Us Different</h2>
        </motion.div>

        <div className="differentiators-grid grid-3">
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              className="differentiator-card card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="differentiator-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ApproachSection() {
  return (
    <section className="approach-section bg-dark">
      <div className="container">
        <motion.div 
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Our Approach</span>
          <h2>How We Work</h2>
        </motion.div>

        <div className="approach-steps">
          <motion.div 
            className="approach-step"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="step-number mono">01</div>
            <div className="step-content">
              <h3>Discovery</h3>
              <p>We start with a free workflow audit—either in person or over video call. We learn how your business actually works, not how we assume it works.</p>
            </div>
          </motion.div>

          <motion.div 
            className="approach-step"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="step-number mono">02</div>
            <div className="step-content">
              <h3>Analysis</h3>
              <p>We identify your biggest automation opportunities and calculate the real ROI—hours saved, errors eliminated, revenue impact. No vague promises, just numbers.</p>
            </div>
          </motion.div>

          <motion.div 
            className="approach-step"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="step-number mono">03</div>
            <div className="step-content">
              <h3>Implementation</h3>
              <p>We build your automation with minimal disruption to your operations. You'll see progress weekly and can provide feedback as we go.</p>
            </div>
          </motion.div>

          <motion.div 
            className="approach-step"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="step-number mono">04</div>
            <div className="step-content">
              <h3>Optimization</h3>
              <p>After launch, we monitor performance and make improvements. The best automations get better over time as we learn from real usage data.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Get Started?</h2>
          <p>
            Wherever you're located, let's talk about how automation 
            can save you time and money.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Schedule a Conversation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <main>
      <PageHero />
      <StorySection />
      <MissionSection />
      <DifferentiatorsSection />
      <ApproachSection />
      <CTASection />
    </main>
  )
}

