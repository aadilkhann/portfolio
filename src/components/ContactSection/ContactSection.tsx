import SectionHeading from '../SectionHeading/SectionHeading'
import ContactForm from '../ContactForm/ContactForm'
import './ContactSection.css'

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <SectionHeading eyebrowTop="LET'S WORK" eyebrowBottom="TOGETHER" />
      <ContactForm />
    </section>
  )
}
