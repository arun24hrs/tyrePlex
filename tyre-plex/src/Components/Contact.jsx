import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#FFEAAA] py-6 px-5 mt-4 flex items-center">
      <div className="lg:w-3/4 lg:ml-16 sm:w-10/12">
        <div><h2 className="font-bold text-lg">Have a question about Tyres?</h2></div>
        <div><p className="text-gray-700">Get an answer in 24 hours from our experts.</p></div>
        <div><input type="text" placeholder="Ask or search your question" className="rounded-3xl mt-5 border border-[#FFCA28] py-2 px-4 w-11/12 lg:w-2/4 sm:w-2/3 shadow-sm shadow-[#FFCA28]" /></div>
      </div>
      <div>
        <img src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60" alt="question logo" className="w-20 lg:w-32 sm:w-24" />
      </div>
    </div>
  );
};

export default Contact;
