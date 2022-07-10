import React from "react";
import CustomHoverGif from "./CustomHoverGif";

import classes from "./App.module.css";

import ninja from "./assets/audio/ninja.wav";
import flex from "./assets/audio/flex.wav";
import ninjaGif from "./assets/img/big-ninja.gif";
import ninjaWord from "./assets/img/ninja.gif";
import flexGif from "./assets/img/big-flex.gif";
import flexWord from "./assets/img/flex.gif";

const App = () => {
  return (
    <div className={classes.container}>
      <CustomHoverGif audio={ninja} imgs={[ninjaGif, ninjaWord]} />
      <CustomHoverGif audio={flex} imgs={[flexGif, flexWord]} />
    </div>
  );
};

export default App;
