import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import CartProvider from "./CartContext";
import Shop from "./components/Shop";
import Community from "./components/Community";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/community" element={<Community />}></Route>
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
