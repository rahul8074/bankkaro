import React from "react";
import hdfcBank from "../assets/bankkaro/hdfc_bank.png";
import axisBank from "../assets/bankkaro/axis_bank.png";
import indianOild from "../assets/bankkaro/indian_oil.png";

const cards = [
  { img: hdfcBank, title: "HDFC Regalia", applyLink: "#" },
  { img: axisBank, title: "Axis Bank Ace Credit Card", applyLink: "#" },
  { img: hdfcBank, title: "Indian Oil HDFC Credit Card", applyLink: "#" },
];

const CreditCard = () => {
  return (
    <div className="py-10 flex flex-wrap justify-center mt-10">
      <div className="text-center text-md sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl">
        <p>Popular credit cards for every </p>
        <p>dedicated category</p>

        <div className="flex text-sm justify-center mt-10 ">
        <div className="mr-4 border bg-white text-black rounded px-4 py-1">Featured</div>
        <div className="mr-4 border  rounded px-4 py-1">Cashback</div>
        <div className="mr-4 border  rounded px-4 py-1">Rewards</div>
        <div className="mr-4 border  rounded px-4 py-1">Fuel</div>
        <div className="mr-4 border  rounded px-4 py-1">Business</div>
      </div>
      </div>
    
      <div className="py-10 flex flex-wrap justify-center">
        {cards.map((card, ind) => {
          return (
            <div key={ind} className="p-4 flex flex-col">
              <img src={card.img} className="h-80" />
              <div className="ml-14 -mt-16">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <div className="flex font-bold" style={{ fontSize: "8px" }}>
                  <div className="text-creamText border mr-2 p-1">TRAVEL</div>
                  <div className="text-creamText border mr-2 p-1">
                    ONLINE SHOPPING
                  </div>
                </div>
                <p className="text-silverText">50% Cashback</p>
                <p className="text-silverText w-48">
                  High cashback on online and offline spends
                </p>
                <a
                  href={card.applyLink}
                  className="text-creamText hover:text-silverText"
                >
                  Apply Now
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreditCard;
