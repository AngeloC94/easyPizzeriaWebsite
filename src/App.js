import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter;

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
