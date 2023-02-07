import React from 'react'
import SelectedMenu from './SelectedMenu';
function Beverage({clicked,setOrder}) {
  const BeverageInfos=[
    {
      name :"골드 맥피즈",
      price : "2,700",
      calory : "164",
      img_src :"/images/골드맥피즈.png"
    },
    {
      name :"딸기 칠러",
      price : "2,000",
      calory : "156",
      img_src :"/images/딸기칠러.png"
    },
    {
      name :"자두 칠러",
      price : "3,500",
      calory : "350",
      img_src :"/images/자두칠러.png"
    },
    {
      name :"바닐라 쉐이크",
      price : "2,000",
      calory : "198",
      img_src :"/images/바닐라쉐이크.png"
    },
    {
      name :"딸기 쉐이크",
      price : "3,500",
      calory : "350",
      img_src :"/images/딸기쉐이크.png"
    },
    {
      name :"초코 쉐이크",
      price : "3,500",
      calory : "344",
      img_src :"/images/초코쉐이크.png"
    },
    {
      name :"오렌지 주스",
      price : "2,200",
      calory : "?",
      img_src :"/images/오렌지주스.png"
    },
    {
      name :"코카-콜라",
      price : "2,200",
      calory : "143",
      img_src :"/images/코카콜라.png"
    },
    {
      name :"코카-콜라 제로",
      price : "2,200",
      calory : "0",
      img_src :"/images/코카제로.png"
    },
    {
      name :"스프라이트",
      price : "2,200",
      calory : "149",
      img_src :"/images/스프라이트.png"
    },
    {
      name :"환타",
      price : "2,200",
      calory : "62",
      img_src :"/images/환타.png"
    },
    {
      name :"생수",
      price : "1,900",
      calory : "15",
      img_src :"/images/생수.png"
    },
    {
      name :"우유",
      price : "2,200",
      calory : "194",
      img_src :"/images/우유.png"
    },
  
  ]
  return (
    <div className="rightMenu" style={{overflowY:"hidden"}}>
      <h1 style={{textAlign:"left", marginBottom:"10px"}}>음료</h1>
      <div style={{textAlign:"left", marginBottom:"5px",fontSize:"12px",fontWeight: "400",lineHeight: "15px"}}></div>
      <div className="HappySnackGrid" style={{overflowY:"hidden"}}>
        {BeverageInfos.map((v) =>{
          return(
            <SelectedMenu Infos={v} clicked={clicked} setOrder={setOrder}/>
          );
        })}
      </div>
    </div>
  )
}
export default Beverage
