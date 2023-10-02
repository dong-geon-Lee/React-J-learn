import { useState } from "react";
import { IProps } from "../../App";

interface XProps {
  friendLists: IProps[];
  setFriendLists: any;
  openForm: boolean;
  setOpenForm: any;
}

const Forms = ({
  friendLists,
  setFriendLists,
  openForm,
  setOpenForm,
}: XProps) => {
  const [friendInfo, setFriendInfo] = useState({
    name: "",
    image: "https://i.pravatar.cc/48?u=000000",
    balance: 0,
  });

  const onChange = (e: any) => {
    setFriendInfo({ ...friendInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const addFriends = [...friendLists, friendInfo];
    setFriendLists(addFriends);
  };

  const handleFormClose = () => {
    setOpenForm(false);
  };

  console.log(friendLists);

  return (
    <>
      {openForm ? (
        <>
          <form onSubmit={onSubmit} className="form__container">
            <div>
              <label>👭 Friend name</label>
              <input
                type="text"
                name="name"
                value={friendInfo.name}
                onChange={onChange}
                placeholder="name"
              />
            </div>
            <div>
              <label>🌄 Image URL</label>
              <input
                type="text"
                name="image"
                value={friendInfo.image}
                onChange={onChange}
                placeholder="image"
              />
            </div>
            <button type="submit">Add</button>
          </form>
          <button
            className="button"
            style={{
              margin: "2rem 0",
              display: "flex",
              marginRight: "auto",
            }}
            onClick={handleFormClose}
          >
            Close
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Forms;
