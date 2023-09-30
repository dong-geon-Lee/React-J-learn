import React from "react";
import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

const PackingList = () => {
  return (
    <>
      <ul className="list">
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </>
  );
};

export default PackingList;
