import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from './img/mc_logo.svg'
import img1 from './img/홈.svg'
import img2 from './img/추천메뉴.svg'
import img3 from './img/맥런치.svg'
import img4 from './img/해피스낵.svg'
import img5 from './img/사이드.svg'
import img6 from './img/커피.svg'
import img7 from './img/디저트.svg'
import img8 from './img/음료.svg'
import img9 from './img/해피밀.svg'
import './css/CategoryMenu.css'
function CategoryMenu() {
    let navigate =useNavigate();
    return (
    <div className="leftCategory">
        <div className="logoBox">
            <img src={logo} width="74px" height="49px" alt="로고" />
        </div>
        <div className="categoryBox"  onClick={()=>{navigate('/menu');}}>
            <img src={img1} width="18px" height="18px" style={{marginLeft :"5px"}} />
            <div className="categoryName">홈</div>
            {/* style={{ textDecoration: "underline" ,textUnderlinePosition:"under", textDecorationColor :"#FFBC0D"}} */}
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/recommended');}}>
            <img src={img2} width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName">추천메뉴</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/mcLunch');}}>
            <img src={img3} width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{}}>맥런치</div>
            {/* style={{border: EiClicked ? '2px solid #FFBC0D':' 0.5px solid rgba(0, 0, 0, 0.5)'}} */}
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/burger');}}>
            <img src={img3} width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{}}>버거</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/happySnack');}}>
            <img src={img4} width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{}}>해피스낵</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/side');}}>
            <img src={img5} width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{}}>사이드</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/coffee');}}>
            <img src={img6} width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{}}>커피</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/dessert');}}>
            <img src={img7} width="18px" height="18px" style={{marginLeft:"5px"}}/>
            <div className="categoryName" style={{}}>디저트</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/beverage');}}>
            <img src={img8} width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{}}>음료</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/happyMeal');}} style={{borderStyle: "solid solid solid none"}}>
            <img src={img9} width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{}}>해피밀</div>
        </div>
    </div>
  )
}

export default CategoryMenu
