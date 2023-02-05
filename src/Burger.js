import React from 'react'
import './css/Burger.css'
import Selected_burger from './Selected_burger'
function Burger() {
  const burgerInfos=[
    {
      name :"더블 쿼터파운더® 치즈",
      price : "7,400",
      set_price : "8,800",
      calory : "769",
      set_calory : "1,101~1250",
      img_src :"/images/더쿼치.png"
    },
    {
      name :"쿼터파운더® 치즈 BBQ 베이컨",
      price : "6,800",
      set_price : "8,500",
      calory : "560",
      set_calory : "1,101~1250",
      img_src :"/images/쿼치베.png"
    },
    {
      name :"쿼터파운더® 치즈",
      price : "5,500",
      set_price : "7,200",
      calory : "534",
      set_calory : "1,101~1250",
      img_src :"/images/쿼터파운더_치즈.png"
    },
    {
      name :"맥크리스피™ 디럭스 버거",
      price : "6,700",
      set_price : "7,900",
      calory : "594",
      set_calory : "1,101~1250",
      img_src :"/images/맥크리스피_디럭스.png"
    },
    {
      name :"맥크리스피™ 클래식 버거",
      price : "5,900",
      set_price : "7,100",
      calory : "584",
      set_calory : "1,101~1250",
      img_src :"/images/맥크리스피_클래식.png"
    },
    {
      name :"빅맥®",
      price : "4,900",
      set_price : "6,200",
      calory : "583",
      set_calory : "1,101~1250",
      img_src :"/images/빅맥.png"
    },
    {
      name :"맥스파이시® 상하이 버거",
      price : "4,900",
      set_price : "6,200",
      calory : "494",
      img_src :"/images/상하이.png"
    },
    {
      name :"1955® 버거",
      price : "6,000",
      set_price : "6,000",
      calory : "537",
      img_src :"/images/1955.png"
    },
    {
      name :"맥치킨® 모짜렐라",
      price : "5,000",
      set_price : "6,200",
      calory : "686",
      img_src :"/images/맥치킨_모짜렐라.png"
    },
    {
      name :"맥치킨®",
      price : "3,500",
      set_price : "6,200",
      calory : "483",
      img_src :"/images/맥치킨.png"
    },
    {
      name :"더블 불고기 버거",
      price : "4,500",
      set_price : "6,200",
      calory : "636",
      img_src :"/images/더블_불고기.png"
    },
    {
      name :"에그 불고기 버거",
      price : "2,200",
      set_price : "6,200",
      calory : "149",
      img_src :"/images/에그_불고기.png"
    },
    {
      name :"불고기 버거",
      price : "4,500",
      set_price : "2,200",
      calory : "537",
      img_src :"/images/불고기.png"
    },
    {
      name :"슈슈 버거",
      price : "4,700",
      set_price : "6,000",
      calory : "686",
      img_src :"/images/슈슈.png"
    },
    {
      name :"슈비 버거",
      price : "5,800",
      set_price : "7,400",
      calory : "483",
      img_src :"/images/슈비.png"
    },
    {
      name :"베이컨 토마토 디럭스",
      price : "5,800",
      set_price : "7,400",
      calory : "636",
      img_src :"/images/베토디.png"
    },
    {
      name :"치즈버거",
      price : "2,500",
      set_price : "4,700",
      calory : "149",
      img_src :"/images/치즈.png"
    },
    {
      name :"더블 치즈버거",
      price : "4,500",
      set_price : "6,000",
      calory : "636",
      img_src :"/images/더블_치즈.png"
    },
    {
      name :"햄버거",
      price : "2,200",
      calory : "149",
      img_src :"/images/햄버거.png"
    },
  ]
  return (
    <div className="rightMenu" style={{overflowY:"hidden"}}>
      
      <h1 style={{textAlign:"left", marginBottom:"10px"}}>버거</h1>
      <div style={{textAlign:"left", marginBottom:"5px",fontSize:"12px",fontWeight: "400",lineHeight: "15px"}}>아래에서 세부메뉴를 확인하세요</div>
      <div className="burgerCategoryGrid">
        <div className="burgerCategory">전체</div>
        <div className="burgerCategory">불고기</div>
        <div className="burgerCategory">치킨</div>
        <div className="burgerCategory">비프</div>
        <div className="burgerCategory">씨푸드</div>
        <div className="burgerCategory">그외</div>
      </div>
      <div className="burgerGrid" style={{}}>
        {burgerInfos.map((v) =>{
          return(
            <div className="menuSelectBox" onClick={()=>{console.log(v)}}>
              <div>
                <img src={v.img_src} width="85px" height="60px"/>
                <div style={{ display:"flex",height:"26.67px",width :"72px",alignItems:"flex-end",fontWeight :"500",textAlign:"left",margin:"auto"}}>{v.name} </div>
                <div style={{fontWeight: "700"}}>₩{v.price} {v.calory}Kcal</div>
            </div>
          </div> 
          );
        })}
      </div>    
    </div>
  )
}

export default Burger
