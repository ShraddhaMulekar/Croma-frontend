import React, { useEffect, useState } from "react";
import "./LatestLaunch.css"

const LatestLaunch = () => {
  const [latests, setLatests] = useState([]);

  const fetchLatest = async () => {
    const res = await fetch("../public/HomePageData/LatestLaunch.json");
    const data = await res.json();
    // console.log("latest launch line 9", data);
    setLatests(data);
  };

  useEffect(() => {
    fetchLatest();
  }, []);

  // console.log(latests);
  return (
    <div className="latest-container">
      <h2>Latest Launches</h2>

      <div className="latest-content">
        {latests.map((latest) => {
          return (
            <div className="latest-div">
              <img className="latest-img" src={latest.img} alt={latest.alt} />
            </div>
          );
        })}
        <img className="last-img-latest" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1742456894/Croma%20Assets/CMS/LP%20Page%20Banners/2025/BAU/HP_SingleSplit_snapdragonlaptop_20March2025_jc503i.jpg?tr=w-1024" alt="hp snap dragon laptop" />
      </div>
    </div>
  );
};

export default LatestLaunch;
