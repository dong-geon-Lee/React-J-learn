import { useEffect, useState } from "react";
import { IProps } from "../../App";

interface XProps {
  friendLists: IProps[];
  selectFriend: string;
  setSeletedFriend: any;
  setPayTotal: any;
  setFriendLists: any;
}

interface BProps {
  bill: number;
  yourExpense: number;
  friendOrYou: string;
}

const Bills = ({
  friendLists,
  selectFriend,
  setSeletedFriend,
  setFriendLists,
}: XProps) => {
  const [billInfo, setBillInfo] = useState<BProps>({
    bill: 0,
    yourExpense: 0,
    friendOrYou: "You",
  });

  const text = "split a bill with";

  const onChange = (e: any) => {
    setBillInfo({ ...billInfo, [e.target.name]: e.target.value });
  };

  const handleBillSubmit = () => {
    setSeletedFriend(false);

    const updateFriendLists = friendLists?.map((friend) => {
      const condition =
        billInfo.friendOrYou === "You"
          ? friend.balance +
            Number(billInfo.bill) -
            Number(billInfo.yourExpense)
          : friend.balance +
            Number(billInfo.yourExpense) -
            Number(billInfo.bill);

      return friend.name === selectFriend
        ? {
            ...friend,
            balance: condition,
          }
        : friend;
    });

    setFriendLists(updateFriendLists);
    setBillInfo({
      bill: 0,
      yourExpense: 0,
      friendOrYou: "",
    });
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:5000/todos");
  //     const data = await response.json();
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <form className="bill__container">
      <h1 className="title">{`${text} ${selectFriend}`}</h1>
      <div className="bill__grid">
        <label>🛜 Bill value</label>
        <input
          type="number"
          className="bill__input"
          name="bill"
          value={billInfo.bill}
          onChange={onChange}
        />
      </div>
      <div className="bill__grid">
        <label>🧍‍♀️ Your expense</label>
        <input
          type="number"
          className="bill__input"
          name="yourExpense"
          value={billInfo.yourExpense}
          onChange={onChange}
        />
      </div>
      <div className="bill__grid">
        <label>👫 {selectFriend}'s expense:</label>
        <input
          type="text"
          className="bill__input"
          name="bill"
          value={billInfo.bill - billInfo.yourExpense}
          onChange={onChange}
          disabled
        />
      </div>
      <div className="bill__grid">
        <label>🏡 Who is paying the bill?</label>
        <select
          onChange={onChange}
          value={billInfo.friendOrYou}
          name="friendOrYou"
          className="bill__input"
        >
          <option value="You">You</option>
          <option value={selectFriend}>{selectFriend}</option>
        </select>
      </div>
      <button
        type="button"
        className="button"
        style={{
          display: "block",
          width: "100%",
        }}
        onClick={handleBillSubmit}
      >
        Split bill
      </button>
    </form>
  );
};

export default Bills;
