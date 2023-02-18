import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import './css/HomeMenu.css'
import { Fade,Slide } from 'react-awesome-reveal';
import SelectedMenu from './SelectedMenu';
import { DataContext } from './Screen3';

const PopularInfos =[
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
        name :"베이컨 토마토 디럭스",
        price : "5,800",
        set_price : "7,400",
        calory : "636",
        img_src :"/images/베토디.png",
        set_img_src:"/images/베토디세트.png"
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
        name :"슈비 버거",
        price : "5,800",
        set_price : "7,400",
        calory : "483",
        img_src :"/images/슈비.png",
        set_img_src:"/images/슈비세트.png"
      },
]
function HomeMenu({clicked,setOrder}) {
    const {fromHomeClicked,setFHC} = useContext(DataContext); //useContextAPI 사용
    let navigate=useNavigate();
    return (
    <div className="rightMenu" style={{height:"556px"}}>
        <h1 style={{textAlign:"left", fontSize:"15px",marginTop:"40px"}}>메뉴 알아보기</h1>
        <Fade direction="up" fraction={0}  duration="700" triggerOnce="true">
        <div >
        <div className="menuBox">
            <div className="menuCategory" onClick={()=>{navigate('/menu/recommended');setFHC("추천메뉴");}}>
                <div>추천메뉴</div>
                <img loading="lazy" src="/images/추천메뉴_L.svg" />
            </div>
            <div className="menuCategory" onClick={()=>{navigate('/menu/mcLunch'); setFHC("맥런치");}}>
                <div>맥런치</div>
                <img loading="lazy" src="/images/맥런치_L.svg" />
            </div>
        </div>
        <div className="menuBox">
            <div className="menuCategory" onClick={()=>{navigate('/menu/happySnack'); setFHC("해피스낵");}}>
                <div>이달의{'\n'}해피스낵</div>
                <img loading="lazy" src="/images/해피스낵_L.svg" />
            </div>
            <div className="menuCategory" onClick={()=>{navigate('/menu/dessert'); setFHC("커피&디저트");}}>
                <div>커피&디저트</div>
                <img loading="lazy" src="/images/커피and디저트.svg" />
                </div>
        </div>
        <div className="adBox" style={{marginTop:"5px"}}>
            <img loading="lazy" src="/images/메뉴_ad1.svg"/>
        </div>
        <div className="adBox">
            <img loading="lazy" src="/images/메뉴_ad2.svg"/>
        </div>
        <div className="adBox">
            <img loading="lazy" src="/images/메뉴_ad3.svg"/>
        </div>
        <h1 style={{textAlign:"left", fontSize:"15px",marginTop:"5px"}}>인기 메뉴</h1>
        <div className="gridContainer">
            {PopularInfos.map((v) =>{
                return(
                <SelectedMenu Infos={v} clicked={clicked} setOrder={setOrder} key={v.name.toString()}/>
                );
            })}
        </div>
        </div>
        </Fade>
    </div>
  )
}

export default HomeMenu
