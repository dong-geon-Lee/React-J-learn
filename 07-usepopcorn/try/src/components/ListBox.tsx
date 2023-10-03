import { useState } from "react";

const ListBox = ({ children }: any) => {
  const [isOpen1, setIsOpen1] = useState<any>(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open: any) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && children}
    </div>
  );
};

export default ListBox;
