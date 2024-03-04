import Layout from "./Layout";
import Purchase from "./components/Purchase";
import ListForm from "./components/ListForm";
import { Routes, Route } from "react-router-dom";
// import List2 from "./components/List2";
import Chats from "./components/Chats";
import ChatRoom from "./components/ChatRoom";
import SelectedList from "./components/SelectedList";
import Congrats from "./components/Congrats";
import History from "./components/History";
import { useState } from "react";
// import List from "./components/List";

function App() {
  const [brands, setBrands] = useState([]);
  // const [select, setSelect] = useState(null);
  // const [creditPurchase, setCreditPurchase] = useState(0);

  const handleList = (brand) => {
    setBrands([...brands, brand]);
  };

  // const handleSelect = (id) => {
  //   setSelect(id !== select ? id : null);
  // };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Purchase />} />
          <Route
            path="list"
            element={<ListForm onHandleList={handleList} brands={brands} />}
          />

          {/* <Route path="list2" element={<List2 />} /> */}
          <Route path="chats" element={<Chats />} />
          <Route path="chatroom" element={<ChatRoom />} />
          <Route path="listSelected" element={<SelectedList />} />
          <Route path="congrats" element={<Congrats />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
