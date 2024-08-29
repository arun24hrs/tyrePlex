import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#FFEAAA] py-6 px-5 mt-4 flex items-center">
      <div className="">
        <div><h2 className="font-bold text-lg">Have a question about Tyres?</h2></div>
        <div><p className="text-gray-700">Get an answer in 24 hours from our experts.</p></div>
        <div><input type="text" placeholder="Ask or search your question" className="rounded-3xl mt-5 border border-[#FFCA28] py-2 px-4 w-11/12 shadow-sm shadow-[#FFCA28]" /></div>
      </div>
      <div>
        <img src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60" alt="question image" className="w-20" />
      </div>
    </div>
  );
};

export default Contact;
