import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  aboutImage,
  clientLogos,
  edgeItems,
  focusImage,
  focusItems,
  heroPoster,
  heroVideo,
  news,
  stackCards,
  stats,
  waveImage,
} from '../data/site'

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 6h8M7 3l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function FocusArrow() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10.62 5.16 6.08.62a.62.62 0 0 0-.88.88L8.7 5H.7a.62.62 0 0 0 0 1.24h8L5.2 9.74a.62.62 0 1 0 .88.88l4.54-4.54a.62.62 0 0 0 0-.92Z"
      />
    </svg>
  )
}

function TechSlider() {
  const cards = stackCards
  const windowRef = useRef<HTMLDivElement>(null)
  const rewind = useRef(false)
  const [visible, setVisible] = useState(4)
  const [step, setStep] = useState(0)
  const [index, setIndex] = useState(0)
  const [sliding, setSliding] = useState(true)
  const [paused, setPaused] = useState(false)
  const slides = cards.concat(cards.slice(0, visible))

  useEffect(() => {
    const measure = () => {
      const node = windowRef.current
      if (!node) return
      const style = getComputedStyle(node)
      const pad = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
      const width = node.clientWidth - pad
      const count = width >= 1100 ? 4 : width >= 860 ? 3 : width >= 640 ? 2 : 1
      const gap = 18
      const card = (width - gap * (count - 1)) / count
      setVisible(count)
      setStep(card + gap)
      rewind.current = false
      setSliding(false)
      setIndex(0)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    if (paused || step === 0) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = window.setInterval(() => {
      setIndex((value) => (value >= cards.length ? value : value + 1))
    }, 2000)
    return () => window.clearInterval(id)
  }, [paused, step, cards.length])

  useEffect(() => {
    if (sliding) return
    let second = 0
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => {
        if (rewind.current) {
          rewind.current = false
          setIndex(cards.length - 1)
        }
        setSliding(true)
      })
    })
    return () => {
      cancelAnimationFrame(first)
      cancelAnimationFrame(second)
    }
  }, [sliding, cards.length])

  useEffect(() => {
    if (index < cards.length || !sliding) return
    const id = window.setTimeout(() => {
      setSliding(false)
      setIndex(0)
    }, 800)
    return () => window.clearTimeout(id)
  }, [index, sliding, cards.length])

  const next = () => setIndex((value) => (value >= cards.length ? value : value + 1))
  const prev = () => {
    if (index === 0) {
      rewind.current = true
      setSliding(false)
      setIndex(cards.length)
      return
    }
    setIndex((value) => value - 1)
  }

  return (
    <section className="stack">
      <div className="stack-head">
        <div>
          <p className="eyebrow">Our technologies</p>
          <h2>The GoPresight Intelligence Stack</h2>
        </div>
        <div className="stack-arrows">
          <button type="button" aria-label="Previous" onClick={prev}>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M11 4L6 9l5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
          <button type="button" aria-label="Next" onClick={next}>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M7 4l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="stack-window"
        ref={windowRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={`stack-track${sliding ? ' is-sliding' : ''}`}
          style={{ transform: step ? `translateX(-${index * step}px)` : undefined }}
        >
          {slides.map((card, slide) => (
            <article key={`${card.name}-${slide}`} style={step ? { width: step - 18 } : undefined}>
              <img src={card.logo} alt={card.name} />
              <h3>{card.title}</h3>
              <Link to={card.to}>
                <i>
                  <Arrow />
                </i>
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const [focus, setFocus] = useState(0)
  const [edge, setEdge] = useState(0)
  const [shown, setShown] = useState<boolean[]>(() => focusItems.map(() => false))
  const [headIn, setHeadIn] = useState(false)
  const focusRef = useRef<HTMLElement>(null)
  const edgeRef = useRef<HTMLElement>(null)
  const edgePanel = useRef<HTMLDivElement>(null)
  const numbersRef = useRef<HTMLElement>(null)
  const waveRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLAnchorElement>(null)
  const leftDoor = useRef<HTMLSpanElement>(null)
  const rightDoor = useRef<HTMLSpanElement>(null)
  const zoomRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const section = focusRef.current
    const visual = visualRef.current
    if (!section || !visual) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const applyScrub = (progress: number) => {
      if (leftDoor.current) leftDoor.current.style.transform = `translateX(${-progress * 101}%)`
      if (rightDoor.current) rightDoor.current.style.transform = `translateX(${progress * 101}%)`
      if (zoomRef.current) zoomRef.current.style.transform = `scale(${1.2 - progress * 0.2})`
    }
    if (reduce) {
      setShown(focusItems.map(() => true))
      setHeadIn(true)
      applyScrub(1)
      return
    }

    const items = [...section.querySelectorAll<HTMLElement>('.focus-item')]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const index = items.indexOf(entry.target as HTMLElement)
          if (index < 0) return
          setShown((prev) => {
            if (prev[index]) return prev
            const next = prev.slice()
            next[index] = true
            return next
          })
        })
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0 },
    )
    items.forEach((item) => observer.observe(item))

    const head = section.querySelector('.focus-head')
    const headObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeadIn(true)
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0 },
    )
    if (head) headObserver.observe(head)

    let frame = 0
    const update = () => {
      frame = 0
      const top = visual.getBoundingClientRect().top
      const start = window.innerHeight * 0.8
      const end = window.innerHeight * 0.3
      const progress = Math.min(1, Math.max(0, (start - top) / (start - end || 1)))
      applyScrub(progress)
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      observer.disconnect()
      headObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const section = edgeRef.current
    const panel = edgePanel.current
    if (!section || !panel) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    const layout = () => {
      const wide = window.innerWidth >= 1100
      section.style.height = reduce || !wide ? 'auto' : `${panel.offsetHeight + 400}px`
    }
    const update = () => {
      frame = 0
      const wide = window.innerWidth >= 1100
      if (reduce || !wide) {
        panel.style.transform = 'none'
        panel.style.opacity = '1'
        section.classList.add('is-in')
        return
      }
      const top = section.getBoundingClientRect().top
      const start = window.innerHeight * 0.9
      const end = window.innerHeight * 0.2
      const progress = Math.min(1, Math.max(0, (start - top) / (start - end || 1)))
      const eased = 1 - (1 - progress) ** 2
      panel.style.transform = `translateY(${100 * (1 - eased)}px) scale(${0.7 + 0.3 * eased})`
      panel.style.opacity = String(eased)
      section.classList.toggle('is-in', progress > 0.35)
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }
    const onResize = () => {
      layout()
      onScroll()
    }
    layout()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const section = numbersRef.current
    const wave = waveRef.current
    if (!section || !wave) return
    const cards = [...section.querySelectorAll<HTMLElement>('.stat')]
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    const apply = (progress: number) => {
      const travel = Math.min(852, window.innerWidth * 0.6)
      cards.forEach((card, index) => {
        const local = Math.min(1, Math.max(0, (progress - index * 0.075) / 0.42))
        const eased = 1 - (1 - local) ** 3
        card.style.transform = `translateX(${(1 - eased) * travel}px)`
        card.classList.toggle('is-active', local > 0.85)
      })
      const rise = Math.min(1, progress / 0.55) * 16
      wave.style.transform = `translateY(${-rise}px)`
    }
    const update = () => {
      frame = 0
      const wide = window.innerWidth >= 1100
      if (reduce || !wide) {
        apply(1)
        return
      }
      const top = section.getBoundingClientRect().top
      const distance = section.offsetHeight - window.innerHeight
      const progress = distance <= 0 ? 1 : Math.min(1, Math.max(0, -top / distance))
      apply(progress)
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <main>
      <section className="hero">
        <video
          className="hero-media"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <img className="hero-fallback" src={heroPoster} alt="" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <h1>Intelligence. Applied.</h1>
          <p>
            GoPresight delivers intelligence designed to
            <br />
            work in real-world conditions—intelligence
            <br />
            that supports decisions, enables execution,
            <br />
            and delivers measurable outcomes.
          </p>
          <a
            className="btn-story"
            href="https://www.youtube.com/watch?v=MNj1yTiSNpE"
            target="_blank"
            rel="noreferrer"
          >
            See our story
            <span>
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                <path d="M3 1.8v6.4L8.2 5 3 1.8z" fill="#155eef" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      <section className="trusted">
        <p className="eyebrow">Trusted by</p>
        <div className="marquee" aria-label="Client logos">
          <div className="marquee-track">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <img key={`${logo.src}-${index}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-grid">
          <img src={aboutImage} alt="Human impact, applied intelligence, and real world data" />
          <div>
            <p className="eyebrow">We are GoPresight</p>
            <h2>
              A Global Leader in Big
              <br />
              Data and Artificial
              <br />
              Intelligence
            </h2>
            <p className="lead">
              We are powering a smarter, safer, more sustainable
              <br />
              world with Applied Intelligence.
            </p>
            <p>
              Headquartered in Abu Dhabi and operating across four continents, GoPresight is at the
              forefront of innovation, delivering high-impact solutions that improve lives, empower
              communities, and enhance decision-making across industries.
            </p>
            <p>
              By integrating data, analytics, and AI into one seamless force of change we address the
              world’s most complex challenges—from energy efficiency and crisis management to digital
              sovereignty and public safety.
            </p>
            <p>
              Our mission is rooted in driving nations’ progress while staying committed to human
              advancement, sustainability, and people’s wellbeing. We are building a world where data
              fuels innovation, AI inspires change, and intelligence becomes a force for good.
            </p>
          </div>
        </div>
      </section>

      <section className={`focus${headIn ? ' is-headed' : ''}`} ref={focusRef}>
        <div className="focus-head">
          <div>
            <p className="eyebrow">Our focus</p>
            <h2>
              <span className="focus-line">Transforming Industries</span>
              <span className="focus-line">Through Mission-Critical AI</span>
            </h2>
          </div>
          <p className="focus-intro focus-line">
            GoPresight delivers industry-specific AI powered products and solutions that transform
            operations, enhance decision-making, and drive sustainable growth.
          </p>
        </div>
        <div className="focus-grid">
          <div className="tab-card">
            {focusItems.map((item, index) => (
              <div
                key={item.title}
                className={`focus-item${index === focus ? ' is-active' : ''}${shown[index] ? ' is-in' : ''}`}
              >
                <button type="button" onClick={() => setFocus(index)}>
                  <span>{item.title}</span>
                  <i>
                    <FocusArrow />
                  </i>
                </button>
                <p className="focus-tip">{item.text}</p>
              </div>
            ))}
          </div>
          <Link to={focusItems[focus].to} className="focus-visual" ref={visualRef}>
            <span className="focus-zoom" ref={zoomRef}>
              <img key={focus} src={focusImage} alt={focusItems[focus].title} />
            </span>
            <span className="shutter shutter-left" ref={leftDoor} />
            <span className="shutter shutter-right" ref={rightDoor} />
          </Link>
        </div>
      </section>

      <TechSlider />

      <section className="numbers" ref={numbersRef}>
        <div className="numbers-stage">
          <div className="numbers-intro">
            <p className="eyebrow">Our numbers</p>
            <h2>Proof in Performance</h2>
          </div>
          <div className="performance">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className={`stat${stat.glow ? ' is-glow' : ''}`}
                style={{ marginTop: stat.lift, width: stat.width, marginLeft: stat.inset }}
              >
                <div className="stat-card">
                  <b
                    style={{
                      height: stat.line,
                      background: `linear-gradient(270deg, rgba(27, 57, 124, 0), ${stat.ink})`,
                    }}
                  />
                  <strong>
                    {stat.value.split('\n').map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </strong>
                  {stat.label ? <em>{stat.label}</em> : null}
                </div>
              </div>
            ))}
          </div>
          <div className="performance-wave" ref={waveRef} style={{ backgroundImage: `url(${waveImage})` }} />
        </div>
      </section>

      <section className="edge" ref={edgeRef}>
        <div className="edge-panel" ref={edgePanel}>
          <div className="edge-copy">
            <p className="eyebrow">Our edge</p>
            <h2>Why We Lead</h2>
            <p className="lead">
              We take on problems that outscale most organizations—and we build systems that hold
              under pressure. From Abu Dhabi, GoPresight unites applied intelligence, real-time
              communications, and national-grade engineering into one disciplined practice: see
              sooner, structure better, act faster.
            </p>
          </div>
          <ul className="edge-list">
            {edgeItems.map((item, index) => (
              <li key={item.title} className={index === edge ? 'is-active' : ''}>
                <button type="button" onClick={() => setEdge(index)}>
                  <span className="edge-node">
                    <img src={item.icon} alt="" />
                  </span>
                  <span className="edge-text">
                    <strong>{item.title}</strong>
                    <em>{item.text}</em>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="quote">
        <blockquote>
          <p>
            <span>AI</span> is not just about technology. It is about empowering people, protecting
            the planet, and advancing societies. With GoPresight’s Applied Intelligence, the UAE is not
            imagining the future—we’re delivering it today.
          </p>
          <footer>
            <strong>Thomas Pramotedham</strong>
            <span>CEO, GoPresight</span>
          </footer>
        </blockquote>
      </section>

      <section className="news">
        <div className="news-head">
          <p className="eyebrow">Our Latest News</p>
          <h2>What’s New—and What’s Next</h2>
        </div>
        <div className="news-grid">
          {news.map((item) => (
            <article key={item.to}>
              <Link to={item.to} className="news-media">
                <img src={item.image} alt="" />
              </Link>
              <time>{item.date}</time>
              <Link to={item.to}>{item.title}</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
