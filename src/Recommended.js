import React from 'react'
import SelectedMenu from './SelectedMenu';
import { Fade } from 'react-awesome-reveal';
import "./css/Recommended.css"
function Recommended({clicked,setOrder}) {
  const RecommendInfos=[
    {
      name :"더블 쿼터파운더® 치즈",
      price : "7,400",
      set_price : "8,800",
      calory : "769",
      set_calory : "1,101~1250",
      img_src :"/images/더쿼치.png",
      set_img_src :"/imges/더쿼치.png"
    },
    {
      name :"쿼터파운더® 치즈 BBQ 베이컨",
      price : "6,800",
      set_price : "8,500",
      calory : "560",
      set_calory : "1,101~1250",
      img_src :"/images/쿼치베.png",
      set_img_src :"/imges/쿼터파운더BBQ세트.png"
    },
    {
      name :"쿼터파운더® 치즈",
      price : "5,500",
      set_price : "7,200",
      calory : "534",
      set_calory : "1,101~1250",
      img_src :"/images/쿼터파운더_치즈.png",
      set_img_src :"/imges/쿼치세트.png"
    },
    {
      name :"맥크리스피™ 디럭스 버거",
      price : "6,700",
      set_price : "7,900",
      calory : "594",
      set_calory : "1,101~1250",
      img_src :"/images/맥크리스피_디럭스.png",
      set_img_src :"/imges/맥디세트.png"
    },
    {
      name :"맥크리스피™ 클래식 버거",
      price : "5,900",
      set_price : "7,100",
      calory : "584",
      set_calory : "1,101~1250",
      img_src :"/images/맥크리스피_클래식.png",
      set_img_src :"/imges/맥클세트.png"
    },
    {
      name :"빅맥®",
      price : "4,900",
      set_price : "6,200",
      calory : "583",
      set_calory : "1,101~1250",
      img_src :"/images/빅맥.png",
      set_img_src :"/imges/빅맥세트.png"
    },
    {
      name :"1955® 버거",
      price : "6,000",
      set_price : "6,000",
      calory : "537",
      img_src :"/images/1955.png",
      set_img_src :"/imges/1955세트.png"
    },
    {
      name :"골드 맥피즈",
      price : "2,200",
      set_price : "7,100",
      calory : "164",
      set_calory : "1,101~1250",
      img_src :"/images/골드맥피즈.png",
      set_img_src :"/images/골드맥피즈.png"
    },
    {
      name :"치킨 토마토 스낵랩",
      price : "2,000",
      calory : "198",
      img_src :"/images/치토스.png",
      set_img_src :"/imges/치토스.png"
    },
    {
      name :"딸기칠러",
      price : "2,200",
      set_price : "6,000",
      calory : "156",
      img_src :"/images/딸기칠러.png",
      set_img_src :"/imges/딸기칠러.png"
    },
  ];

  return (
    <div className="rightMenu" style={{overflowY:"hidden"}}>
      <h1 style={{textAlign:"left", marginBottom:"10px"}}>추천메뉴</h1>
      <Fade direction="up"  duration="700" fraction={1} triggerOnce="true">
      <div style={{textAlign:"left", marginBottom:"5px",fontSize:"12px",fontWeight: "400",lineHeight: "15px"}}></div>
      <div className="RecommendedGrid" style={{overflowY:"hidden"}}>
      {RecommendInfos.map((v) =>{
          return(
            <SelectedMenu Infos={v} clicked={clicked} setOrder={setOrder} key={v.name.toString()}/>
          );
        })}
    </div>
    </Fade>
    </div>
  );
}

export default Recommended;
