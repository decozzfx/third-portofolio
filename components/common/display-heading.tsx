import { Fragment } from 'react'
import styles from './display-heading.module.css'

function Underline() {
  return (
    <svg className={styles.underline} viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M3 9 Q 45 2 95 7 T 197 9"
        stroke="currentColor"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={100}
      />
    </svg>
  )
}

/** Emphasis is marked with *asterisks*: "We build *digital products*." */
export function DisplayHeading({
  text,
  as: Tag = 'h2',
  className = '',
  style,
}: {
  text: string
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  style?: React.CSSProperties
}) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean)
  return (
    <Tag className={`${styles.h} ${className}`} style={style}>
      {parts.map((p, i) =>
        p.startsWith('*') && p.endsWith('*') ? (
          <em key={i} className={styles.em}>
            {p.slice(1, -1)}
            <Underline />
          </em>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </Tag>
  )
}
