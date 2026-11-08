import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import InnerPage from './pages/InnerPage'

export default function App() {
  return (
    <BrowserRouter basename="/gopresight">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="get-in-touch" element={<ContactPage />} />
          <Route path="*" element={<InnerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
