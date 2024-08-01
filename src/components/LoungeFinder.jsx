import React from "react";
import lounge1 from "../assets/bankkaro/lounge1.png"; // Replace with your image paths
import lounge2 from "../assets/bankkaro/lounge2.png";
import lounge3 from "../assets/bankkaro/lounge3.png";
import lounge_icon1 from "../assets/bankkaro/lounge_icon1.png";
import lounge_icon2 from "../assets/bankkaro/lounge_icon2.png";
import lounge_icon3 from "../assets/bankkaro/lounge_icon3.png";
import tryLounge from "../assets/bankkaro/tryLounge.png";
import ratan from "../assets/bankkaro/ratan.png"

const LoungeFinder = () => {
  const lounges = [
    {
      image: lounge1,
      title: "Indra Gandhi Int'l",
      location: "IGI • New Delhi",
    },
    {
      image: lounge2,
      title: "Indra Gandhi Int'l",
      location: "IGI • New Delhi",
    },
    {
      image: lounge3,
      title: "Indra Gandhi Int'l",
      location: "IGI • New Delhi",
    },
  ];

  return (
    <div className="bg-black text-white py-10 ">
      <h2 className="text-4xl font-semibold text-center mb-4 text-center text-md sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl">Lounge Finder</h2>
      <p className="text-center text-lg mb-10">
        Check which lounges you can access at a click!
      </p>
      <div className="flex justify-center mb-20">
        <img src={tryLounge}  className="bg-gray-800 text-white px-6  h-12 rounded-md cursor-pointer"/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {lounges.map((lounge, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="flex">
              <img
                src={
                  index == 1
                    ? lounge_icon1
                    : index == 2
                    ? lounge_icon2
                    : lounge_icon3
                }
                className="w-12 h-12 object-cover mb-10 rounded-full"
              />
              <div className="ml-2">
                <div className="text-white">{lounge.title}</div>
                <div className="text-lightGray text-xs">{lounge.location}</div>
              </div>
            </div>
            <img
              src={lounge.image}
              alt={lounge.title}
              className=" object-cover mb-4 rounded-full"
            />
          </div>
        ))}
      </div>
      <img src={ratan} className="w-full h-full object-fit: fill" />
    </div>
  );
};

export default LoungeFinder;
