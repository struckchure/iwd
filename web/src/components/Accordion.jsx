import "../assets/css/accordion.css";

const Accordio = () => {
  return (
    <div className="p-3 w-1/2 bg">
      <header className="p-5">
        <h1 className="text-3xl text-blue-500  mb-2">
          Frequently asked questions{" "}
        </h1>
        <p className="">
          Need Answers? Everything you need to know, Find them here.
        </p>
      </header>
      <main className="p-5">
        <div className="body-content">
          <p className="">
            What is International Women’s Day (IWD) India 2022?
            <article className="mt-3">
              IWD India summit 2022 is the flagship event of the WomenTechmakers
              community to celebrate International Women’s day. Women and allies
              come together to connect, inspire and network with each other. The
              theme this time is focused on Progress Not Perfection.
            </article>
          </p>

          <i className="icon arrow down"></i>
        </div>

        <div className="body-content">
          <p className="">
            Who can register for IWD 2022?
            <article className="mt-3">
              Is it mandatory to register in order to participate in the event?
              It will be great if you register to ensure you get live updates
              and important resources to your mailbox.
            </article>
          </p>
          <i className="icon arrow down"></i>
        </div>

        <div className="body-content">
          <p className="">
            Is it mandatory to register in order to participate in the event?
            <article className="mt-3">
              It will be great if you register to ensure you get live updates
              and important resources to your mailbox.
            </article>
          </p>
          <i className="icon arrow down"></i>
        </div>
        <div className="body-content">
          <p className="">
            What are the event charges?
            <article className="mt-3">
              The event is free. There are no charges.
            </article>
          </p>
          <i className="icon arrow down"></i>
        </div>
        <div className="body-content">
          <p className="">
            Will the sessions be moderated?
            <article className="mt-3">
              Yes! We have dedicated volunteers who will moderate all the
              sessions. If you witness any attendee breaching the code of
              conduct, please reach out to us at iwdwtmindia@gmail.com.
            </article>
          </p>
          <i className="icon arrow down"></i>
        </div>
      </main>
    </div>
  );
};

export default Accordio;
