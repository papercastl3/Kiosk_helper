import React from 'react'
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import SelectedMenu from './SelectedMenu'
import DetailedMenu from './DetailedOrder';
import './css/HappySnack.css'
function HappySnack({clicked,setOrder}) {
  // const [menu,ChooseMenu]=useState([]);
  // let [open,setOpen] =useState(false);
  // const clicked=()=>{
  //   setOpen(true);
  //   console.log("clicked");
  // }
  // const close =()=>{
  //   setOpen(false);
  // } 
  const HappySnackInfos=[
    {
      name :"츄러스",
      price : "1,500",
      calory : "145",
      img_src :"/images/츄러스.png"
    },
    {
      name :"치킨 토마토 스낵랩",
      price : "2,200",
      calory : "264",
      img_src :"/images/치토스.png"
    },
    {
      name :"불고기버거",
      price : "1,500",
      calory : "292",
      img_src :"/images/불고기.png"
    },
    {
      name :"맥너겟® 6조각",
      price : "2,800",
      calory : "149",
      img_src :"/images/맥너겟6.png"
  },
    {
      name :"아메리카노",
      price : "2,600",
      calory : "15",
      img_src :"/images/아메리카노_L.png"
  },
    {
      name :"카페라떼",
      price : "3,100",
      calory : "194",
      img_src :"/images/카페라떼_L.png"
    },
  
  ]
  return (
    <div className="rightMenu" style={{overflowY:"hidden"}}>
      <h1 style={{textAlign:"left", marginBottom:"10px"}}>해피스낵</h1>
      <div style={{textAlign:"left", marginBottom:"5px",fontSize:"12px",fontWeight: "400",lineHeight: "15px"}}></div>
      <Fade direction='up' fraction={0}  duration="700" triggerOnce="true">
      <div className="HappySnackGrid" style={{overflowY:"hidden"}}>
        {HappySnackInfos.map((v) =>{
            return(
              <SelectedMenu Infos={v} clicked={clicked} setOrder={setOrder} key={v.name.toString()}/>
            );
          })}
      </div>
      </Fade>
    </div>
  )
}

export default HappySnack
