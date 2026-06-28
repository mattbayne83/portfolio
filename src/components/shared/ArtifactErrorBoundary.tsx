import { Component, type ReactNode, type ErrorInfo } from 'react'
import { ArrowLeft } from 'lucide-react'
import GoldBorder from './GoldBorder'

interface Props {
  onBack: () => void
  children: ReactNode
}

interface State {
  hasError: boolean
}

/**
 * Catches a failed lazy artifact import (e.g. a stale chunk after a redeploy)
 * so the user gets a recovery path instead of an infinite loading spinner.
 */
export default class ArtifactErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Artifact failed to load:', error, info)
  }

  handleBack = () => {
    this.setState({ hasError: false })
    this.props.onBack()
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-6">
        <GoldBorder className="w-full max-w-md">
          <div className="px-8 py-10 text-center">
            <h2 className="font-display text-2xl font-bold text-text-high mb-2">
              This quest didn&rsquo;t load
            </h2>
            <p className="font-serif text-text-body leading-relaxed mb-6">
              Something went wrong fetching this piece. Head back to the board and
              try another.
            </p>
            <button
              onClick={this.handleBack}
              className="inline-flex items-center gap-2 font-display text-sm font-semibold tracking-wide px-6 py-3 rounded-full text-bg cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-none"
              style={{
                background: 'linear-gradient(135deg, #DEB668 0%, #C8973E 50%, #8B6914 100%)',
                boxShadow: '0 2px 8px rgba(200,151,62,0.25)',
              }}
            >
              <ArrowLeft size={16} />
              Back to the Quest Board
            </button>
          </div>
        </GoldBorder>
      </div>
    )
  }
}
