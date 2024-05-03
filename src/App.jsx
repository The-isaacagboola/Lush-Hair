import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Nav from "./nav/nav";
import Main from "./mainBody/Main";
import Footer from "./Footer/Footer";
import LushExtension from "./LushExtensions/LushExtension";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/lushextension" element={<LushExtension />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
