import React from "react";
import ReviewCarousel from "./ReviewCarousel";


const Reviews = () => {

  return (
    <div className="mt-8 w-11/12 m-auto">
      <h2 className="font-bold text-lg my-4 sm:text-xl lg:text-2xl">2278 Google Reviews</h2>
      <div>
        <ReviewCarousel/>
      </div>
    </div>
  );
};

export default Reviews;
