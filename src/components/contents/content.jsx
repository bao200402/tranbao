import React, { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import ShopNow from "../button/shopNow";
const Content = () => {
  const [position, setPosition] = useState(0);

  const handleClickPrev = () => {
    if (position <= 2) return setPosition(200);
    return setPosition(position - 100);
  };

  const handleClickNext = () => {
    if (position >= 200) return setPosition(0);
    return setPosition(position + 100);
  };

  return (
    <div className="  overflow-hidden   relative ">
      <div className="absolute w-full h-full bg-dark opacity-50 z-10"></div>
      <div
        className={`flex w-full  translate-x-[-${position}%] transition-all ease-in-out duration-500   m-2`}
      >
        <img
          className="w-screen  "
          src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt=""
        />
        <img
          className="w-screen"
          src="https://images.unsplash.com/photo-1452457436726-a8e6ea2adf29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <img
          className="w-screen "
          src="https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt=""
        />
      </div>
      <div className="absolute w-full z-20 text-center right-0 top-1/4">
        <h1 className="text-h5 uppercase text-light-2">Nippon Mart</h1>
        <ShopNow />
      </div>
      <div className="flex w-3/4 absolute z-20 left-[12.5%]  top-1/3  justify-between">
        <BsFillArrowLeftCircleFill
          type="button"
          onClick={() => handleClickPrev()}
          className=" text-h1 cursor-pointer opacity-30"
        />
        <BsFillArrowRightCircleFill
          type="button"
          onClick={() => handleClickNext()}
          className=" text-h1 z-20 cursor-pointer opacity-30"
        />
      </div>
    </div>
  );
};

export default Content;
