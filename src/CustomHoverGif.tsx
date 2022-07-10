import React, { useState } from "react";

type Props = {
  audio: string;
  imgs: string[];
};

const CustomHoverGif = (props: Props) => {
  const { audio, imgs } = props;
  const [currentImg, setCurrentImg] = useState<string>(imgs[0]);

  const handler = (flag: number) => {
    switch (flag) {
      case 1: {
        setCurrentImg((prevState) => imgs.filter((x) => x !== prevState)[0]);
        new Audio(audio).play();
        break;
      }
      case 2: {
        setCurrentImg((prevState) => imgs.filter((x) => x !== prevState)[0]);
        break;
      }
      default:
        break;
    }
  };

  return (
    <div onMouseEnter={() => handler(1)} onMouseLeave={() => handler(2)}>
      <img src={currentImg} />
    </div>
  );
};

export default CustomHoverGif;
