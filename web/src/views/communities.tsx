import React from "react";
import BaseLayout from "../layouts/BaseLayout";

function Communities() {
  return (
    <BaseLayout>
      <div className="mt-[50px] mr-auto ml-auto py-[50px] md:flex-row ">
        <div className="mr-6 w-full p-8">
          <h1 className="text-black-500 my-3 text-[30px] font-semibold">
            Google Developers Group Communities across Nigeria
          </h1>
          <p className="text-lg">
            Communities from each chapter, all over the Nigeria have gathered
            together to make IWD a success. Locate your nearest google developer
            group and join them right here!
          </p>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Communities;
