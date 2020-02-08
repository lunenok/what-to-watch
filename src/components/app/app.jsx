import React from "react";
import MainPage from "../main-screen.jsx";

const App = (props) => {
  const {film} = props;
  return (
    <MainPage film={film} />
  );
}

export default App;
