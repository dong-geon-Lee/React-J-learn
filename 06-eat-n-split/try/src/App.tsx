import { useState } from "react";

import Bills from "./components/Bills/Bills";
import Forms from "./components/Forms/Forms";
import Friends from "./components/Friends/Friends";

import { initialFriends } from "./data/data";

export interface IProps {
  id: number;
  name: string;
  image: string;
  balance: number;
}

const App = () => {
  const [friendLists, setFriendLists] = useState<IProps[]>(initialFriends);
  const [openForm, setOpenForm] = useState(false);
  const [seletedFriend, setSeletedFriend] = useState(false);
  const [selectFriend, setSelectFriend] = useState("");
  const [payTotal, setPayTotal] = useState(0);

  return (
    <section className="container">
      <div>
        <Friends
          friendLists={friendLists}
          openForm={openForm}
          setOpenForm={setOpenForm}
          setSeletedFriend={setSeletedFriend}
          setSelectFriend={setSelectFriend}
          payTotal={payTotal}
        />
        <Forms
          friendLists={friendLists}
          setFriendLists={setFriendLists}
          openForm={openForm}
          setOpenForm={setOpenForm}
        />
      </div>

      <div>
        {seletedFriend && (
          <Bills
            friendLists={friendLists}
            selectFriend={selectFriend}
            setSeletedFriend={setSeletedFriend}
            setPayTotal={setPayTotal}
            setFriendLists={setFriendLists}
          />
        )}
      </div>
    </section>
  );
};

export default App;
