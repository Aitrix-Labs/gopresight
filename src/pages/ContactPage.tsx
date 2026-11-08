import { FormEvent, useEffect, useState } from 'react'
import FormSelect from '../components/FormSelect'

const banner = 'https://www.presight.ai/hubfs/Presight_2026/Images/invest-presight-banner-1-1-1.png'
const photo = 'https://www.presight.ai/hubfs/Presight_2026/Images/Rectangle%2040180%20%2843%29.jpg'
const map =
  'https://maps.google.com/maps?q=Presight+AI+LLC,+Al+Maryah+Island,+Abu+Dhabi&z=16&output=embed'

const reasons = [
  'Investor Relations',
  'Product Demo',
  'PR and Media',
  'Partnership',
  'AI Marketplace',
]

const dials = [
  ['United Arab Emirates', '+971'],
  ['United States', '+1'],
  ['United Kingdom', '+44'],
  ['India', '+91'],
  ['Nepal', '+977'],
  ['Saudi Arabia', '+966'],
  ['Singapore', '+65'],
  ['Germany', '+49'],
  ['France', '+33'],
]

const countries = [
  'United Arab Emirates',
  'United States',
  'United Kingdom',
  'India',
  'Nepal',
  'Saudi Arabia',
  'Qatar',
  'Kuwait',
  'Bahrain',
  'Oman',
  'Egypt',
  'Singapore',
  'China',
  'Japan',
  'South Korea',
  'Australia',
  'Canada',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Netherlands',
  'Switzerland',
  'Sweden',
  'Ireland',
  'Brazil',
  'South Africa',
  'Nigeria',
  'Kenya',
  'Jordan',
  'Lebanon',
  'Pakistan',
  'Bangladesh',
  'Malaysia',
  'Indonesia',
  'Philippines',
  'Turkey',
  'Greece',
  'Poland',
  'Austria',
  'Belgium',
  'Norway',
  'Denmark',
  'Finland',
  'New Zealand',
  'Mexico',
  'Argentina',
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const previous = document.title
    document.title = 'Contact Us | gopresight.com'
    return () => {
      document.title = previous
    }
  }, [])

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="touch">
      <section className="touch-hero" style={{ backgroundImage: `url(${banner})` }}>
        <h1>How can we help you?</h1>
      </section>

      <section className="touch-split">
        <div className="touch-form-col">
          <p className="touch-kicker">Contact Us</p>
          <h2>Fill Out the Form</h2>
          {sent ? (
            <p className="touch-thanks">Thank you. A GoPresight specialist will follow up.</p>
          ) : (
            <form className="touch-form" onSubmit={submit}>
              <label>
                First Name*
                <input name="firstName" placeholder="First Name" required />
              </label>
              <label>
                Last Name*
                <input name="lastName" placeholder="Last Name" required />
              </label>
              <label>
                Company*
                <input name="company" placeholder="Company" required />
              </label>
              <label>
                Email Address*
                <input name="email" type="email" placeholder="Email Address" required />
              </label>
              <label className="span-2">
                Phone Number*
                <span className="touch-phone">
                  <select name="dial" aria-label="Country code" defaultValue="+971">
                    {dials.map(([name, code]) => (
                      <option key={code} value={code}>
                        {name} ({code})
                      </option>
                    ))}
                  </select>
                  <input name="phone" type="tel" placeholder="Phone number" required />
                </span>
              </label>
              <FormSelect
                className="span-2"
                name="country"
                label="Country*"
                options={countries}
                required
              />
              <FormSelect
                className="span-2"
                name="reason"
                label="Reason For Contact*"
                options={reasons}
                required
              />
              <label className="span-2">
                Message
                <textarea name="message" rows={4} placeholder="Leave us a message..." />
              </label>
              <button className="span-2 touch-submit" type="submit">
                Submit
                <span className="touch-submit-icon" aria-hidden="true">
                  <svg width="12" height="11" viewBox="0 0 12 11" fill="none">
                    <path
                      fill="#fff"
                      d="M11.25 5.5 5.76.17a.72.72 0 0 0-.98 1.05l3.9 3.4H.92a.7.7 0 0 0 0 1.4h7.76l-3.9 3.4a.72.72 0 0 0 .98 1.05l5.49-5.25a.72.72 0 0 0 0-1.12Z"
                    />
                  </svg>
                </span>
              </button>
            </form>
          )}
        </div>

        <div className="touch-place">
          <div className="touch-photo" style={{ backgroundImage: `url(${photo})` }} />
          <p className="touch-address">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
              />
            </svg>
            Floor 17, Al Maqam Tower, ADGM Square, Al Maryah Island, Abu Dhabi, UAE
          </p>
          <iframe
            className="touch-map"
            title="GoPresight office on Al Maryah Island"
            src={map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  )
}
