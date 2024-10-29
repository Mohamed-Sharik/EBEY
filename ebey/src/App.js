import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayProd from "./components/displaydata/DisplayProd";
import Home from "./components/DummyHome";
import ViewProduct from "./components/ViewProduct/ViewProduct";
import Layout from "./components/pagelayout/LayOut";
import MyCart from "./components/cartpage/MyCart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<DisplayProd />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/viewproduct/:id" element={<ViewProduct />} />
            <Route path="/cart" element={<MyCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
