import { useState } from "react";

interface content {
  title: string;
  descr: string;
}

export default function AccordionElement({ title, descr }: content) {
  const [showInfo, setShowInfo] = useState(true);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="grid">
      <span
        className="flex justify-between pb-2 mb-4 border-[#ccc] border-b cursor-pointer"
        onClick={handleClick}
      >
        <h2>{title}</h2>
        <i
          className={
            showInfo
              ? "icon chevron down bg-transparent"
              : "icon chevron up bg-transparent"
          }
        ></i>
      </span>
      <p className={showInfo ? "dont-show" : "show-info"}>{descr}</p>
    </div>
  );
}
