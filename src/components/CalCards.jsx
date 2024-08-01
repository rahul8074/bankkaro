import React from "react";
import offer1 from "../assets/bankkaro/kundali_card.png";
import offer2 from "../assets/bankkaro/beat_card.png";
import offer3 from "../assets/bankkaro/compare_card.png";
import offer4 from "../assets/bankkaro/lounge_card.png";
import Offers from "./Offers";

export const CalCards = () => {
  const offerData = [
    {
      image: offer1,
    },
    {
      image: offer2,
    },
    {
      image: offer3,
    },
    {
      image: offer4,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-10 mx-auto">
      {offerData.map((item, ind) => {
        return (
          <div key={ind} className="mx-4">
            <Offers image={item.image} imgStyle="w-60 h-full"/>
          </div>
        );
      })}
    </div>
  );
};
