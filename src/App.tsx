import {Route, Routes} from "react-router-dom";

import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

const App = () => {
  return (
      <>
        <Routes>
            <Route path="/" element={<ProductsPage/>} />
            <Route path="/products/:id" element={<ProductPage/>} />
        </Routes>
      </>
  );
}

export default App;
