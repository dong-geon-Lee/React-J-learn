import { pizzaData } from "../../data/data";
import Pizza from "../Pizza/Pizza";

const Menu = () => {
  return (
    <main className="menu">
      <h2>our menu</h2>

      <ul className="pizzas">
        {pizzaData.length > 0 ? (
          pizzaData.map((pizza, index) => (
            <Pizza
              key={index}
              name={pizza.name}
              ingredients={pizza.ingredients}
              photoName={pizza.photoName}
              price={pizza.price}
              soldOut={pizza.soldOut}
            />
          ))
        ) : (
          <h1 style={{ textAlign: "center", width: "100%", display: "block" }}>
            We're still working on our menu. Please come back later :)
          </h1>
        )}
      </ul>
    </main>
  );
};

export default Menu;
