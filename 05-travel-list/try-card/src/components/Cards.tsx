import { useState } from "react";
import "./Cards.css";

interface IProps {
  cardDatas: {
    id: number;
    contents: string;
    back: string;
    status: boolean;
  };
}

const Cards = ({ cardDatas }: IProps) => {
  const [cardOpen, setCardOpen] = useState(false);

  const handleCardOpen = () => {
    setCardOpen((prevState) => !prevState);
  };

  return (
    <div
      className={cardOpen ? "card_back" : "card__box"}
      onClick={handleCardOpen}
    >
      {cardOpen ? <p>{cardDatas.back}</p> : <h2>{cardDatas.contents}</h2>}
    </div>
  );
};

export default Cards;
