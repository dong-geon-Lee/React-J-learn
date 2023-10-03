import React from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watched }: any) => {
  return (
    <ul className="list">
      {watched.map((movie: any) => (
        <WatchedMovie movie={movie} />
      ))}
    </ul>
  );
};

export default WatchedList;
