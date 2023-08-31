import React from 'react'
import { useState, useEffect } from 'react'
import { getStoryIds } from './services/hnApi';

function App() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    console.log(getStoryIds())
  }, [])


  return (
    <div>{storyIds}</div>
  )
}

export default App