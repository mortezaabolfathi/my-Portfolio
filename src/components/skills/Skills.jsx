import { useState } from "react";
import "./skills.scss";
import SkillsList from "./skillsList/SkillsList";
import {
  AJAX,
   Tools,
   javascript,
   CssLibraries,
   TypeScript,
   htmlCss,
   reactJs,
   WordPress
} from "./skillsList/DataSkillsList";
import { useEffect } from "react";

const Skills = () => {
  const [selected, setSelected] = useState("جاوا اسکریپت");
  const [data, setData] = useState([]);

  const list = [
    { id: "جاوا اسکریپت", title: "جاوا اسکریپت" },
    {
      id: "ری اکت",
      title: "ری اکت",
    },
    {
      id: "HTML & CSS",
      title: "HTML & CSS",
    },
    {
      id: "CSS Libraries",
      title: "CSS Libraries",
    },
    {
      id: "تایپ اسکریپت",
      title: " تایپ اسکریپت ",
    },
    {
      id: "AJAX",
      title: " AJAX ",
    },
    {
      id: "ابزارها",
      title: " ابزارها",
    },
    {
      id:"وردپرس",
      title : "وردپرس"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "جاوا اسکریپت":
        setData(javascript);
        break;
      case "ری اکت":
        console.log("react in ")
        setData(reactJs);
        break;
      case "HTML & CSS":
        setData(htmlCss);
        break;
      case "CSS Libraries":
        console.log("CSS libraries")
        setData(CssLibraries);
        break;
      case "تایپ اسکریپت":
        console.log("typeScript")
        setData(TypeScript);
        break;
      case "AJAX":
        console.log("AJAX")
        setData(AJAX);
        break;
      case "ابزارها":
        setData(Tools);
        break;
      case "وردپرس":
        console.log("wordPress")
        setData(WordPress);
        break;
      default:
        setData(javascript);
    }
  }, [selected]);

  return (
    <div className="skills" id="skills">
      <h1>مهارت های من</h1>
      <ul>
        {list.map((item) => {
          return (
            <SkillsList
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
              <h3>{d.title}</h3>
              <span>{d.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

// نمونه کارها
