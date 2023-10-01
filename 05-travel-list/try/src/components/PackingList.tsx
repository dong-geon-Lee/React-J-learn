import { useState } from "react";
import { IProps } from "../App";
import Item from "./Item";

interface TProps {
  trips: IProps[] | undefined;
  setTrips: React.Dispatch<React.SetStateAction<IProps[]>>;
  handleDeleteTrip: (id: number) => void;
  handleToggleItem: (id: number) => void;
}

interface SortingFunctions {
  [key: string]: (a: IProps, b: IProps) => number;
}

const PackingList = ({
  trips,
  setTrips,
  handleDeleteTrip,
  handleToggleItem,
}: TProps) => {
  const [sortBy, setSortBy] = useState("input");

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleResetList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setTrips([]);
    else return;
  };

  const sortingFunctions: SortingFunctions = {
    input: (): any => trips,
    description: (a, b) => a.description.localeCompare(b.description),
    packed: (a, b) => Number(a.packed) - Number(b.packed),
  };

  const sortedItems = trips?.slice()?.sort(sortingFunctions[sortBy]);

  return (
    <>
      <ul className="list">
        {sortedItems?.map((item) => (
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
        <button onClick={handleResetList}>Clear list</button>
      </div>
    </>
  );
};

export default PackingList;
