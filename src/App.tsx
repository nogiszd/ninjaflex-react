import React from "react";
import CustomHoverGif from "./CustomHoverGif";

import classes from "./App.module.css";

import ninja from "./audio/ninja.wav";
import flex from "./audio/flex.wav";
import ninjaGif from "./img/big-ninja.gif";
import ninjaWord from "./img/ninja.gif";
import flexGif from "./img/big-flex.gif";
import flexWord from "./img/flex.gif";

const App = () => {
  return (
    <div className={classes.container}>
      <CustomHoverGif audio={ninja} imgs={[ninjaGif, ninjaWord]} />
      <CustomHoverGif audio={flex} imgs={[flexGif, flexWord]} />
    </div>
  );
};

export default App;
