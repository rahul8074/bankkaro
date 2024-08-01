import React from "react";
import background from "../assets/bankkaro/backbg.png";
import temple from "../assets/bankkaro/temple.png";
import text from "../assets/bankkaro/text.png";
import card1 from "../assets/bankkaro/card1.png";
import card2 from "../assets/bankkaro/card2.png";
import card3 from "../assets/bankkaro/card3.png";
import bottomImg from "../assets/bankkaro/bottomImg.png";
import compareCardBtn from "../assets/bankkaro/compareCardBtn.png";

const CompareCards = () => {
  return (
    <div className="my-10 md:my-20">
      <div className="relative">
       
        <div className="relative">
          <img src={background} className="relative w-full" alt="Background" />
          <img src={temple} className="absolute h-5/6 md:h-3/4 lg:h-full -bottom-2 left-1/2 transform -translate-x-1/2" alt="Temple" />
          <img src={text} className="absolute -top-36 w-11/12 sm:w-1/2 md:w-2/3 mx-auto left-1/2 transform -translate-x-1/2" alt="Text" />
          <div className="flex justify-center absolute bottom-10 md:bottom-40 left-1/2 transform -translate-x-1/2 space-x-2 md:space-x-4">
            <img src={card1} className="h-20 md:h-32" alt="Card 1" />
            <img src={card2} className="h-20 md:h-32" alt="Card 2" />
            <img src={card3} className="h-20 md:h-32" alt="Card 3" />
          </div>
          <img src={bottomImg} className="w-full" alt="Bottom Image" />
        </div>
      </div>
      <div className="text-center mt-10 text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl">
        <p>Uncover hidden benefits and find the</p>
        <p>perfect card for your financial goals.</p>
      </div>
      <div className="w-full flex justify-center mt-10">
        <img src={compareCardBtn} className="h-10 cursor-pointer" alt="Compare Card Button" />
      </div>
    </div>
  );
};

export default CompareCards;
