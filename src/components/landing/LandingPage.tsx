import CharacterSheet from './CharacterSheet'
import QuestBoard from './QuestBoard'

export default function LandingPage() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundColor: '#1A1410',
        backgroundImage: [
          // Subtle wood grain
          'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 4px)',
          // Radial vignette
          'radial-gradient(ellipse at 50% 30%, rgba(42,32,24,0.4) 0%, transparent 70%)',
        ].join(', '),
      }}
    >
      <CharacterSheet />
      <QuestBoard />
    </div>
  )
}
