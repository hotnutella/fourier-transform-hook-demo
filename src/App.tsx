import './App.css'
import { usePitchRecognition } from 'react-use-pitch-recognition'
import BallVisualizer from './components/BallVisualizer';

function App() {
  const pitch = usePitchRecognition();

  return (
    <div className="two-column">
      <div>
        <div className="data">
          <div>Frequency (Hz): {pitch.frequency}</div>
          <div>Note: {pitch.note}</div>
        </div>
      </div>
      <BallVisualizer frequency={pitch.frequency} />
    </div>
  )
}

export default App
