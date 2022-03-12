import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import "../assets/scss/accordion.scss";
import Photo from "../assets/img/WTM-IWD22-Profile-Overlay.jpg";

function Badge() {
  return (
    <BaseLayout>
      <div className="flex mt-[50px] py-[50px] ">
        <div className="w-1/2 p-8">
          <h1 className="text-[40px] text-black-500 my-3 ">IWD India Badge</h1>
          <p className="text-xl">
            Now that you are here, how about personalising your IWD 2022
            profile? Upload an image and generate a personalised badge with the
            IWD 2022 frame. Also share your image using #IWDIndia on different
            social platforms.
          </p>
          <div className="my-8 p-0">
            <label className="mt-8" htmlFor="">
              Select a Image
            </label>
            <br />
            <button
              className="bg-black mt-3 hover:bg-slate-900 transition-all duration-20"
              type="button"
            >
              Upload Image{" "}
              <span className="ml-2">
                <i className="icon arrow up text-white"></i>
              </span>
            </button>
          </div>
          <div className="my-8 p-0">
            <label className="mt-8" htmlFor="">
              Image Shape
            </label>
            <br />
            <div className="block ">
              <button
                className="border border-[rgba(0,0,0,.12)] border-solid h-[48px] rounded-r-lg mt-3 px-5 bg-[#f5f5f5] hover:bg-slate-200 transition-all duration-200"
                type="button"
              >
                <span className="text-black">SQUARE</span>
              </button>
              <button
                className="border border-[rgba(0,0,0,.12)] border-solid h-[48px] rounded-l-lg mt-3 px-5 bg-[#f5f5f5] hover:bg-slate-200 transition-all duration-20"
                type="button"
              >
                <span className="text-black">CIRCLE</span>
              </button>
            </div>
            <p className="mt-8 text-lg">
              <span>
                We respect your privacy and are not storing your pictures on our
                servers.
              </span>
            </p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Badge;
