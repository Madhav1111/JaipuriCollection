import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/:slug" element={<Collection />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
