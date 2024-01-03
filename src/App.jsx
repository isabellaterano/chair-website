import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  let heroData = [
    { text1: "Design Your Space", text2: "Sit in Luxury" },
    { text1: "Where Style", text2: "Meets Comfort" },
    { text1: "Elevate", text2: "Your Lifestyle" },
  ];
  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 5000);
  }, []);

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <Background heroCount={heroCount} />
        <Hero
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
