import { useEffect, useState } from "react";
import "./Home.css";
import Background from "../../Components/Background/Background";
import Hero from "../../Components/Hero/Hero";

const Home = () => {
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
    <div>
      <div className="content-wrap">
        <Background heroCount={heroCount} />
        <Hero
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
        />
      </div>
    </div>
  );
};

export default Home;
