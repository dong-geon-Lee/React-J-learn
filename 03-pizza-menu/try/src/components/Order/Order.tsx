interface Iprops {
  closeHour: number;
  openHour: number;
}

const Order = ({ openHour, closeHour }: Iprops) => {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
