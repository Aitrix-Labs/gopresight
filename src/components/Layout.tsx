import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  const home = useLocation().pathname === '/'
  return (
    <div className={home ? 'is-home' : undefined}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
