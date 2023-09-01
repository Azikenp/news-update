import axios from "axios";
export const baseURL = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseURL}newstories.json`;
export const storyUrl = `${baseURL}item/`;


export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({data}) => data);

  return result;
};
