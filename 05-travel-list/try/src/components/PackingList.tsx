import Item from "./Item";

export interface IProps {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

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
