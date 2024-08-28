import React from "react";
import "./brand.css";
import Carousel from "react-multi-carousel";

const logos = [
  { id: 1, name: "MRF", position: "0 -970px" },
  { id: 2, name: "CEAT", position: "0 -295px" },
  { id: 3, name: "Goodyear", position: "0 -80px" },
  { id: 3, name: "Apollo", position: "0 0px" },
  { id: 3, name: "BridgeStone", position: "0 -40px" },
  { id: 3, name: "JK Tyre", position: "0 -560px" },
  { id: 3, name: "Michelin", position: "0 -925px" },
  { id: 3, name: "Pirelli", position: "0 -1140px" },
  { id: 3, name: "Yokohama", position: "0 -1430px" },
  { id: 3, name: "TVS EuroGrip", position: "0 -1270px" },
  { id: 3, name: "Continental", position: "0 -120px" },
  { id: 3, name: "Hankook", position: "0 -460px" },
  { id: 3, name: "Ralco", position: "0 -1180px" },
  { id: 3, name: "Maxxis", position: "0 -700px" },
  { id: 3, name: "Firestone", position: "0 -425px" },
  { id: 3, name: "Birla", position: "0 -220px" },
  { id: 3, name: "Ralson", position: "0 -1220px" },
  // Add more logos and their positions here...
  // Make sure to add the exact positions of each logo in the sprite.
];

const Brands = () => {
  return (
    <div className="w-11/12 m-auto">
      <h2 className="mt-7 font-bold text-lg">Deals in</h2>
      <div className="logo-grid">
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover={true}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {logos.map((logo) => (
          <div key={logo.id} className="mx-2 md:mx-3 lg:mx-5 card">
            <div
              className="logo w-4 h-2"
              style={{ backgroundPosition: logo.position }}
            />
            <p>{logo.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default Brands;
