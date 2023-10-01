interface IProps {
  item: {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
  };
  handleDeleteTrip: (id: number) => void;
}

const Item = ({ item, handleDeleteTrip }: IProps) => {
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
