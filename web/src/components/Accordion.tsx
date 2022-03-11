import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/accordion.scss";

const Accordion = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    // setShowInfo(!showInfo);
  };

  return (
    <div className="p-3 w-1/2 main shadow-lg shadow-indigo-500">
      <div className="px-5 pt-5 pb-2">
        <h4 className="text-3xl text-blue-500  mb-2">
          Frequently asked questions
        </h4>
        <p>
          Need Answers? Everything you need to know, Find them
          <Link to="/faq" className="no-underline text-blue-500">
            here
          </Link>
        </p>
      </div>

      <div className="p-5">
        <div className="body-content">
          <p>
            What is International Women’s Day (IWD) India 2022?
            <br />
            <br />
            IWD India summit 2022 is the flagship event of the WomenTechmakers
            community to celebrate International Women’s day. Women and allies
            come together to connect, inspire and network with each other. The
            theme this time is focused on Progress Not Perfection.
          </p>

          <i
            onClick={handleClick}
            className="icon arrow down bg-transparent"
          ></i>
        </div>

        <div className="body-content">
          <p>
            Who can register for IWD 2022?
            <br />
            <br />
            Is it mandatory to register in order to participate in the event? It
            will be great if you register to ensure you get live updates and
            important resources to your mailbox.
          </p>
          <i
            onClick={handleClick}
            className="icon arrow down bg-transparent"
          ></i>
        </div>

        <div className="body-content">
          <p>
            Is it mandatory to register in order to participate in the event?
            <br />
            <br />
            It will be great if you register to ensure you get live updates and
            important resources to your mailbox.
          </p>
          <i
            onClick={handleClick}
            className="icon arrow down bg-transparent"
          ></i>
        </div>
        <div className="body-content">
          <p>
            What are the event charges?
            <br />
            <br />
            The event is free. There are no charges.
          </p>
          <i
            onClick={handleClick}
            className="icon arrow down bg-transparent"
          ></i>
        </div>
        <div className="body-content">
          <p>
            Will the sessions be moderated?
            <br />
            <br />
            Yes! We have dedicated volunteers who will moderate all the
            sessions. If you witness any attendee breaching the code of conduct,
            please reach out to us at iwdwtmindia@gmail.com.
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
