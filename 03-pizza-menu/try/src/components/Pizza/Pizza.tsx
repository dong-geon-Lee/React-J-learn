interface Pprops {
  name: string;
  ingredients: string;
  photoName: string;
  price: number;
}

const Pizza = (props: Pprops) => {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price + 3}</span>
    </div>
  );
};

export default Pizza;
