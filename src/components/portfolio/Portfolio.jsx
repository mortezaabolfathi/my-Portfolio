import { useState } from "react";
import "./portfolio.scss";
import PortfolioLis from "./portfolioList/PortfolioList";
import {
    makeWebForWordpress,
  featuredPortfolio,
  mobilePortfolio,
  designFigma,
} from "./portfolioList/DataPortfolioList";
import { useEffect } from "react";

const Portfolio = () => {
  const [selected, setSelected] = useState("ویژگی");
  const [data, setData] = useState([]);

  const list = [
    { id: "ویژگی", title: "ویژگی" },
    {
      id: "وردپرس",
      title: "وردپرس",
    },
    {
      id: "موبایل اپلیکیشن",
      title: "موبایل اپلیکیشن",
    },
    {
      id: "طراحی با فیگما",
      title: "طراحی با فیگما",
    },
    {
      id: "دیگر کارها",
      title: "دیگر کارها ",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "ویژگی":
        setData(featuredPortfolio);
        break;
      case "وردپرس":
        setData(makeWebForWordpress);
        break;
      case "موبایل اپلیکیشن":
        setData(mobilePortfolio);
        break;
      case "طراحی با فیگما":
        setData(designFigma);
        break;
      case "کارهای دیگر":
        setData(makeWebForWordpress);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>نمونه کارها</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioLis
              key={item.id}
              title={item.title}
              selected={selected}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((d) => {
          return (
            <div className="item" key={d.id}>
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;

// نمونه کارها
