import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import googlePlay from "../assets/bankkaro/google play.png";
import appStore from "../assets/bankkaro/app store.png";
import lastBtn from "../assets/bankkaro/lastbtn.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 ">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 flex flex-col mb-10 md:mb-0">
          <div className="flex space-x-4 mb-4">
            <FaTwitter className="text-white text-2xl" />
            <FaInstagram className="text-white text-2xl" />
          </div>
          <p className="text-silverText mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar. Fusce id mollis ex.
          </p>
          <div className="flex space-x-4 mb-4">
            <img src={appStore} className="w-40 h-10 cursor-pointer" alt="App Store" />
            <img src={googlePlay} className="w-40 h-10 cursor-pointer" alt="Google Play" />
          </div>
          <div className="border-t-2 border-gray mb-10 mt-4"></div>
          <p className="text-gray-400 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar. Fusce id mollis ex.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-around">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-3">COMPANY</h3>
              <ul className="text-silverText space-y-2">
                <li>About BankKaro</li>
                <li>Vision and Mission</li>
                <li>Our Team Members</li>
                <li>Partners and Investors</li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-3">BLOG</h3>
              <ul className="text-silverText space-y-2">
                <li>BankKaro Savings</li>
                <li>Cashless Makes Perfect</li>
                <li>BankKaro No Interest</li>
                <li>BankKaro Digital Wallet</li>
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold mb-3">FEATURES</h3>
              <ul className="text-silverText space-y-2">
                <li>Card Genius</li>
                <li>Lounge Finder</li>
                <li>Beat My Card</li>
                <li>Compare Cards</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-20">
            <div className="flex flex-col md:flex-row justify-around w-full md:w-1/2">
              <div className="mb-6 md:mb-0">
                <h3 className="font-semibold mb-3">CONTACT</h3>
                <ul className="text-silverText space-y-2">
                  <li>Contact Us</li>
                  <li>Contact Support</li>
                </ul>
              </div>
              <div className="mb-6 md:mb-0">
                <h3 className="font-semibold mb-3">LEGAL</h3>
                <ul className="text-silverText space-y-2">
                  <li>Terms</li>
                  <li>Privacy</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center md:justify-end w-full md:w-1/2">
              <img src={lastBtn} className="h-10 w-40 cursor-pointer" alt="Powered by" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
