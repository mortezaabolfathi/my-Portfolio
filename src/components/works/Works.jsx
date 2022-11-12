import "./work.scss";
import DataWork from "./DataWork";
import { useState } from "react";
const Work = () => {
  const [dataWorkList, setDataWorkList] = useState(DataWork);
  const [currentSlide,setCurrentSlide] = useState(0)

  const handelClickSlide = (way)=>{
    if(way==="left"){
      setCurrentSlide(currentSlide>0 ? currentSlide -1 : 2)
    }
    if(way==="right"){
      setCurrentSlide(currentSlide<dataWorkList.length - 1 ? currentSlide +1 : 0)
    }
  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform : `translateX(-${currentSlide * 100}vw)`}}>
        {dataWorkList.map((dataWork) => {
          return (
            <div className="container">
              <div className="item">
                <div className="right">
                  <img src={dataWork.img} alt="" />
                </div>
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={dataWork.icon} alt="" />
                    </div>
                    <h2>{dataWork.title}</h2>
                    <p>{dataWork.description}</p>
                    <span>{dataWork.project}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="arrow">
        <div className="left" onClick={()=>handelClickSlide("left")}>
          <img src="assets/arrow.png" alt="" />
        </div>
        <div className="right" onClick={()=>handelClickSlide("right")}>
          <img src="assets/arrow.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Work;
