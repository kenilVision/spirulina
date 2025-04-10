import React from "react";

function HomeSectionHeading({ title }) {
  return (
    <>
      <h2
        className="text-4xl font-bold relative inline-block "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {title}
      </h2>
      <div
        className="max-w-[9.375rem] h-0.5 bg-[#018d43] mx-auto mt-[12px] mb-[15px]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      ></div>
    </>
  );
}

export default HomeSectionHeading;
