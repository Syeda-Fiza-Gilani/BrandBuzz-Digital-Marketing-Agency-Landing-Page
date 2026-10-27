import { useEffect, useState } from 'react'
import {
  Heart, Search, Megaphone, TrendingUp, LayoutGrid, ChevronDown, ChevronLeft, ChevronRight,
  Star, Menu, X, Facebook, Instagram, Twitter, CheckCircle2,
} from 'lucide-react'

const NAV = [['Home', 'home'], ['About us', 'about'], ['Services', 'services'], ['Contact us', 'contact'], ['Blog', 'clients']]

const SERVICES = [
  { icon: Search, title: 'Seo/Sem', color: '#f5b800', text: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s." },
  { icon: Megaphone, title: 'Marketing', color: '#19d460', text: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s." },
  { icon: TrendingUp, title: 'Viral Campaign', color: '#8b5cf6', text: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s." },
  { icon: LayoutGrid, title: 'Others', color: '#f04e0f', text: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s." },
]

const STEPS = [
  ['Contact us', 'Contact us to boost your brand visibility'],
  ['Consult', 'Always available to answer your questions'],
  ['Place order', 'Buy our package today to proceed'],
  ['Payment', 'We receive payments in all types of banking'],
]

const REVIEWS = [
  { name: 'Joseth Isaan', role: 'Executive Jake', rating: 5, color: '#3b82f6' },
  { name: 'Hashley juan', role: 'Executive Jake', rating: 3, color: '#f97316' },
  { name: 'Yuan well', role: 'Executive Jake', rating: 5, color: '#10b981' },
  { name: 'Mira Kahn', role: 'Marketing Lead', rating: 4, color: '#8b5cf6' },
  { name: 'Daniel Ortiz', role: 'Founder', rating: 5, color: '#ef4444' },
].map((r) => ({ ...r, text: "Lorem ipsum has been the industry's standard dummy text ever since the 1500s. Our campaigns doubled their reach within a quarter." }))

const FOOTER = {
  Company: ['About', 'Contact', 'Careers', 'Team'],
  Designs: ['Design contests', '1-to-1 Projects', 'Find a designer', 'Discover inspiration', 'Pricing'],
  Resources: ['Become a designer', 'Blog', 'Design without borders', '99awards', 'Affiliates'],
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { threshold: 0.15 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Logo() {
  return <a href="#home" className="logo"><Heart size={20} fill="#f04e0f" stroke="#f04e0f" />BrandBuzz</a>
}

function Modal({ title, onClose }) {
  const [done, setDone] = useState(false)
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [onClose])
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="x" onClick={onClose} aria-label="Close"><X size={18} /></button>
        {done ? (
          <div className="done"><CheckCircle2 size={44} color="#19b45a" /><h3>Thank you!</h3><p>We&rsquo;ll get back to you within 24 hours.</p>
            <button className="btn" onClick={onClose}>Close</button></div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setDone(true) }}>
            <h3>{title}</h3><p>Tell us a little about you and we&rsquo;ll reach out.</p>
            <input required placeholder="Full name" />
            <input required type="email" placeholder="Email address" />
            <textarea rows="3" placeholder="How can we help?" />
            <button className="btn" type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [modal, setModal] = useState(null)
  const [step, setStep] = useState(0)
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  useReveal()

  useEffect(() => {
    const on = () => {
      let cur = 'home'
      NAV.forEach(([, id]) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 140) cur = id })
      setActive(cur)
    }
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIdx((i) => (i + 1) % REVIEWS.length), 5000)
    return () => clearInterval(t)
  }, [paused])

  const shown = [0, 1, 2].map((o) => REVIEWS[(idx + o) % REVIEWS.length])
  const go = (d) => setIdx((i) => (i + d + REVIEWS.length) % REVIEWS.length)

  return (
    <>
      <header className="nav">
        <div className="wrap nav-in">
          <Logo />
          <nav className={open ? 'open' : ''}>
            {NAV.map(([label, id]) => (
              <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </nav>
          <button className="btn sm" onClick={() => setModal('Sign Up')}>Sign Up</button>
          <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section id="home" className="hero wrap">
        <i className="dot" style={{ top: 40, left: 20, width: 9 }} /><i className="dot" style={{ top: 70, left: 46, width: 6 }} />
        <div className="hero-text reveal">
          <h1>We create <b>solutions</b> for your business</h1>
          <p>Our team keeps a keen eye on emerging trends and technologies to ensure your marketing campaigns remain cutting-edge.</p>
          <button className="btn" onClick={() => setModal('Get Started')}>Get Started</button>
          <a href="#services" className="explore"><span><ChevronDown size={14} /></span>Explore more</a>
        </div>
        <img className="hero-img float" src="/images/hero.webp" alt="Two teammates brainstorming with laptops" />
      </section>

      <section id="services" className="services wrap">
        <h2 className="reveal">We Provide The Best <b>Services</b></h2>
        <p className="sub reveal">Let us unleash the full potential of your business<br />with our data-driven strategies</p>
        <div className="cards">
          {SERVICES.map(({ icon: Icon, title, color, text }, i) => (
            <article className="card reveal" style={{ transitionDelay: `${i * 80}ms` }} key={title}>
              <span className="chip" style={{ background: color }}><Icon size={20} color="#fff" /></span>
              <h3>{title}</h3><p>{text}</p><a href="#contact">Read More</a>
            </article>
          ))}
        </div>
      </section>

      <section className="solutions">
        <div className="wrap sol-in">
          <img className="reveal" src="/images/solutions.webp" alt="Person working on a laptop in an orange armchair" />
          <div className="reveal">
            <h2>Simple <b>Solutions!</b></h2>
            <p className="lead">We understand that no two businesses are alike. That&rsquo;s why we take the time to understand</p>
            <ol>
              {STEPS.map(([t, d], i) => (
                <li key={t} className={step === i ? 'on' : ''} onMouseEnter={() => setStep(i)} onClick={() => setStep(i)}>
                  <span>{i + 1}</span><div><b>{t}</b><small>{d}</small></div>
                </li>
              ))}
            </ol>
            <div className="btns">
              <button className="btn sm" onClick={() => setModal('Get Started')}>Get Started</button>
              <a href="#about" className="btn sm ghost">Read more</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="agency wrap">
        <div className="reveal">
          <h2>Our <b>Agency</b></h2>
          <p>We believe in the power of data. Our analytics-driven approach allows us to make informed decisions and optimize your marketing efforts for maximum ROI. Let&rsquo;s turn your data into actionable insights. Tailored Solutions for Your Business.</p>
          <a href="#contact" className="btn sm">Read more</a>
        </div>
        <div className="agency-img reveal">
          <img className="float" src="/images/agency.webp" alt="Analyst reviewing marketing dashboards" />
          <i className="dot" style={{ bottom: 20, right: 10, width: 14 }} />
        </div>
      </section>

      <section id="clients" className="clients">
        <h2 className="reveal">What <b>Clients</b> Say!</h2>
        <p className="sub">See How Our Digital Marketing Agency Helped<br />Clients Achieve Their Goals</p>
        <div className="carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <button className="arrow" onClick={() => go(-1)} aria-label="Previous"><ChevronLeft size={14} /></button>
          <div className="track">
            {shown.map((r, i) => (
              <article key={r.name} className={`review ${i === 1 ? 'mid' : ''}`}>
                <header>
                  <span className="av" style={{ background: r.color }}>{r.name[0]}</span>
                  <div><b>{r.name}</b><small>{r.role}</small></div>
                </header>
                <p>{r.text}</p>
                <div className="stars" aria-label={`${r.rating} out of 5`}>
                  {[1, 2, 3, 4, 5].map((n) => <Star key={n} size={11} fill={n <= r.rating ? '#f5a000' : 'none'} stroke={n <= r.rating ? '#f5a000' : '#c9c9c9'} />)}
                </div>
              </article>
            ))}
          </div>
          <button className="arrow" onClick={() => go(1)} aria-label="Next"><ChevronRight size={14} /></button>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="wrap">
          <div className="cta reveal"><h3>Ready to get started?</h3><button onClick={() => setModal('Contact Us')}>Contact Us</button></div>
          <div className="foot-grid">
            <div><Logo />
              <div className="socials">
                <a href="#" aria-label="Facebook" style={{ background: '#1877f2' }}><Facebook size={12} fill="#fff" /></a>
                <a href="#" aria-label="Instagram" style={{ background: 'linear-gradient(45deg,#f9a825,#e1306c,#833ab4)' }}><Instagram size={12} /></a>
                <a href="#" aria-label="Twitter" style={{ background: '#1da1f2' }}><Twitter size={12} fill="#fff" /></a>
              </div>
            </div>
            {Object.entries(FOOTER).map(([h, links]) => (
              <div key={h}><h4>{h}</h4>{links.map((l) => <a key={l} href="#home">{l}</a>)}</div>
            ))}
          </div>
        </div>
        <div className="bottom"><span>All rights reserved 2022</span></div>
      </footer>

      {modal && <Modal title={modal} onClose={() => setModal(null)} />}
    </>
  )
}
