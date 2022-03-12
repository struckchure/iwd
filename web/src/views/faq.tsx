import Accordion from "../components/Accordion";
import Container from "../components/Container";
import BaseLayout from "../layouts/BaseLayout";
import { get_image_url } from "../utils";

function FAQ() {
  return (
    <BaseLayout>
      <div className="flex flex-col items-start gap-2 md:flex-row">
        <div className="w-full">
          <Accordion />
        </div>

        <img
          src={get_image_url("hero-side-img.svg")}
          className="h-auto w-full object-contain"
          alt="section image"
        />
      </div>
    </BaseLayout>
  );
}

export default FAQ;
