import { IProps } from "../App";
import Item from "./Item";

interface TProps {
  trips: IProps[];
  handleDeleteTrip: (id: number) => void;
}

const PackingList = ({ trips, handleDeleteTrip }: TProps) => {
  return (
    <>
      <ul className="list">
        {trips.map((item) => (
          <Item key={item.id} item={item} handleDeleteTrip={handleDeleteTrip} />
        ))}
      </ul>
    </>
  );
};

export default PackingList;
