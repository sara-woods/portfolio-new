import { useEffect } from "react";
import Navbar from "../../Navbar/Navbar";

const WatchDominion = () => {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <p className="mb-5">Watchdominion.org</p>
    </div>
  );
};

export default WatchDominion;
