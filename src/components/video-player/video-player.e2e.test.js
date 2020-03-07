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

it(`Should video play`, () => {
  const {videoSrc, imgSrc} = testMovie;
  const moviePlayer = mount(<VideoPlayer videoSrc={videoSrc} imgSrc={imgSrc}/>);
  expect(moviePlayer.state(`isPlaying`)).toBe(true);

  const componentWillUnmount = jest.spyOn(moviePlayer.instance(), `componentWillUnmount`);
  moviePlayer.unmount();
  expect(componentWillUnmount).toHaveBeenCalled();
});
