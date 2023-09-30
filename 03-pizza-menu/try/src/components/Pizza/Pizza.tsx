interface IProps {
  name: string;
  ingredients: string;
  photoName: string;
  price: number;
  soldOut: boolean;
}

const Pizza = ({ photoName, name, ingredients, price, soldOut }: IProps) => {
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold out" : price + 3}</span>
      </div>
    </li>
  );
};

export default Pizza;
