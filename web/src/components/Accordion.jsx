import { useState } from "react";
import "../assets/scss/accordion.scss";

const Accordion = () => {
  const handleClick = () => {}

  return (
    <div className="p-3 w-1/2 main shadow-lg shadow-indigo-500">
      <div className="px-5 pt-5 pb-2">
        <h4 className="text-3xl text-blue-500  mb-2">
          Frequently asked questions{" "}
        </h4>
        <p>
          Need Answers? Everything you need to know, Find them{" "}
          <span className="text-blue-500">here</span>.
        </p>
      </div>

      <div className="p-5">
        <div className="body-content">
          <p>
            What is International Women’s Day (IWD) India 2022?
            <article className="mt-3">
              IWD India summit 2022 is the flagship event of the WomenTechmakers
              community to celebrate International Women’s day. Women and allies
              come together to connect, inspire and network with each other. The
              theme this time is focused on Progress Not Perfection.
            </article>
          </p>
          <i
            style={{ display: showInfo ? "block" : "none" }}
            onClick={handleClick}
            className="icon arrow down bg-transparent"
          ></i>
        </div>

        <div className="body-content">
          <p>
            Who can register for IWD 2022?
            <article className="mt-3">
              Is it mandatory to register in order to participate in the event?
              It will be great if you register to ensure you get live updates
              and important resources to your mailbox.
            </article>
          </p>
          <i
            onClick={handleClick}
            className="icon arrow down bg-transparent"
          ></i>
        </div>

        <div className="body-content">
          <p>
            Is it mandatory to register in order to participate in the event?
            <article className="mt-3">
              It will be great if you register to ensure you get live updates
              and important resources to your mailbox.
            </article>
          </p>
          <i
            onClick={handleClick}
            className="icon arrow down bg-transparent"
          ></i>
        </div>
        <div className="body-content">
          <p>
            What are the event charges?
            <article className="mt-3">
              The event is free. There are no charges.
            </article>
          </p>
          <i
            onClick={handleClick}
            className="icon arrow down bg-transparent"
          ></i>
        </div>
        <div className="body-content">
          <p>
            Will the sessions be moderated?
            <article className="mt-3">
              Yes! We have dedicated volunteers who will moderate all the
              sessions. If you witness any attendee breaching the code of
              conduct, please reach out to us at iwdwtmindia@gmail.com.
            </article>
          </p>
          <i
            onClick={handleClick}
            className="icon arrow down bg-transparent"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
