import type { ComponentType, SVGProps } from 'react'
import { Mail, FileText } from 'lucide-react'

/**
 * The "Maker's Mark" — a single signature seal closing the page.
 * Not a nav bar: one primary action (contact) plus a few quiet links
 * so intent has somewhere to go without becoming a link hub.
 *
 * To finish the footer, fill in the two empty URLs below. Links with an
 * empty `href` are automatically hidden, so nothing ever 404s.
 */
const CONTACT_EMAIL = 'mattbayne@gmail.com'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

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
  { label: 'LinkedIn', href: '', Icon: LinkedInMark }, // ← add your LinkedIn profile URL
  { label: 'GitHub', href: 'https://github.com/mattbayne83', Icon: GitHubMark },
  { label: 'Résumé', href: '', Icon: FileText }, // ← add a path to your résumé PDF (e.g. /matt-bayne-resume.pdf)
]

export default function MakersMark() {
  const links = LINKS.filter((l) => l.href)

  return (
    <footer className="px-6 pb-16 pt-4">
      <div className="max-w-5xl mx-auto">
        {/* Sealing rule */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-10" />

        <div className="flex flex-col items-center text-center gap-6">
          <p className="font-serif italic text-base text-text-on-dark-muted max-w-md">
            Have a problem worth solving? I&rsquo;d like to hear about it.
          </p>

          {/* Primary action — the only solid-gold button on the page */}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 font-display text-sm font-semibold tracking-wide px-6 py-3 rounded-full text-bg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
            style={{
              background: 'linear-gradient(135deg, #DEB668 0%, #C8973E 50%, #8B6914 100%)',
              boxShadow: '0 2px 8px rgba(200,151,62,0.25)',
            }}
          >
            <Mail size={16} strokeWidth={2.25} />
            Get in touch
          </a>

          {/* Quiet secondary links */}
          {links.length > 0 && (
            <nav className="flex items-center gap-6">
              {links.map(({ label, href, Icon }) => {
                const external = href.startsWith('http')
                return (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group inline-flex items-center gap-1.5 text-text-on-dark-muted hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none rounded"
                  >
                    <Icon size={16} className="opacity-80 group-hover:opacity-100" />
                    <span className="font-display text-xs font-medium tracking-wide">{label}</span>
                  </a>
                )
              })}
            </nav>
          )}

          {/* Colophon */}
          <p className="font-mono text-[10px] tracking-wider uppercase text-text-on-dark-muted/50 mt-2">
            Designed &amp; built by Matt Bayne
          </p>
        </div>
      </div>
    </footer>
  )
}
