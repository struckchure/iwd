import React from "react";

import BaseLayout from "../layouts/BaseLayout";
import Accordion from "../components/Accordion";
import { get_image_url } from "../utils";

function Home() {
  return (
    <BaseLayout>
      {/* intro section */}

      <section className="pt-24">
        <div className="flex flex-col-reverse items-start justify-between gap-4 md:flex-row">
          <div className="flex flex-col gap-4">
            <h4 className="text-4xl">International Women's Day Nigeria 2022</h4>

            <p>
              IWD Nigeria 2022 Summit is a celebration for all women in
              technology. Women and allies from all across the country come
              together to empower, inspire and learn from each other. This year
              we are focused on recognizing our theme Progress Not Perfection.
            </p>

            <div className="flex flex-col items-center justify-start gap-4 md:flex-row md:items-start">
              <div className="flex flex-col items-center gap-2 md:items-start">
                <div className="w-fit rounded-xl border-l-[0.7rem] border-solid border-blue-600 bg-white p-2">
                  When
                </div>
                <label htmlFor="">April 2 & 3, 2022</label>
              </div>

              <div className="flex flex-col items-center gap-2 md:items-start">
                <div className="w-fit rounded-xl border-l-[0.7rem] border-solid border-blue-600 bg-white p-2">
                  Where
                </div>
                <label htmlFor="">Online, YouTube</label>
              </div>

              <div className="flex flex-col items-center gap-2 md:items-start">
                <button className="rounded-xl bg-blue-600 px-4 py-2 uppercase text-white">
                  register now
                </button>

                <button className="rounded-xl bg-transparent px-4 py-2 uppercase text-blue-600 outline outline-1 outline-blue-400">
                  become a member
                </button>
              </div>
            </div>

            <div>
              <img
                src={get_image_url("hero-first-side.svg")}
                className="h-auto w-full object-contain md:w-2/3"
                alt=""
              />
            </div>
          </div>

          {/* image */}

          <div>
            <img
              src={get_image_url("hero-first-image.png")}
              className="h-auto w-full object-contain"
              alt=""
            />
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* progress not perfection */}

      <section>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <div className="w-full">
            <img
              src={get_image_url("iwd-theme-new.svg")}
              className="h-auto w-full object-contain"
              alt=""
            />
          </div>

          <div className="w-full">
            <h4 className="my-4 text-3xl md:text-4xl">
              #ProgressNotPerfection
            </h4>
            <p>
              This year our theme celebrates all kinds of progress - big or
              small - and the strength we demonstrate when we don’t let fear
              hold us back from following our dreams. So often we hold ourselves
              to impossibly high standards and feel disappointed when we can’t
              reach them - or worse, we don’t even try. When we let the idea of
              being perfect go, we allow ourselves the space and freedom to try
              new things, to make mistakes and to learn. We see that all of our
              experiences - the good, the bad, and the ugly - have made us who
              we are today. Instead of striving for perfection, we can strive
              for growth and discovery. Instead of being fixated on the
              destination, we enjoy the journey, wherever it takes us.
            </p>

            <div className="flex w-full flex-wrap gap-2 p-2">
              <a href="#">
                <button className="bg-gray-300 p-2 text-gray-800 hover:bg-gray-400">
                  <i className="icon twitter"></i>
                  <span>IWD Nigeria</span>
                </button>
              </a>

              <a href="#">
                <button className="bg-gray-300 p-2 text-gray-800 hover:bg-gray-400">
                  <i className="icon twitter"></i>
                  <span>GDG Nigeria</span>
                </button>
              </a>

              <a href="#">
                <button className="bg-gray-300 p-2 text-gray-800 hover:bg-gray-400">
                  <i className="icon twitter"></i>
                  <span>Progress Not Perfection</span>
                </button>
              </a>
            </div>

            <button className="my-2 rounded-2xl bg-blue-600 uppercase text-white">
              register
            </button>
          </div>
        </div>
      </section>

      {/* call for speaks / more info */}

      <section>
        <div className="flex flex-col items-start justify-center gap-4 md:flex-row">
          <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-4 md:w-3/5">
            <h4 className="text-3xl">Call for Speakers</h4>

            <p>
              We are looking for passionate speakers who can give a talk at our
              event. Please do fill the form if you are interested. Our team
              will get in touch with you after reviewing your entry.
            </p>

            <button className="bg-blue-600 uppercase text-white">
              submit now
            </button>
          </div>

          <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-4">
            <h4 className="max-w-md text-3xl">
              Women Techmakers International Women’s Day India Summit 2021
            </h4>

            <p>
              IWD India 2021 had seen unprecedented love and adulation from
              women and allies all over the world. Women Ambassadors from across
              India had gotten together to showcase exemplary teamwork, a
              passion to win and the courage to create something that hadn't
              been done before. The event was a phenomenal success, but the best
              part was that it brought out the sisterhood between communities.
              Together, we all rose. The team had tons of learnings and are now
              all set to make IWD India 2022 all the more worthy of your time.
              Stay tuned for a bigger, better and a never before experience.
            </p>

            <div className="flex gap-2">
              <button className="bg-blue-600 uppercase text-white">
                see more info
              </button>

              <button className="bg-transparent uppercase text-blue-500 outline outline-1 outline-blue-600">
                <i className="icon youtube"></i>
                <span>submit now</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* frequently asked questions */}

      <section>
        <Accordion />
      </section>

      {/* conclusion / closing section */}

      <section className="py-10">
        <div className="mx-auto flex w-3/4 flex-col items-center justify-center gap-2">
          <h4 className="text-center text-3xl font-bold">
            Keep in touch with{" "}
            <span className="text-blue-600">#IWDIndia2022</span> for the latest
            announcements
          </h4>

          <p className="w-2/3 text-center">
            Let's get connected so that we can reach out to each other via a
            simple notification. Stake out{" "}
            <span className="text-blue-600">#IWDIndia2022</span> for the updates
            and news.
          </p>

          <div className="flex">
            <a href="#">
              <button className="h-auto w-auto p-2">
                <i className="icon twitter"></i>
              </button>
            </a>

            <a href="#">
              <button className="h-auto w-auto p-2">
                <i className="icon linkedin"></i>
              </button>
            </a>

            <a href="#">
              <button className="h-auto w-auto p-2">
                <i className="icon instagram"></i>
              </button>
            </a>

            <a href="#">
              <button className="h-auto w-auto p-2">
                <i className="icon youtube"></i>
              </button>
            </a>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

export default Home;
