import './App.css'
import usePitchRecognition from './hooks/usePitchRecognition'

function App() {
  const pitch = usePitchRecognition();

  return (
    <>
      <div>Pitch: {pitch}</div>
    </>
  )
}

export default App
