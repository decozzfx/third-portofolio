import { SectionEyebrow } from '@/components/common/section-eyebrow'
import { DisplayHeading } from '@/components/common/display-heading'
import styles from './contact-cta.module.css'

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/decozzfx' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/decozzfx' },
  { label: 'Email', href: 'mailto:decozzfx@gmail.com' },
]

export function ContactCTA() {
  return (
    <section className={styles.cta}>
      <SectionEyebrow num="06" label="Contact" />
      <DisplayHeading as="h2" text="Let's *talk.*" className={styles.title} />
      <div className={styles.links}>
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {l.label} ↗
          </a>
        ))}
      </div>
    </section>
  )
}
