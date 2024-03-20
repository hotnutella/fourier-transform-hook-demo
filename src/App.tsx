import './App.css'
import { usePitchRecognition } from 'react-use-pitch-recognition'

function App() {
  const pitch = usePitchRecognition();

  return (
    <>
      <div>Pitch: {pitch}</div>
    </>
  )
}

export default App
