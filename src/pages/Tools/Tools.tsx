import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ToolCard from '../../components/ToolCard/ToolCard'
import ContactSection from '../../components/ContactSection/ContactSection'
import { tools } from '../../data/tools'

export default function Tools() {
  return (
    <>
      <section aria-labelledby="tools-heading">
        <SectionHeading eyebrowTop="PREMIUM" eyebrowBottom="TOOLS" as="h1" />
        <div className="tools-grid">
          {tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  )
}
