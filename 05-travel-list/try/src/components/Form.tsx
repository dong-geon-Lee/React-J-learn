import React, { useState } from "react";
import { IProps } from "../App";

interface TProps {
  trips: IProps[];
  setTrips: React.Dispatch<React.SetStateAction<IProps[]>>;
}

interface VProps {
  tripLocation: string;
  tripDates: number;
}

const Form = ({ trips, setTrips }: TProps) => {
  const [tripReserveredInfo, setTripReserveredInfo] = useState<VProps>({
    tripLocation: "",
    tripDates: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTripDestination();

    setTripReserveredInfo({
      tripLocation: "",
      tripDates: 0,
    });
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTripReserveredInfo({
      ...tripReserveredInfo,
      [e.target.name]: e.target.value,
    });
  };

  const addTripDestination = () => {
    const newTrip = [
      ...trips,
      {
        id: trips.length + 1,
        description: tripReserveredInfo.tripLocation,
        quantity: Number(tripReserveredInfo.tripDates),
        packed: false,
      },
    ];
    setTrips(newTrip);
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your 📌 trip?</h3>
      <select
        name="tripDates"
        onChange={onChange}
        value={tripReserveredInfo.tripDates}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={`${+i + 1}`}>
            {+i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="tripLocation"
        onChange={onChange}
        value={tripReserveredInfo.tripLocation}
        placeholder="Item..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
