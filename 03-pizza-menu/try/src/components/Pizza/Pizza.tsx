interface Pprops {
  name: string;
  ingredients: string;
  photoName: string;
  price: number;
}

const Pizza = (props: Pprops) => {
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
