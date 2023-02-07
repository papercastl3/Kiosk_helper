import React from 'react'
import SelectedMenu from './SelectedMenu';

function McLunch({clicked,setOrder}) {
  const McLunchInfos=[
    {
      name :"츄러스",
      price : "1,500",
      calory : "145",
      img_src :"/images/츄러스.png"
    },
    {
      name :"치킨 토마토 스낵랩",
      price : "2,000",
      calory : "198",
      img_src :"/images/치토스.png"
    },
    {
      name :"불고기버거",
      price : "1,500",
      calory : "292",
      img_src :"/images/불고기.png"
    },
    {
      name :"아메리카노(라지)",
      price : "2,200",
      calory : "149",
      img_src :"/images/아메리카노_L.png"
  },
    {
      name :"카페라떼(라지)",
      price : "2,200",
      calory : "149",
      img_src :"/images/카페라떼_L.png"
    },
    {
        name :"카페라떼",
        price : "2,200",
        calory : "149",
        img_src :"/images/빅맥.png"
    },
  ]
  return (
    <div className="rightMenu" style={{overflowY:"hidden"}}>
      <h1 style={{textAlign:"left", marginBottom:"10px"}}>맥런치</h1>
      <div style={{textAlign:"left", marginBottom:"5px",fontSize:"12px",fontWeight: "400",lineHeight: "15px"}}>아래에서 세부메뉴를 확인하세요</div>
      <div className="burgerGrid" style={{overflowY:"hidden"}}>
        {McLunchInfos.map((v) =>{
          return(
            <SelectedMenu Infos={v} clicked={clicked} setOrder={setOrder}/>
          );
        })}
      </div>
    </div>
  )
}


export default McLunch
