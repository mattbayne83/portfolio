import { useEffect, useRef, useState } from 'react'
import type { ComponentType, SVGProps } from 'react'
import { Mail, FileText } from 'lucide-react'
import ContactButton from '../shared/ContactButton'

/**
 * The "Maker's Mark" — a flat signature bar pinned to the bottom edge.
 * One primary action (contact) plus a few quiet links, kept to a single row.
 *
 * Visible on landing, it slides away as you read down and returns the moment
 * you scroll back up or reach the foot of the page — present when wanted,
 * out of the way otherwise.
 *
 * Links with an empty `href` are automatically hidden, so nothing ever 404s.
 */
type IconProps = SVGProps<SVGSVGElement> & { size?: number }

/** Show on landing, hide on scroll-down, reveal on scroll-up or at page bottom. */
function useAutoHide() {
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY
    let ticking = false
    const update = () => {
      const y = window.scrollY
      const atBottom =
        window.innerHeight + y >= document.documentElement.scrollHeight - 8
      const delta = y - lastY.current
      if (atBottom) setVisible(true)
      else if (delta < -4) setVisible(true) // scrolling up
      else if (delta > 4) setVisible(false) // scrolling down
      lastY.current = y
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return visible
}

// Brand marks are inline SVG — lucide deprecated its brand icons (trademark).
function LinkedInMark({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function GitHubMark({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
    </svg>
  )
}

const LINKS: { label: string; href: string; Icon: ComponentType<IconProps> }[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matt-bayne/', Icon: LinkedInMark },
  { label: 'GitHub', href: 'https://github.com/mattbayne83', Icon: GitHubMark },
  { label: 'Résumé', href: '/Matt_Bayne_Resume.pdf', Icon: FileText },
]

export default function MakersMark() {
  const links = LINKS.filter((l) => l.href)
  const visible = useAutoHide()

  return (
    <footer
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Sealing rule — the gold hairline that crowns the bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div
        className="border-t border-primary/10"
        style={{
          backgroundColor: 'var(--color-bg)',
          boxShadow: '0 -8px 24px rgba(26, 20, 16, 0.45)',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 py-3.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {/* Invitation + primary action */}
          <p className="hidden sm:block font-serif italic text-sm text-text-on-dark-muted">
            Have a problem worth solving?
          </p>
          <ContactButton
            label="Get in touch"
            size="sm"
            icon={<Mail size={14} strokeWidth={2.25} />}
          />

          {/* Hairline separator between the ask and the quiet links */}
          {links.length > 0 && (
            <span aria-hidden className="hidden sm:block h-5 w-px bg-primary/20" />
          )}

          {/* Quiet secondary links */}
          {links.length > 0 && (
            <nav className="flex items-center gap-5">
              {links.map(({ label, href, Icon }) => {
                // Open external profiles and the résumé PDF in a new tab
                const newTab = href.startsWith('http') || href.endsWith('.pdf')
                return (
                  <a
                    key={label}
                    href={href}
                    {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group inline-flex items-center gap-1.5 py-1 text-text-on-dark-muted hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none rounded"
                  >
                    <Icon size={15} className="opacity-80 group-hover:opacity-100" />
                    <span className="font-display text-xs font-medium tracking-wide">
                      {label}
                    </span>
                  </a>
                )
              })}
            </nav>
          )}
        </div>
      </div>
    </footer>
  )
}
