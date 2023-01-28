import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from './mc_logo.svg'
import './Screen3.css'
function CategoryMenu() {
    let navigate =useNavigate();
    return (
    <div className="leftCategory">
        <div className="logoBox">
            <img src={logo} width="74px" height="49px" alt="로고"/>
        </div>
        <div className="categoryBox"  onClick={()=>{navigate('/menu/home');}}>
            <p style={{textDecoration: "underline" ,textUnderlinePosition:"under", textDecorationColor :"#FFBC0D"}}>홈</p>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/recommended');}}>
            추천메뉴
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/mcLunch');}}>
            맥런치
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/burger');}}>
            버거
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/happySnack');}}>
            해피스낵
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/side');}}>
            사이드
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/coffee');}}>
            커피
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/dessert');}}>
            디저트
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/beverage');}}>
            음료
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/happyMeal');}} style={{borderStyle: "solid solid solid none"}}>
            해피밀
        </div>
    </div>
  )
}

export default CategoryMenu
