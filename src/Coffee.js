import React from 'react'
import SelectedMenu from './SelectedMenu';
import { useState } from 'react';
function Coffee({clicked,setOrder}) {
const CoffeeInfos=[
    {
      name :"바닐라 라떼",
      price : "3,500",
      calory : "227",
      img_src :"/images/바닐라라떼.png"
    },
    {
      name :"아이스 바닐라 라떼",
      price : "3,500",
      calory : "344",
      img_src :"/images/아이스바닐라라떼.png"
    },
    {
      name :"카페라떼",
      price : "2,500",
      calory : "350",
      img_src :"/images/카페라떼.png"
    },
    {
      name :"디카페인 카페라떼",
      price : "2,500",
      calory : "344",
      img_src :"/images/디카페인_카페라떼.png"
    },
    {
      name :"아이스 카페라떼",
      price : "3,000",
      calory : "?",
      img_src :"/images/아이스카페라떼.png"
    },
    {
      name :"디카페인 아이스 카페라떼",
      price : "2,200",
      calory : "143",
      img_src :"/images/디카페인아이스카페라떼.png"
    },
    {
      name :"아메리카노",
      price : "2,200",
      calory : "0",
      img_src :"/images/아메리카노.png"
    },
    {
      name :"디카페인 아메리카노",
      price : "2,200",
      calory : "149",
      img_src :"/images/디카페인_아메리카노.png"
    },
    {
      name :"아이스 아메리카노",
      price : "2,200",
      calory : "62",
      img_src :"/images/아이스_아메리카노.png"
    },
    {
      name :"디카페인 아이스 아메리카노",
      price : "2,200",
      calory : "0",
      img_src :"/images/디카페인_아아.png"
    },
    {
      name :"카푸치노",
      price : "2,200",
      calory : "149",
      img_src :"/images/카푸치노.png"
    },
    {
      name :"디카페인 카푸치노",
      price : "2,200",
      calory : "149",
      img_src :"/images/디카페인_카푸치노.png"
    },
    {
      name :"에스프레소",
      price : "2,200",
      calory : "62",
      img_src :"/images/에스프레소.png"
    },
    {
      name :"디카페인 에스프레소",
      price : "1,900",
      calory : "15",
      img_src :"/images/디카페인_에스프레소.png"
    },
    {
      name :"드립 커피",
      price : "2,200",
      calory : "194",
      img_src :"/images/드립커피.png"
    },
    {
      name :"아이스 드립 커피",
      price : "2,200",
      calory : "194",
      img_src :"/images/아이스드립커피.png"
    },
  ]
  return (
    <div className="rightMenu" style={{overflowY:"hidden"}}>
      <h1 style={{textAlign:"left", marginBottom:"10px"}}>커피</h1>
      <div style={{textAlign:"left", marginBottom:"5px",fontSize:"12px",fontWeight: "400",lineHeight: "15px"}}></div>
      <div className="gridWrap">
        <div className="HappySnackGrid" style={{overflowY:"hidden"}}>
          {CoffeeInfos.map((v) =>{
            return(
              <SelectedMenu Infos={v} clicked={clicked} setOrder={setOrder}/>
            );
          })}
        </div>
      </div>
    </div>
  )
}
export default Coffee
