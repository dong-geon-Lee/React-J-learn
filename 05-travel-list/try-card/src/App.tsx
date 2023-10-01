import Cards from "./components/Cards";
import { cardDatas } from "./data/data";

const App = () => {
  return (
    <div className="card__container">
      {cardDatas.map((cardDatas) => (
        <Cards cardDatas={cardDatas} />
      ))}
    </div>
  );
};

export default App;
