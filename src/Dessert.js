import React from 'react'
import { Fade } from 'react-awesome-reveal';
import SelectedMenu from './SelectedMenu';
function Dessert({clicked,setOrder}) {
  const DessertInfos=[
    {
      name :"베리 스토로베리 맥플러리",
      price : "2,700",
      calory : "227",
      img_src :"/images/스맥.png"
    },
    {
      name :"오레오 맥플러리",
      price : "2,700",
      calory : "344",
      img_src :"/images/오맥.png"
    },
    {
      name :"딸기 오레오 맥플러리",
      price : "2,700",
      calory : "350",
      img_src :"/images/딸오맥.png"
    },
    {
      name :"초코 오레오 맥플러리",
      price : "2,700",
      calory : "344",
      img_src :"/images/초오맥.png"
    },
    {
      name :"스트로베리콘",
      price : "1,200",
      calory : "?",
      img_src :"/images/스콘.png"
    },
    {
      name :"아이스크림콘",
      price : "900",
      calory : "143",
      img_src :"/images/아이스크림콘.png"
    },
    {
      name :"바닐라 선데이 아이스크림",
      price : "1,800",
      calory : "0",
      img_src :"/images/바선아.png"
    },
    {
      name :"초코 선데이 아이스크림",
      price : "1,800",
      calory : "149",
      img_src :"/images/초선아.png"
    },
    {
      name :"딸기 선데이 아이스크림",
      price : "1,800",
      calory : "62",
      img_src :"/images/딸선아.png"
    },
    {
      name :"오레오 아포가토",
      price : "3,200",
      calory : "0",
      img_src :"/images/오아.png"
    },
  ];
  return (
    <div className="rightMenu" style={{overflowY:"hidden"}}>
      <h1 style={{textAlign:"left", marginBottom:"10px"}}>디저트</h1>
      <div style={{textAlign:"left", marginBottom:"5px",fontSize:"12px",fontWeight: "400",lineHeight: "15px"}}></div>
      <Fade className="gridWrap"  direction="up" fraction={1}  duration="700" triggerOnce="true" style={{overflowY:"hidden"}}>
        <div className="HappySnackGrid"style={{overflowY:"hidden"}}>
          {DessertInfos.map((v) =>{
            return(
              <SelectedMenu Infos={v} clicked={clicked} setOrder={setOrder} key={v.name.toString()}/>
            );
          })}
        </div>
      </Fade>
    </div>
  )
}

export default Dessert
