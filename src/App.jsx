import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./App.css";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="page-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
