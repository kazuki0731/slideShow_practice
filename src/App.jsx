import Image0 from "./img/pic00.png";
import Image1 from "./img/pic01.png";
import Image2 from "./img/pic02.png";
import Image3 from "./img/pic03.png";
import Image4 from "./img/pic04.png";
import Image5 from "./img/pic05.png";
import Image6 from "./img/pic06.png";
import Image7 from "./img/pic07.png";

import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

import { MainImage } from "./components/MainImage";
import { ShowButtons } from "./components/ShowButtons";
import { Thumbnails } from "./components/Thumbnails";

const useStyles = makeStyles({
  root: {
    width: "60px",
    cursor: "pointer",
    opacity: "0.4",
    "&:hover": {
      opacity: "1",
    },
  },
});

const Images = [
  { image: Image0, isSelected: true },
  { image: Image1, isSelected: false },
  { image: Image2, isSelected: false },
  { image: Image3, isSelected: false },
  { image: Image4, isSelected: false },
  { image: Image5, isSelected: false },
  { image: Image6, isSelected: false },
  { image: Image7, isSelected: false },
];

export const App = () => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [mainImage, setMainImage] = useState(Images[currentIndex].image);

  function nextClick() {
    Images[currentIndex].isSelected = false;
    let target = currentIndex + 1;
    if (target > Images.length - 1) {
      target = 0;
    }
    setMainImage(Images[target].image);
    setCurrentIndex(target);
    Images[target].isSelected = true;
  }

  function prevClick() {
    Images[currentIndex].isSelected = false;
    let target = currentIndex - 1;
    if (target < 0) {
      target = Images.length - 1;
    }
    setMainImage(Images[target].image);
    setCurrentIndex(target);
    Images[target].isSelected = true;
  }

  function changeImage(index) {
    Images[currentIndex].isSelected = false;
    setMainImage(Images[index].image);
    setCurrentIndex(index);
    Images[index].isSelected = true;
  }

  const onClickChangeImage = (index) => {
    changeImage(index);
  };

  const onClickNext = () => {
    nextClick();
  };

  const onClickPrev = () => {
    prevClick();
  };

  return (
    <>
      <MainImage mainImage={mainImage} />
      <ShowButtons onClickNext={onClickNext} onClickPrev={onClickPrev} />
      <Thumbnails
        Images={Images}
        onClickChangeImage={onClickChangeImage}
        classes={classes}
      />
    </>
  );
};
