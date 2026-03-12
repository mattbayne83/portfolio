import SlideViewer from '../../viewers/SlideViewer'
import {
  TitleSlide,
  MacroViewSlide,
  YearSlide,
  DynamicsSlide,
  OpportunitiesSlide,
  DerivativeSlide,
  ImplicationsSlide,
  ConclusionSlide,
} from './slides'

const slides = [
  <TitleSlide />,
  <MacroViewSlide />,
  <YearSlide />,
  <DynamicsSlide />,
  <OpportunitiesSlide />,
  <DerivativeSlide />,
  <ImplicationsSlide />,
  <ConclusionSlide />,
]

export default function PipelineRiskArtifact() {
  return <SlideViewer slides={slides} title="Pipeline Risk & Integrity" />
}
