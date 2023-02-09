import React from 'react'
import SelectedMenu from './SelectedMenu';
import { Fade } from 'react-awesome-reveal';
function Side({clicked,setOrder}) {
  const SideInfos=[
    {
      name :"코울슬로",
      price : "1,500",
      calory : "179",
      img_src :"/images/코울슬로.png"
    },
    {
      name :"상하이 치킨 스낵랩",
      price : "2,400",
      calory : "276",
      img_src :"/images/상하이_스낵랩.png"
    },
    {
      name :"골든 모짜렐라 치즈스틱",
      price : "1,500",
      calory : "292",
      img_src :"/images/치즈스틱.png"
    },
    {
      name :"후렌치 후라이",
      price : "2,200",
      calory : "149",
      img_src :"/images/후렌치_후라이.png"
    },
    {
      name :"맥너겟®",
      price : "2,200",
      calory : "149",
      img_src :"/images/맥너겟.png"
    },
    {
      name :"맥스파이시®치킨텐더",
      price : "2,200",
      calory : "149",
      img_src :"/images/치킨텐더.png"
    },
    {
      name :"해쉬 브라운",
      price : "2,200",
      calory : "149",
      img_src :"/images/해쉬_브라운.png"
    },
  ]
  return (
    <div className="rightMenu" style={{overflowY:"hidden"}}>
      <h1 style={{textAlign:"left", marginBottom:"10px"}}>사이드</h1>
      <div style={{textAlign:"left", marginBottom:"5px",fontSize:"12px",fontWeight: "400",lineHeight: "15px"}}></div>
      <Fade direction='up' fraction={0}  duration="700" triggerOnce="true">
        <div className="burgerGrid" style={{overflowY:"hidden"}}>
          {SideInfos.map((v) =>{
            return(
              <SelectedMenu Infos={v} clicked={clicked} setOrder={setOrder} key={v.name.toString()}/>
            );
          })}
        </div>
      </Fade>
    </div>
  )
}

export default Side
