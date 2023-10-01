import { IProps } from "../App";

interface XProps {
  item: IProps;
  handleDeleteTrip: (id: number) => void;
}

const Item = ({ item, handleDeleteTrip }: XProps) => {
  return (
    <li>
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteTrip(item?.id!)}>❌</button>
    </li>
  );
};

export default Item;
