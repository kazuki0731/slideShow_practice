import Image0 from "./img/pic00.png";
import Image1 from "./img/pic01.png";
import Image2 from "./img/pic02.png";
import Image3 from "./img/pic03.png";
import Image4 from "./img/pic04.png";
import Image5 from "./img/pic05.png";
import Image6 from "./img/pic06.png";
import Image7 from "./img/pic07.png";

import { useState } from "react";

import { MainImage } from "./components/MainImage";
import { ShowButtons } from "./components/ShowButtons";
import { Thumbnails } from "./components/Thumbnails";

const IMAGES = [
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mainImage, setMainImage] = useState(IMAGES[currentIndex].image);

  function nextClick() {
    IMAGES[currentIndex].isSelected = false;
    let target = currentIndex + 1;
    if (target > IMAGES.length - 1) {
      target = 0;
    }
    setMainImage(IMAGES[target].image);
    setCurrentIndex(target);
    IMAGES[target].isSelected = true;
  }

  function prevClick() {
    IMAGES[currentIndex].isSelected = false;
    let target = currentIndex - 1;
    if (target < 0) {
      target = IMAGES.length - 1;
    }
    setMainImage(IMAGES[target].image);
    setCurrentIndex(target);
    IMAGES[target].isSelected = true;
  }

  function changeImage(index) {
    IMAGES[currentIndex].isSelected = false;
    setMainImage(IMAGES[index].image);
    setCurrentIndex(index);
    IMAGES[index].isSelected = true;
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
      <Thumbnails IMAGES={IMAGES} onClickChangeImage={onClickChangeImage} />
    </>
  );
};
