import { IProps } from "../App";
import Item from "./Item";

interface TProps {
  trips: IProps[];
  handleDeleteTrip: (id: number) => void;
  handleToggleItem: (id: number) => void;
}

const PackingList = ({ trips, handleDeleteTrip, handleToggleItem }: TProps) => {
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
    </>
  );
};

export default PackingList;
