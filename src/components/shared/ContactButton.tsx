import type { ReactNode } from 'react'

export const CONTACT_EMAIL = 'mattbayne@gmail.com'

interface ContactButtonProps {
  label: string
  /** Optional prefilled email subject line */
  subject?: string
  /** Optional leading icon (e.g. a Mail glyph) */
  icon?: ReactNode
  /** Visual weight — 'md' is the page's hero CTA; 'sm' fits compact rows like the footer bar. */
  size?: 'sm' | 'md'
}

/** The page's single primary action — solid burnished gold, used sparingly. */
export default function ContactButton({ label, subject, icon, size = 'md' }: ContactButtonProps) {
  const href = `mailto:${CONTACT_EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`
  const sizing = size === 'sm' ? 'text-xs gap-1.5 px-4 py-2' : 'text-sm gap-2 px-6 py-3'

  return (
    <a
      href={href}
      className={`inline-flex items-center font-display font-semibold tracking-wide rounded-full text-bg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none ${sizing}`}
      style={{
        background: 'var(--gradient-gold-fill)',
        boxShadow: '0 2px 8px rgba(200,151,62,0.25)',
      }}
    >
      {icon}
      {label}
    </a>
  )
}
