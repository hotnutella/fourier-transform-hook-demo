import './App.css'
import { usePitchRecognition } from 'react-use-pitch-recognition'

function App() {
  const pitch = usePitchRecognition();

  return (
    <>
      <div>Frequency: {pitch.frequency}</div>
      <div>Note: {pitch.note}</div>
    </>
  )
}

export default App
