import React, {useState, useEffect} from 'react';
import { getStoryIds } from './services/hnApi';

function App() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(storyId => setStoryIds(storyId))
  }, [])

  return (
    <p>{JSON.stringify(storyIds)}</p>
  )
}

export default App