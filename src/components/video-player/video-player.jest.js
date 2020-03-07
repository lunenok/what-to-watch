import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const testMovie = {
  id: 1,
  title: `Bohemian Rhapsody`,
  genre: `Drama`,
  year: 2019,
  imgSrc: `war-of-the-worlds.jpg`,
  videoSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

it(`Should video player render correctrly`, () => {
  const {videoSrc, imgSrc} = testMovie;
  const tree = renderer
    .create(
        <VideoPlayer
          videoSrc={videoSrc}
          imgSrc={imgSrc}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
