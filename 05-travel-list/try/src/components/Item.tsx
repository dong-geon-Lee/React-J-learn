interface IProps {
  item: {
    description: string;
    quantity: number;
    packed: boolean;
  };
}

const Item = ({ item }: IProps) => {
  return (
    <li>
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
