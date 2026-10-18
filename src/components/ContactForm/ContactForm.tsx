import { useState, type FormEvent } from 'react'
import './ContactForm.css'

interface FormValues {
  name: string
  email: string
  budget: string
  message: string
}

const initialValues: FormValues = { name: '', email: '', budget: '', message: '' }

const budgetOptions = ['<$3k', '$3k - $5k', '$5k - $10k', '>$10k']

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({})
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function validate(current: FormValues) {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {}
    if (!current.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!current.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!emailPattern.test(current.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!current.message.trim()) nextErrors.message = 'Please add a short message.'
    return nextErrors
  }

  function handleChange<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
    setStatus('idle')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const subject = encodeURIComponent(`Project inquiry from ${values.name}`)
    const bodyLines = [
      values.message,
      '',
      `Budget: ${values.budget || 'Not specified'}`,
      `Reply to: ${values.email}`,
    ]
    const body = encodeURIComponent(bodyLines.join('\n'))
    window.location.href = `mailto:khan01970@gmail.com?subject=${subject}&body=${body}`

    setStatus('sent')
    setValues(initialValues)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={values.name}
            onChange={(e) => handleChange('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="contact-form__error" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div className="contact-form__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your@email.com"
            value={values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="contact-form__error" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="budget">Budget</label>
        <select
          id="budget"
          name="budget"
          value={values.budget}
          onChange={(e) => handleChange('budget', e.target.value)}
        >
          <option value="" disabled>
            Select…
          </option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="contact-form__error" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="contact-form__submit">
        Submit
      </button>

      <p className="contact-form__status" role="status" aria-live="polite">
        {status === 'sent'
          ? 'Your email client should now be open with your message ready to send.'
          : 'Submitting opens a pre-filled email in your default mail app — no data is sent to a server.'}
      </p>
    </form>
  )
}
