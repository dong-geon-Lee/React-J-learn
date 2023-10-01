import { useState } from "react";
import { IProps } from "../App";
import Item from "./Item";

interface TProps {
  trips: IProps[];
  handleDeleteTrip: (id: number) => void;
  handleToggleItem: (id: number) => void;
}

const PackingList = ({ trips, handleDeleteTrip, handleToggleItem }: TProps) => {
  const [sortBy, setSortBy] = useState("input");

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <ul className="list">
        {trips.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDeleteTrip={handleDeleteTrip}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={onChange}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </>
  );
};

export default PackingList;
