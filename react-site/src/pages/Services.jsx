import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Service Tier Data
const serviceTiers = [
  {
    id: "automation",
    tier: "Tier 1",
    title: "Business Process Automation",
    price: "$1,500 - $6,000",
    description: "Automate the repetitive tasks eating up your day. Perfect for small businesses looking to reclaim their time without a massive investment.",
    roi: "Most clients save 10-15 hours/week, with full ROI in 30-60 days",
    services: [
      {
        name: "Workflow Automation",
        items: ["Email responses & templates", "Lead capture & qualification", "Appointment booking", "Follow-up sequences"]
      },
      {
        name: "Customer Communication",
        items: ["FAQ chatbots", "Appointment reminders", "Review request sequences", "Follow-up automation"]
      },
      {
        name: "Content & Marketing",
        items: ["Social media scheduling", "Content repurposing", "Email campaigns", "Newsletter automation"]
      },
      {
        name: "Data Entry & Admin",
        items: ["Invoice processing", "Receipt extraction", "Spreadsheet automation", "CRM updates"]
      }
    ],
    idealFor: "Small businesses (1-20 employees) spending too much time on repetitive tasks",
    examples: [
      "Real estate agent automates lead follow-up → saves 12 hours/week",
      "Contractor automates quote requests → 3x faster response time",
      "Insurance broker automates policy renewals → zero missed renewals"
    ]
  },
  {
    id: "ai",
    tier: "Tier 2",
    title: "Advanced AI Solutions",
    price: "$8,000 - $30,000",
    description: "Custom AI that understands your business. Private models, intelligent agents, and knowledge systems that never send your data to external servers.",
    roi: "Enterprise-grade AI capabilities at a fraction of the cost of building in-house",
    services: [
      {
        name: "Private AI Solutions",
        items: ["Local models (Llama, Mistral)", "Zero external API calls", "Data never leaves your infrastructure", "Custom fine-tuning"]
      },
      {
        name: "Custom AI Agents",
        items: ["Autonomous task completion", "Multi-step reasoning", "Tool use & integrations", "Human-in-the-loop workflows"]
      },
      {
        name: "RAG Systems",
        items: ["Company knowledge bases", "Document Q&A", "Policy & procedure lookup", "Training material systems"]
      },
      {
        name: "Multi-Agent Systems",
        items: ["Complex workflow orchestration", "Agent collaboration", "Specialized agent teams", "Self-improving systems"]
      }
    ],
    idealFor: "Mid-market companies (20-100 employees) needing AI without compromising data privacy",
    examples: [
      "Law firm builds private document analysis → 80% faster contract review",
      "Medical practice creates HIPAA-compliant AI assistant → handles 60% of patient questions",
      "Manufacturing company deploys knowledge base → new employees productive 50% faster"
    ]
  },
  {
    id: "security",
    tier: "Tier 3",
    title: "IT Operations & Security Automation",
    price: "$10,000 - $100,000",
    description: "Enterprise-grade automation for cloud infrastructure, security operations, and compliance. Built by professionals with cybersecurity backgrounds.",
    roi: "Reduce incident response time by 90%, prevent costly breaches, maintain continuous compliance",
    services: [
      {
        name: "Cloud Infrastructure",
        items: ["AWS/Azure monitoring", "Auto-scaling & optimization", "Cost management automation", "Infrastructure as Code"]
      },
      {
        name: "Security Operations",
        items: ["CloudTrail analysis", "Threat detection & alerting", "Auto-response playbooks", "Incident management"]
      },
      {
        name: "IT Monitoring",
        items: ["24/7 system monitoring", "Automated remediation", "Performance optimization", "Capacity planning"]
      },
      {
        name: "Compliance Automation",
        items: ["Continuous monitoring", "Automated reporting", "Audit trail management", "Policy enforcement"]
      }
    ],
    idealFor: "Enterprises (100+ employees) or regulated industries needing robust, automated security",
    examples: [
      "Financial services firm automates SOC 2 compliance → audit prep reduced from weeks to hours",
      "Healthcare provider automates security monitoring → threat response time from hours to minutes",
      "Tech company automates cloud operations → 40% reduction in infrastructure costs"
    ]
  }
]

// Recurring Services
const recurringServices = {
  id: "support",
  title: "Ongoing Support & Maintenance",
  price: "$200 - $2,000/month",
  description: "Keep your automations running smoothly with continuous monitoring, optimization, and support.",
  tiers: [
    {
      name: "Starter",
      price: "$200/mo",
      features: ["Monthly check-ins", "Bug fixes & updates", "Email support", "Performance reports"]
    },
    {
      name: "Growth",
      price: "$500/mo",
      features: ["Weekly optimization", "Priority support", "New automation requests", "Usage analytics"]
    },
    {
      name: "Premium",
      price: "$1,000/mo",
      features: ["24/7 monitoring", "Dedicated support", "Unlimited changes", "Strategy sessions"]
    },
    {
      name: "Enterprise",
      price: "$2,000+/mo",
      features: ["Dedicated engineer", "SLA guarantees", "Custom integrations", "On-call support"]
    }
  ]
}

function PageHero() {
  return (
    <section className="page-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">Services</span>
          <h1>AI Automation Solutions</h1>
          <p className="page-hero-subtitle">
            From simple workflow automation to enterprise AI infrastructure. 
            All services delivered remotely to clients nationwide.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceTier({ service, index }) {
  return (
    <motion.section 
      id={service.id} 
      className={`service-tier ${index % 2 === 1 ? 'bg-slate' : ''}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="tier-header">
          <span className="tier-label mono">{service.tier}</span>
          <h2>{service.title}</h2>
          <p className="tier-description">{service.description}</p>
          <div className="tier-meta">
            <span className="tier-price">{service.price}</span>
            <span className="tier-roi">{service.roi}</span>
          </div>
        </div>

        <div className="tier-services grid-2">
          {service.services.map((category, i) => (
            <div key={i} className="tier-category card">
              <h3>{category.name}</h3>
              <ul>
                {category.items.map((item, j) => (
                  <li key={j}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="tier-details">
          <div className="tier-ideal">
            <h4>Ideal For</h4>
            <p>{service.idealFor}</p>
          </div>
          <div className="tier-examples">
            <h4>Real Results</h4>
            <ul>
              {service.examples.map((example, i) => (
                <li key={i}>{example}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="tier-cta">
          <Link to="/contact" className="btn btn-primary">
            Discuss This Solution
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </motion.section>
  )
}

function RecurringSection() {
  return (
    <section id="support" className="recurring-section bg-dark">
      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">Ongoing Services</span>
          <h2>{recurringServices.title}</h2>
          <p className="section-subtitle light">{recurringServices.description}</p>
        </motion.div>

        <div className="recurring-grid grid-4">
          {recurringServices.tiers.map((tier, i) => (
            <motion.div
              key={i}
              className="recurring-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3>{tier.name}</h3>
              <div className="recurring-price mono">{tier.price}</div>
              <ul>
                {tier.features.map((feature, j) => (
                  <li key={j}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NotSureSection() {
  return (
    <section className="not-sure-section">
      <div className="container">
        <motion.div 
          className="not-sure-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Not Sure Which Solution You Need?</h2>
          <p>
            Book a free workflow audit and we'll analyze your current processes, 
            identify automation opportunities, and recommend the right solution for your business.
          </p>
          <Link to="/contact" className="btn btn-secondary btn-lg">
            Get Your Free Audit
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <span className="not-sure-note">
            We work with businesses across the country
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <main>
      <PageHero />
      {serviceTiers.map((service, i) => (
        <ServiceTier key={service.id} service={service} index={i} />
      ))}
      <RecurringSection />
      <NotSureSection />
    </main>
  )
}

