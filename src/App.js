import "./App.css";
import { Header } from "./components/Header/Header";
import { Clothes } from "./pages/Clothes/Clothes";
import { Routes, Route, Link } from "react-router-dom";
import { NewProducts } from "./pages/NewProducts/NewProducts";
import { Collections } from "./pages/Collections/Collections";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newproducts" element={<NewProducts />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/clothes" element={<Clothes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
