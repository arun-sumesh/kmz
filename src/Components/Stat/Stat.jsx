import React, { useEffect, useState } from "react";
import "./Stat.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import dashboardImg from "../../assets/2149126949.jpg";

const statsData = [
  {
    number: 10,
    suffix: "+",
    label: "Projects Finished",
    icon: <FaArrowUpRightFromSquare />,
  },
  {
    number: 5,
    suffix: "+",
    label: "Projects Ongoing",
  },
  {
    number: 3,
    suffix: "+",
    label: "Planned Projects",
    icon: <FaArrowUpRightFromSquare />,
  },
  {
    number: 3,
    suffix: "+",
    label: "Years in the Industry",
  },
];

const StatsWithImage = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    statsData.forEach((stat, i) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const increment = end / (duration / 30);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = Math.floor(start);
          return newCounts;
        });
      }, 30);
    });
  }, []);

  return (
    <section className="solutions">
      <h1>KMZ Tech
at a Glance</h1>
      <section className="stats-wrapper">
        <div className="stats-grid">
          {/* Left Stats */}
          <div className="stats-column">
            {statsData.slice(0, 2).map((stat, i) => (
              <div key={i} className="stat-card accent">
                <div className="stat-number">
                  {counts[i]}
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
                {stat.icon && <div className="stat-icon">{stat.icon}</div>}
              </div>
            ))}
          </div>

          {/* Middle Image */}
          <div className="stats-image">
            <img src={dashboardImg} alt="Dashboard Preview" />
          </div>

          {/* Right Stats */}
          <div className="stats-column">
            {statsData.slice(2).map((stat, i) => (
              <div key={i + 2} className="stat-card accent">
                <div className="stat-number">
                  {counts[i + 2]}
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
                {stat.icon && <div className="stat-icon">{stat.icon}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default StatsWithImage;
