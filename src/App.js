import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Gift from "./components/pages/Gift";
import Order from "./components/pages/Order";
import Pay from "./components/pages/Pay";
import Store from "./components/pages/Store";
import BestSeller from "./components/handCraftCurationPages/BestSeller";
import Drink from "./components/handCraftCurationPages/Drink";
import Food from "./components/handCraftCurationPages/Food";
import Merchandise from "./components/handCraftCurationPages/Merchandise";
import CoffeeAtHome from "./components/handCraftCurationPages/CoffeeAtHome";
import ReadyToEat from "./components/handCraftCurationPages/ReadyToEat";
import Profile from "./components/profile/Profile";
import Login from "./components/profile/login/Login";
import LayOut from "./components/layout/LayOut";
import SignUp from "./components/profile/login/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<LayOut />}>
          <Route exact path="/" element={<Home />} />
          <Route path="Gift" element={<Gift />} />
          <Route path="Order" element={<Order />} />
          <Route path="Pay" element={<Pay />} />
          <Route path="Store" element={<Store />} />
          <Route path="BestSeller" element={<BestSeller />} />
          <Route path="Drinks" element={<Drink />} />
          <Route path="Food" element={<Food />} />
          <Route path="Merchandise" element={<Merchandise />} />
          <Route path="CoffeeAtHome" element={<CoffeeAtHome />} />
          <Route path="ReadyToEat" element={<ReadyToEat />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="SignUp" element={<SignUp />} />
        </Route>
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
