import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player";

Enzyme.configure({
  adapter: new Adapter(),
});

const testMovie = {
  imgSrc: `bohemian-rhapsody.jpg`,
  videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

it(`Will confirm that video player have two states: play`, () => {
  const {videoSrc, imgSrc} = testMovie;
  let isPlaying = false;
  const moviePlayer = mount(
      <VideoPlayer videoSrc={videoSrc} imgSrc={imgSrc} isPlaying={isPlaying}/>,
      {
        createNodeMock: (element) => {
          if (element.type === `video`) {
            return {
              play: () => {
                isPlaying = true;
              }
            };
          }
          return isPlaying;
        }
      });

  moviePlayer.simulate(`play`, moviePlayer.state.isPlaying = true);
  expect(moviePlayer.state.isPlaying).toBe(true);
});

it(`Will confirm that video player have two states: load`, () => {
  const {videoSrc, imgSrc} = testMovie;
  let isPlaying = true;
  const moviePlayer = mount(
      <VideoPlayer videoSrc={videoSrc} imgSrc={imgSrc} isPlaying={isPlaying}/>,
      {
        createNodeMock: (element) => {
          if (element.type === `video`) {
            return {
              play: () => {
                isPlaying = false;
              }
            };
          }
          return isPlaying;
        }
      });

  moviePlayer.simulate(`load`, moviePlayer.state.isPlaying = false);
  expect(moviePlayer.state.isPlaying).toBe(false);
});
