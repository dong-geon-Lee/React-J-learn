import Pizza from "../Pizza/Pizza";

const Menu = () => {
  return (
    <div className="menu">
      <h2>our menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
    </div>
  );
};

export default Menu;
