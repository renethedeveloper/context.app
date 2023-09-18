
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import { PrimaryContextProvider } from "./components/context";

function App() {



  return (
    <div>
      <h1>My Context SApp</h1>
      <PrimaryContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </PrimaryContextProvider>
    </div>
  );
}

export default App;
