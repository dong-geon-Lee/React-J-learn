interface Pprops {
  name: string;
  ingredients: string;
  photoName: string;
  price: number;
  soldOut: boolean;
}

const Pizza = (props: Pprops) => {
  if (props.soldOut) return null;

  return (
    <li className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </li>
  );
};

export default Pizza;
