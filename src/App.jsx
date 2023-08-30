import React from 'react'
import { useState } from 'react'
import { getStoryIds } from './services/hnApi';

function App() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    setStoryIds("hello")
  }, [])


  return (
    <div>{storyIds}</div>
  )
}

export default App