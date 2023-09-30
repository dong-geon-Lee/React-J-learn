import Item from "./Item";

export interface IProps {
  id?: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface TProps {
  trips: IProps[];
}

const PackingList = ({ trips }: TProps) => {
  return (
    <>
      <ul className="list">
        {trips.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default PackingList;
