import React, { useState } from "react";
import StartRating from "./StartRating";

const Test = () => {
  const [movieRating, setMovieRating] = useState<any>(0);

  return (
    <div>
      <StartRating color="#ff6219" rating={10} onSetRating={setMovieRating} />
      <p style={{ fontSize: "2.6rem" }}>
        This movie was rated {movieRating} stars
      </p>
    </div>
  );
};

export default Test;
