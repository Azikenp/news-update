import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnApi";
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from "../styles/StoryStyles";

function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>

      <StoryMeta>
        <span className="story__by" data-testid='story-by'>
          <StoryMetaElement color="#000">By: </StoryMetaElement> {story.by}
        </span>
      </StoryMeta>

      Posted: <p>{story.time}</p>
    </StoryWrapper>
  ) : null;
}

export default Story;
