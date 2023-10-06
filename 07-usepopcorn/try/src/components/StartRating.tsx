import { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  fontSize: "2rem",
};

const starContainerStyle = {
  display: "flex",
};

const StartRating = ({
  rating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}: any) => {
  const [ratings, setRatings] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (rating: number) => {
    setRatings(rating);
    onSetRating?.(rating);
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: rating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : ratings >= i + 1}
            handleRating={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === rating
          ? messages[tempRating ? tempRating - 1 : ratings - 1]
          : tempRating || ratings || ""}
      </p>
    </div>
  );
};

export default StartRating;
