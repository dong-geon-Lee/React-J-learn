import { useState } from "react";

const Box = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState<any>(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open: any) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default Box;
