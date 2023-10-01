import { useState } from "react";

interface IProps {
  faq: {
    title: string;
    text: string;
  };
  num: number;
}

const Accordion = ({ faq, num }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { title, text } = faq;

  const handleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`item ${isOpen && "border__active"}`}>
      <p className={`number ${isOpen && "active"}`}>
        {num < 9 ? `0${num + 1}` : num + 1}
      </p>
      <p className={`text ${isOpen && "active"}`}>{title}</p>
      <p className="icon" onClick={handleAccordion}>
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};

export default Accordion;
