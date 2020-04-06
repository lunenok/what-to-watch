import * as React from "react";
import * as renderer from "react-test-renderer";
import withVideo from "./with-video.jsx";

const mockMovie = {
  name: `Seven Years in Tibet`,
  posterImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Seven_Years_in_Tibet.jpg`,
  previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/seven-years-in-tibet.jpg`,
  backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Seven_Years_in_Tibet.jpg`,
  backgroundColor: `#C6CADF`,
  description: `True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China's takeover of Tibet.`,
  rating: 3.6,
  scoresCount: 112612,
  director: `Jean-Jacques Annaud`,
  starring: [`Brad Pitt`, `David Thewlis`, `BD Wong`],
  runTime: 136,
  genre: `Adventure`,
  released: 1997,
  id: 1,
  isFavorite: false,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const MockComponent = () => <div props={mockMovie}/>;
const WrappedMockComponent = withVideo(MockComponent);
jest.mock(`../../components/video-player/video-player`);

it(`withVideo is rendered correctly`, () => {
  const tree = renderer.create((
    <WrappedMockComponent
      video={mockMovie.previewVideoLink}
      previewVideoLink={mockMovie.previewVideoLink}
      previewImage={mockMovie.previewImage}
      isPlaying={true}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
