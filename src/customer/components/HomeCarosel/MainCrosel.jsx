import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from "./MainCaroselData";

const MainCrosel = () => {
  const items = mainCaroselData.map((item) => (
    <img
      className="cursor-pointer h-full w-full"
      role="presentation"
      src={item.image}
      alt=""
    />
  ));

  return (
    <div>
        <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
    </div>
  );
};

export default MainCrosel;
