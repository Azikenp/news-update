import axios from "axios";

export const baseURL = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseURL}newstories.json`;
export const storyUrl = `${baseURL}item/`;

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data);

    return result;
};

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then((data) => data);
  return result;
};
