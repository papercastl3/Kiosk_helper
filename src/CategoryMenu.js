import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/CategoryMenu.css'
function CategoryMenu() {
    let [clicked,setClicked]=useState([false,false,false,false,false,false,false,false,false,false])
    const catClicked=()=>{

    }
    let navigate =useNavigate();
    return (
    <div className="leftCategory">
        <div className="logoBox">
            <img src="/images/mc_logo.svg" width="74px" height="49px" alt="로고" />
        </div>
        <div className="categoryBox"  onClick={()=>{navigate('/menu');}}>
            <img src ="/images/mc_logo.svg" width="18px" height="18px" style={{marginLeft :"5px"}} />
            <div className="categoryName" style={{ clicked : {textDecoration: "underline" ,textUnderlinePosition:"under", textDecorationColor :"#FFBC0D"}}} >홈</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/recommended');}}>
            <img src="/images/추천메뉴.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName">추천메뉴</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/mcLunch');}}>
            <img src="/images/맥런치.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{}}>맥런치</div>
            {/* style={{border: EiClicked ? '2px solid #FFBC0D':' 0.5px solid rgba(0, 0, 0, 0.5)'}} */}
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/burger');}}>
            <img src="/images/맥런치.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{}}>버거</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/happySnack');}}>
            <img src="/images/해피스낵.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{}}>해피스낵</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/side');}}>
            <img src="/images/사이드.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{}}>사이드</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/coffee');}}>
            <img src="/images/커피.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{}}>커피</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/dessert');}}>
            <img src="/images/디저트.svg" width="18px" height="18px" style={{marginLeft:"5px"}}/>
            <div className="categoryName" style={{}}>디저트</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/beverage');}}>
            <img src="/images/음료.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{}}>음료</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/happyMeal');}} style={{borderStyle: "solid solid solid none"}}>
            <img src="/images/해피밀.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{}}>해피밀</div>
        </div>
    </div>
  )
}

export default CategoryMenu
