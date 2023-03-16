import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Cart from "./Cart/Cart";
import Main from "./Main/Main";

function Page() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default Page;
