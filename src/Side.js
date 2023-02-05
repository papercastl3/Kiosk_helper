import React from 'react'

function Side() {
  const SideInfos=[
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
      <h1 style={{textAlign:"left", marginBottom:"10px"}}>사이드</h1>
      <div style={{textAlign:"left", marginBottom:"5px",fontSize:"12px",fontWeight: "400",lineHeight: "15px"}}></div>
      <div className="burgerGrid" style={{overflowY:"hidden"}}>
        {SideInfos.map((v) =>{
          return(
            <div className="menuSelectBox" onClick={()=>{console.log(v.name)}}>
              <div>
                <img src={v.img_src} width="85px" height="60px"/>
                <div>{v.name} </div>
                <div style={{fontWeight: "700"}}>₩{v.price} {v.calory}Kcal</div>
            </div>
          </div> 
          );
        })}
      </div>
    </div>
  )
}

export default Side
