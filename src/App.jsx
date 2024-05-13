import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Nav from "./nav/nav";
import Main from "./mainBody/Main";
import Footer from "./Footer/Footer";
import LushExtension from "./LushExtensions/LushExtension";
import Details from "./Details/details";
import Checkout from "./Checkout/Checkout";
import { useEffect } from "react";
import PlaceOrder from "./PlaceOrder/PlaceOrder";

function App() {
  useEffect(() => {
    localStorage.removeItem("bag");
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/lushextension" element={<LushExtension />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/place-order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
