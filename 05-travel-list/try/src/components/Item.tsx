import { IProps } from "../App";

interface XProps {
  item: IProps;
  handleDeleteTrip: (id: number) => void;
  handleToggleItem: (id: number) => void;
}

const Item = ({ item, handleDeleteTrip, handleToggleItem }: XProps) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handleToggleItem(item.id)}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteTrip(item?.id!)}>❌</button>
    </li>
  );
};

export default Item;
