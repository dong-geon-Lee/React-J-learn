import { IProps } from "../../App";

interface CProps {
  friendLists: IProps[];
  setOpenForm: any;
  openForm: boolean;
  setSeletedFriend: any;
  setSelectFriend: any;
  payTotal: number;
}

const Friends = ({
  friendLists,
  openForm,
  setOpenForm,
  setSeletedFriend,
  setSelectFriend,
}: CProps) => {
  const handleSelectFriend = (friend: string) => {
    setSelectFriend(friend);
    setSeletedFriend(true);
  };

  return (
    <div className="sidebar">
      {friendLists?.map((friend: any) => (
        <ul key={friend.id}>
          <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            <p
              className={`${
                friend.balance > 0
                  ? "green"
                  : `${friend.balance < 0 ? "red" : ""}`
              }`}
            >
              {friend.balance > 0
                ? `${friend.name} owes you ${friend.balance}$`
                : `${
                    friend.balance < 0
                      ? `You owe ${friend.name} ${Math.abs(friend.balance)}$`
                      : `You and ${friend.name} are even`
                  }`}
            </p>
            <button
              className="button"
              onClick={() => handleSelectFriend(friend.name)}
            >
              Select
            </button>
          </li>
        </ul>
      ))}
      {!openForm && (
        <button className="button" onClick={() => setOpenForm(true)}>
          Add friend
        </button>
      )}
    </div>
  );
};

export default Friends;
