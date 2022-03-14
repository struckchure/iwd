import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import "../assets/scss/accordion.scss";
import { get_image_url } from "../utils";

function Badge() {
  return (
    <BaseLayout>
      <div className="mt-[50px] flex flex-col justify-start py-[50px] md:flex-row ">
        <div className="w-full p-8">
          <h1 className="text-black-500 my-3 text-[40px] ">
            IWD Nigeria Badge
          </h1>
          <p className="text-xl">
            Now that you are here, how about personalising your IWD 2022
            profile? Upload an image and generate a personalised badge with the
            IWD 2022 frame. Also share your image using #IWDNigeria on different
            social platforms.
          </p>
          <div className="my-8 p-0">
            <label className="mt-8" htmlFor="">
              Select a Image
            </label>
            <br />
            <button
              className="duration-20 mt-3 bg-black transition-all hover:bg-slate-900"
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
                className="mt-3 h-[48px] rounded-r-lg border border-solid border-[rgba(0,0,0,.12)] bg-[#f5f5f5] px-5 transition-all duration-200 hover:bg-slate-200"
                type="button"
              >
                <span className="text-black">SQUARE</span>
              </button>
              <button
                className="duration-20 mt-3 h-[48px] rounded-l-lg border border-solid border-[rgba(0,0,0,.12)] bg-[#f5f5f5] px-5 transition-all hover:bg-slate-200"
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
        <div className="h-fit w-full rounded-lg bg-white">
          <img
            className=" h-1/2 p-[50px] "
            src={get_image_url("profile-overlay.jpg")}
            alt=""
          />
        </div>
      </div>
    </BaseLayout>
  );
}

export default Badge;
