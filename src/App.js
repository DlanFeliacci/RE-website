import Home from "./pages/Home";
import Search from "./pages/Search";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation;

  return (
    <AnimatePresence location={location} key={location.pathname}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
