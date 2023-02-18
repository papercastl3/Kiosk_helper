import React from 'react'
import './css/Burger.css'
import SelectedMenu from './SelectedMenu';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
// import Selected_burger from './Selected_burger'
function Burger({clicked, setOrder}) {
  const [burgerCategory, setBurgerCateogry] =useState("전체");
  const AllBurgerInfos=[
    {
      name :"더블 쿼터파운더® 치즈",
      price : "7,400",
      set_price : "8,800",
      calory : "769",
      set_calory : "1,101~1250",
      img_src :"/images/더쿼치.png",
      set_img_src:"/images/더쿼치세트.png"
    },
    {
      name :"쿼터파운더® 치즈 BBQ 베이컨",
      price : "6,800",
      set_price : "8,500",
      calory : "560",
      set_calory : "1,101~1250",
      img_src :"/images/쿼치베.png",
      set_img_src:"/images/쿼터파운더BBQ세트.png"
    },
    {
      name :"쿼터파운더® 치즈",
      price : "5,500",
      set_price : "7,200",
      calory : "534",
      set_calory : "1,101~1250",
      img_src :"/images/쿼터파운더_치즈.png",
      set_img_src:"/images/쿼치세트.png"
    },
    {
      name :"맥크리스피™ 디럭스 버거",
      price : "6,700",
      set_price : "7,900",
      calory : "594",
      set_calory : "1,101~1250",
      img_src :"/images/맥크리스피_디럭스.png",
      set_img_src:"/images/맥디세트.png"
    },
    {
      name :"맥크리스피™ 클래식 버거",
      price : "5,900",
      set_price : "7,100",
      calory : "584",
      set_calory : "1,101~1250",
      img_src :"/images/맥크리스피_클래식.png",
      set_img_src:"/images/맥클세트.png"
    },
    {
      name :"빅맥®",
      price : "4,900",
      set_price : "6,200",
      calory : "583",
      set_calory : "1,101~1250",
      img_src :"/images/빅맥.png",
      set_img_src:"/images/빅맥세트.png"
    },
    {
      name :"맥스파이시® 상하이 버거",
      price : "4,900",
      set_price : "6,200",
      calory : "494",
      img_src :"/images/상하이.png",
      set_img_src:"/images/상하이세트.png"
    },
    {
      name :"1955® 버거",
      price : "6,000",
      set_price : "6,000",
      calory : "537",
      img_src :"/images/1955.png",
      set_img_src:"/images/1955세트.png"
    },
    {
      name :"맥치킨® 모짜렐라",
      price : "5,000",
      set_price : "6,200",
      calory : "686",
      img_src :"/images/맥치킨_모짜렐라.png",
      set_img_src:"/images/맥모짜세트.png"
    },
    {
      name :"맥치킨®",
      price : "3,500",
      set_price : "6,200",
      calory : "483",
      img_src :"/images/맥치킨.png",
      set_img_src:"/images/맥치킨세트.png"
    },
    {
      name :"더블 불고기 버거",
      price : "4,500",
      set_price : "6,200",
      calory : "636",
      img_src :"/images/더블_불고기.png",
      set_img_src:"/images/더블불고기세트.png"
    },
    {
      name :"에그 불고기 버거",
      price : "2,200",
      set_price : "6,200",
      calory : "149",
      img_src :"/images/에그_불고기.png",
      set_img_src:"/images/에그불고기세트.png"
    },
    {
      name :"불고기 버거",
      price : "4,500",
      set_price : "2,200",
      calory : "537",
      img_src :"/images/불고기.png",
      set_img_src:"/images/불고기세트.png"
    },
    {
      name :"슈슈 버거",
      price : "4,700",
      set_price : "6,000",
      calory : "686",
      img_src :"/images/슈슈.png",
      set_img_src:"/images/슈슈세트.png"
    },
    {
      name :"슈비 버거",
      price : "5,800",
      set_price : "7,400",
      calory : "483",
      img_src :"/images/슈비.png",
      set_img_src:"/images/슈비세트.png"
    },
    {
      name :"베이컨 토마토 디럭스",
      price : "5,800",
      set_price : "7,400",
      calory : "636",
      img_src :"/images/베토디.png",
      set_img_src:"/images/베토디세트.png"
    },
    {
      name :"치즈버거",
      price : "2,500",
      set_price : "4,700",
      calory : "149",
      img_src :"/images/치즈.png",
      set_img_src:"/images/치즈세트.png"
    },
    {
      name :"더블 치즈버거",
      price : "4,500",
      set_price : "6,000",
      calory : "636",
      img_src :"/images/더블_치즈.png",
      set_img_src:"/images/더블치즈세트.png"
    },
    {
      name :"햄버거",
      price : "2,200",
      calory : "149",
      img_src :"/images/햄버거.png",
      set_img_src:"/images/햄버거세트.png"
    },
  ];
  const BulgogiBurgerInfos=[
    {
      name :"더블 불고기 버거",
      price : "4,500",
      set_price : "6,200",
      calory : "636",
      img_src :"/images/더블_불고기.png",
      set_img_src:"/images/더블불고기세트.png"
    },
    {
      name :"에그 불고기 버거",
      price : "2,200",
      set_price : "6,200",
      calory : "149",
      img_src :"/images/에그_불고기.png",
      set_img_src:"/images/에그불고기세트.png"
    },
    {
      name :"불고기 버거",
      price : "4,500",
      set_price : "2,200",
      calory : "537",
      img_src :"/images/불고기.png",
      set_img_src:"/images/불고기세트.png"
    },
  ];
  const ChickenBurgerInfos=[
    {
      name :"맥크리스피™ 디럭스 버거",
      price : "6,700",
      set_price : "7,900",
      calory : "594",
      set_calory : "1,101~1250",
      img_src :"/images/맥크리스피_디럭스.png",
      set_img_src:"/images/맥디세트.png"
    },
    {
      name :"맥크리스피™ 클래식 버거",
      price : "5,900",
      set_price : "7,100",
      calory : "584",
      set_calory : "1,101~1250",
      img_src :"/images/맥크리스피_클래식.png",
      set_img_src:"/images/맥클세트.png"
    },
    {
      name :"맥스파이시® 상하이 버거",
      price : "4,900",
      set_price : "6,200",
      calory : "494",
      img_src :"/images/상하이.png",
      set_img_src:"/images/상하이세트.png"
    },
    {
      name :"맥치킨® 모짜렐라",
      price : "5,000",
      set_price : "6,200",
      calory : "686",
      img_src :"/images/맥치킨_모짜렐라.png",
      set_img_src:"/images/맥모짜세트.png"
    },
    {
      name :"맥치킨®",
      price : "3,500",
      set_price : "6,200",
      calory : "483",
      img_src :"/images/맥치킨.png",
      set_img_src:"/images/맥치킨세트.png"
    },
  ];
  const BeefBurgerInfos=[
    {
      name :"빅맥®",
      price : "4,900",
      set_price : "6,200",
      calory : "583",
      set_calory : "1,101~1250",
      img_src :"/images/빅맥.png",
      set_img_src:"/images/빅맥세트.png"
    },
    {
      name :"1955® 버거",
      price : "6,000",
      set_price : "6,000",
      calory : "537",
      img_src :"/images/1955.png",
      set_img_src:"/images/1955세트.png"
    },
    {
      name :"베이컨 토마토 디럭스",
      price : "5,800",
      set_price : "7,400",
      calory : "636",
      img_src :"/images/베토디.png",
      set_img_src:"/images/베토디세트.png"
    },
  ];
  const SeaFoodBurgerInfos=[
    {
      name :"슈슈 버거",
      price : "4,700",
      set_price : "6,000",
      calory : "686",
      img_src :"/images/슈슈.png",
      set_img_src:"/images/슈슈세트.png"
    },
    {
      name :"슈비 버거",
      price : "5,800",
      set_price : "7,400",
      calory : "483",
      img_src :"/images/슈비.png",
      set_img_src:"/images/슈비세트.png"
    },
  ];
  const OtherBurgerInfos=[
    {
      name :"더블 쿼터파운더® 치즈",
      price : "7,400",
      set_price : "8,800",
      calory : "769",
      set_calory : "1,101~1250",
      img_src :"/images/더쿼치.png",
      set_img_src:"/images/더쿼치세트.png"
    },
    {
      name :"쿼터파운더® 치즈 BBQ 베이컨",
      price : "6,800",
      set_price : "8,500",
      calory : "560",
      set_calory : "1,101~1250",
      img_src :"/images/쿼치베.png",
      set_img_src:"/images/쿼터파운더BBQ세트.png"
    },
    {
      name :"쿼터파운더® 치즈",
      price : "5,500",
      set_price : "7,200",
      calory : "534",
      set_calory : "1,101~1250",
      img_src :"/images/쿼터파운더_치즈.png",
      set_img_src:"/images/쿼치세트.png"
    },
    {
      name :"치즈버거",
      price : "2,500",
      set_price : "4,700",
      calory : "149",
      img_src :"/images/치즈.png",
      set_img_src:"/images/치즈세트.png"
    },
    {
      name :"더블 치즈버거",
      price : "4,500",
      set_price : "6,000",
      calory : "636",
      img_src :"/images/더블_치즈.png",
      set_img_src:"/images/더블치즈세트.png"
    },
    {
      name :"햄버거",
      price : "2,200",
      calory : "149",
      img_src :"/images/햄버거.png",
      set_img_src:"/images/햄버거세트.png"
    },
  ];
  const SetCategory=(cat)=>{
    setBurgerCateogry(cat);
  }
  return (
    <div className="rightMenu" style={{overflow:"hidden"}}>
      
      <h1 style={{textAlign:"left", marginBottom:"10px"}}>버거</h1>
      <div style={{textAlign:"left", marginBottom:"5px",fontSize:"12px",fontWeight: "400",lineHeight: "15px"}}>아래에서 세부메뉴를 확인하세요</div>
      <Fade direction='right'>
      <div className="burgerCategoryGrid">
        <div className="burgerCategory" onClick={()=>SetCategory("전체")} style={{ boxShadow:burgerCategory==="전체" ? "inset 0px 2px 2px rgba(0, 0, 0, 0.35)" :"none"}} >전체</div>
        <div className="burgerCategory" onClick={()=>SetCategory("불고기")} style={{ boxShadow:burgerCategory==="불고기" ? "inset 0px 2px 2px rgba(0, 0, 0, 0.35)" :"none"}}>불고기</div>
        <div className="burgerCategory" onClick={()=>SetCategory("치킨")} style={{ boxShadow:burgerCategory==="치킨" ? "inset 0px 2px 2px rgba(0, 0, 0, 0.35)" :"none"}}>치킨</div>
        <div className="burgerCategory" onClick={()=>SetCategory("비프")} style={{ boxShadow:burgerCategory==="비프" ? "inset 0px 2px 2px rgba(0, 0, 0, 0.35)" :"none"}}>비프</div>
        <div className="burgerCategory" onClick={()=>SetCategory("씨푸드")} style={{ boxShadow:burgerCategory==="씨푸드" ? "inset 0px 2px 2px rgba(0, 0, 0, 0.35)" :"none"}}>씨푸드</div>
        <div className="burgerCategory" onClick={()=>SetCategory("그외")} style={{ boxShadow:burgerCategory==="그외" ? "inset 0px 2px 2px rgba(0, 0, 0, 0.35)" :"none"}}>그외</div>
      </div>
      </Fade >
      <Fade direction="up" fraction={0} triggerOnce="true" duration="700" className="gridWrap" style={{overflowY: (burgerCategory!="전체") ? "hidden" :"scroll"}}>
          <div className="burgerGrid" >
            {burgerCategory==="전체" && 
            AllBurgerInfos.map((v) =>{
              return(
                <SelectedMenu Infos={v} clicked={clicked} setOrder={setOrder} key={v.name.toString()}/>
              );
            })}

            {burgerCategory==="불고기" && 
            BulgogiBurgerInfos.map((v) =>{
              return(
                <SelectedMenu Infos={v} clicked={clicked} setOrder={setOrder} key={v.name.toString()}/>
              );
            })}

            {burgerCategory==="치킨" && 
            ChickenBurgerInfos.map((v) =>{
              return(
                <SelectedMenu Infos={v} clicked={clicked} setOrder={setOrder} key={v.name.toString()}/>
              );
            })}

            {burgerCategory==="비프" && 
            BeefBurgerInfos.map((v) =>{
              return(
                <SelectedMenu Infos={v} clicked={clicked} setOrder={setOrder} key={v.name.toString()}/>
              );
            })}

            {burgerCategory==="씨푸드" && 
            SeaFoodBurgerInfos.map((v) =>{
              return(
                <SelectedMenu Infos={v} clicked={clicked} setOrder={setOrder} key={v.name.toString()}/>
              );
            })} 

            {burgerCategory==="그외" && 
            OtherBurgerInfos.map((v) =>{
              return(
                <SelectedMenu Infos={v} clicked={clicked} setOrder={setOrder} key={v.name.toString()}/>
              );
            })}
          </div>
      </Fade>
    </div>
  )
}

export default Burger
