import React, {useEffect, useState} from "react";
import { getStoryIds, getStory } from "../services/hnApi";

function StoriesContainer() {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data))
    }, [])


    return (
      <div>{JSON.stringify(storyIds)}</div>
    )
  }
  
  export default StoriesContainer