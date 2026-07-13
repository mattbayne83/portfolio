import GoldBorder from '../shared/GoldBorder'

/**
 * Ultra-short colophon inside the character sheet — why the gaming-table
 * theme, where Matt builds from, and an open invitation. Text-only for v1.
 */
export default function MakersNote() {
  return (
    <aside aria-label="Maker's note" className="max-w-lg mx-auto sm:mx-0">
      <GoldBorder thickness={1.5}>
        <div className="px-4 py-3 sm:px-5 sm:py-3.5">
          <p className="font-display text-[11px] font-bold uppercase tracking-widest text-primary mb-1.5">
            Maker's Note
          </p>
          <p className="font-serif text-sm text-text-body leading-relaxed">
            Why a gaming table? The best work feels like a session among people
            who take craft seriously - not a pitch deck in costume. Built in
            Tulsa. Open to the next hard problem.
          </p>
        </div>
      </GoldBorder>
    </aside>
  )
}
