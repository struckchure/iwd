import { Link } from "react-router-dom";
import AccordionElement from "./AccordionElement";
import "../assets/scss/accordion.scss";

const texts = [
  {
    title: "What is International Women’s Day (IWD) Nigeria 2022?",
    descr:
      "IWD Nigeria summit 2022 is the flagship event of the WomenTechmakers community to celebrate International Women’s day. Women and allies come together to connect, inspire and network with each other. The theme this time is focused on Progress Not Perfection.",
  },
  {
    title: "Who can register for IWD 2022?",
    descr:
      "Is it mandatory to register in order to participate in the event? It will be great if you register to ensure you get live updates and important resources to your mailbox.",
  },
  {
    title: "Is it mandatory to register in order to participate in the event?",
    descr:
      "It will be great if you register to ensure you get live updates and important resources to your mailbox.",
  },
  {
    title: "What are the event charges?",
    descr: "The event is free. There are no charges.",
  },
  {
    title: "Will the sessions be moderated?",
    descr:
      "Yes! We have dedicated volunteers who will moderate all the sessions. If you witness any attendee breaching the code of conduct, please reach out to us at iwdwtmnigeria@gmail.com.",
  },
];

const Accordion = () => {
  return (
    <div className="w-full p-3">
      <div className="px-5 pt-5 pb-2">
        <h4 className="mb-2 text-3xl  text-blue-500">
          Frequently asked questions
        </h4>
        <p>
          Need Answers? Everything you need to know, Find them
          <Link to="/faq" className="text-blue-500 no-underline">
            here
          </Link>
        </p>
      </div>

      <div className="p-5">
        {texts.map((text) => (
          <AccordionElement title={text.title} descr={text.descr} />
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Accordion;
