import { IProps } from "../App";

interface JProps {
  trips: IProps[];
  numItems: number;
}

const Stats = ({ trips, numItems }: JProps) => {
  if (!trips.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const numPacked = trips.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `📕 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
