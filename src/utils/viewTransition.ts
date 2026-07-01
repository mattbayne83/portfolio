import { flushSync } from 'react-dom'

/**
 * Run a navigation state change inside a View Transition so shared elements
 * (view-transition-name) morph between views. Falls back to a plain update
 * when the API is unsupported or the user prefers reduced motion.
 *
 * `commit` is flushed synchronously so the new view is in the DOM when the
 * browser snapshots it; `afterCommit` runs against the committed DOM (scroll
 * positioning) and is still inside the snapshot window.
 */
export function withViewTransition(commit: () => void, afterCommit?: () => void) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!document.startViewTransition || reduceMotion) {
    commit()
    afterCommit?.()
    return
  }
  document.startViewTransition(() => {
    flushSync(commit)
    afterCommit?.()
  })
}
