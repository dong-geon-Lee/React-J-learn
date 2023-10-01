import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export interface IProps {
  id?: number;
  description: string;
  quantity: number;
  packed: boolean;
}

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

const App = () => {
  const [trips, setTrips] = useState<IProps[]>(initialItems);

  return (
    <div className="App">
      <Logo />
      <Form trips={trips} setTrips={setTrips} />
      <PackingList trips={trips} />
      <Stats />
    </div>
  );
};

export default App;
