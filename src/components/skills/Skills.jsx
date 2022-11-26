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
  WordPress,
} from "./skillsList/DataSkillsList";
import { useEffect } from "react";

const Skills = () => {
  const [selected, setSelected] = useState("جاوا اسکریپت");
  const [data, setData] = useState([]);

  const list = [
    { id: "JavaScript", title: "JavaScript" },
    {
      id: "ReactJs",
      title: "ReactJs",
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
      id: "TypeScript",
      title: "TypeScript",
    },
    {
      id: "AJAX",
      title: " AJAX ",
    },
    {
      id: "Tools",
      title: "Tools",
    },
    {
      id: "Wordpress",
      title: "Wordpress",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case  "JavaScript":
        setData(javascript);
        break;
      case "ReactJs":
        setData(reactJs);
        break;
      case "HTML & CSS":
        setData(htmlCss);
        break;
      case "CSS Libraries":
        setData(CssLibraries);
        break;
      case "TypeScript":
        setData(TypeScript);
        break;
      case "AJAX":
        setData(AJAX);
        break;
      case "Tools":
        setData(Tools);
        break;
      case "Wordpress":
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
