import Accordion from "../components/Accordion";
import BaseLayout from "../layouts/BaseLayout";
import { get_image_url } from "../utils";

function FAQ() {
  return (
    <BaseLayout>
      <div className="flex flex-col items-start gap-0 md:flex-row">
        <div className="w-full md:lg:z-30">
          <Accordion />
        </div>

        <img
          src={get_image_url("hero-side-img.svg")}
          className="absolute top-40 right-20 hidden h-auto w-2/5 object-contain opacity-30 md:block"
          alt="section image"
        />
      </div>
    </BaseLayout>
  );
}

export default FAQ;
