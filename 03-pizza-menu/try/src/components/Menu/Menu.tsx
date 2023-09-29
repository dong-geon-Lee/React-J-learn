import { pizzaData } from "../../data/data";
import Pizza from "../Pizza/Pizza";

const Menu = () => {
  return (
    <main className="menu">
      <h2>our menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza, index) => (
          <Pizza
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            photoName={pizza.photoName}
            price={pizza.price}
          />
        ))}
      </ul>
    </main>
  );
};

export default Menu;
