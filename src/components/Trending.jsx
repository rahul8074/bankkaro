import React from "react";
import background from "../assets/bankkaro/head_bg_img.png";
import findCreditCardbtn from "../assets/bankkaro/findCreditCardbtn.png";
import hdfcCreditCard from "../assets/bankkaro/hdfc_bank.png";
import offer1 from "../assets/bankkaro/offer1.png";
import offer2 from "../assets/bankkaro/offer2.png";
import offer3 from "../assets/bankkaro/offer3.png";
import offer4 from "../assets/bankkaro/offer4.png";


import Offers from "./Offers";

const Trending = () => {
  const offerData = [
    {
      image: offer1,
      title: "Personalised Offers",
      desc: "Find best Credit Cards based on your spend pattern",
    },
    {
      image: offer2,
      title: "Earn Rewards",
      desc: "Earn Rewards for every successful Credit Card approval",
    },
    {
      image: offer3,
      title: "Compare Cards",
      desc: "Compare your existing Cards with best in the industry",
    },
    {
      image: offer4,
      title: "Max Benifits",
      desc: "Get maximum benefits from your Credit Cards",
    },
  ];

  return (
    <div className="relative">
      <img
        src={background}
        alt="background"
        className="w-full h-[40h] object-cover shadow-bottom"
      />
      <div className="absolute text-md sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl top-10 sm:top-1/6 md:top-1/4 lg:top-1/4 left-5 md:left-10 lg:left-20 xl:left-40 space-y-2">
        <p>We find the Best</p>
        <p>Credit Cards for you</p>
        <img
          src={findCreditCardbtn}
          className="mt-10 h-10 cursor-pointer"
          alt="Find Credit Card Button "
        />
      </div>

      <img
        src={hdfcCreditCard}
        className="absolute right-0 md:right-20 lg:right-40 top-0 md:top-0 lg:top-20 xl:top-20 h-40 md:h-60 lg:h-80 xl:h-80"
        alt="HDFC Credit Card"
      />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-10 mx-auto">
        {offerData.map((item, ind) => {
          return (
            <div key={ind}>
              <Offers image={item.image} title={item.title} desc={item.desc} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
