import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselComp from "./CarouselComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const headerImages = [
    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
    "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
    "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
  ];
  return (
    <>
      <div className="w-11/12 m-auto lg:flex lg:flex-row-reverse lg:items-start">
        <CarouselComp images={headerImages} />
        <div>
          <h1 className="my-5 font-semibold text-2xl">
            SHREE HEMKUNT TYRES AND SERVICES
          </h1>
          <div className="flex items-center gap-6">
            <div className="flex gap-2 items-center">
              <span className="bg-[#4CA72C] text-white px-2 py-1 align- rounded-md">
                4.9
              </span>
              <ul className="flex">
                <li>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                </li>
              </ul>
            </div>
            <a href="#" className="text-black underline text-sm">
              2278 Reviews
            </a>
            <button className="rounded border px-2 py-1">Rate</button>
          </div>
          <div className="mt-5 flex flex-col gap-5">
            <div className="flex gap-4">
              <div>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-red-600 w-4 h-8"
                />
              </div>
              <div>
                <p className="text-md text-gray-800 mt-0 sm:w-2/3">
                  PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                  INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div>
                <FontAwesomeIcon
                  icon={faClock}
                  className="w-5 h-5 text-gray-600"
                />
              </div>
              <div>
                <p className="text-md text-gray-800 mt-0">
                  Open - Monday to Sunday - 10:00AM to 8:00PM
                </p>
              </div>
            </div>
            <div>
              <a href="https://www.tyreplex.com/?mod=dhtml&template=url_shortener_redirector&slug=df64b&utm_source=shorturl&utm_medium=tyreplex&utm_campaign=df64b&abbr=DHTML&page_full_url=https%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FCEAT%2BShoppe%2C%2BShree%2BHemkunt%2BTyres%2BAnd%2BServices%2F%4028.6426711%2C77.3789929%2C15z%2Fdata%3D%214m2%213m1%211s0x0%3A0xc268cb9ed2106c69%3Fsa%3DX%26ved%3D2ahUKEwizo8LqydjzAhXRSH0KHQyoDsMQ_BJ6BAhrEAM">
              <button className="border border-[#D32F2F] text-[#D32F2F] py-3 px-6 rounded-md">
                Get Directions
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
