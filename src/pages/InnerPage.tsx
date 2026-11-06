import { Link, useLocation } from 'react-router-dom'
import { heroPoster, news, pages } from '../data/site'

export default function InnerPage() {
  const { pathname } = useLocation()
  const page = pages[pathname]
  const isNewsIndex = pathname === '/news'

  if (!page) {
    return (
      <main className="inner">
        <section className="page-hero" style={{ backgroundImage: `url(${heroPoster})` }}>
          <p className="eyebrow">GoPresight</p>
          <h1>Page not found</h1>
        </section>
        <section className="page-body">
          <Link to="/">Back to home</Link>
        </section>
      </main>
    )
  }

  return (
    <main className={isNewsIndex ? 'inner is-news' : 'inner'}>
      <section className="page-hero" style={{ backgroundImage: `url(${heroPoster})` }}>
        {page.kicker ? <p className="eyebrow">{page.kicker}</p> : null}
        <h1>{page.title}</h1>
      </section>
      <section className="page-body">
        {page.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {isNewsIndex ? (
          <div className="news-grid inner-news">
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
        ) : null}
      </section>
    </main>
  )
}
