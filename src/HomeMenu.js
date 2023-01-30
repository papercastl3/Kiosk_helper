import React from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from './img/추천메뉴_L.svg'
import img2 from './img/맥런치_L.svg'
import img3 from './img/해피스낵_L.svg'
import img4 from './img/커피and디저트.svg'
import ad1 from './img/메뉴_ad1.svg'
import ad2 from './img/메뉴_ad2.svg'
import ad3 from './img/메뉴_ad3.svg'

import bg1 from './img/빅맥.png'
import bg2 from './img/상하이.png'
import bg3 from './img/치토스.png'
import './css/HomeMenu.css'

function HomeMenu() {
    let navigate=useNavigate();
    return (
    <div className="rightMenu">
        <h1 style={{textAlign:"left", fontSize:"15px",marginTop:"40px"}}>메뉴 알아보기</h1>
        <div className="menuBox">
            <div className="menuCategory" onClick={()=>{navigate('/menu/recommended')}}>
                <div>추천메뉴</div>
                <img src={img1} />
            </div>
            <div className="menuCategory" onClick={()=>{navigate('/menu/mcLunch')}}>
                <div>맥런치</div>
                <img src={img2} />
            </div>
        </div>
        <div className="menuBox">
            <div className="menuCategory" onClick={()=>{navigate('/menu/happySnack')}}>
                <div>이달의{'\n'}해피스낵</div>
                <img src={img3} />
            </div>
            <div className="menuCategory" onClick={()=>{navigate('/menu/dessert')}}>
                <div>커피&디저트</div>
                <img src={img4} />
                </div>
        </div>
        <div className="adBox" style={{marginTop:"5px"}}>
            <img src={ad1}/>
        </div>
        <div className="adBox">
            <img src={ad2}/>
        </div>
        <div className="adBox">
            <img src={ad3}/>
        </div>
        <h1 style={{textAlign:"left", fontSize:"15px",marginTop:"5px"}}>인기 메뉴</h1>
        <div className="gridContainer">
            <div className="menuSelectBox">
                <div>
                    <img src={bg1} width="85px" height="60px"/>
                    <div>빅맥™ ® </div>
                    <div style={{fontWeight: "700"}}>₩4,900 594Kcal</div>
                </div>
            </div>
            <div className="menuSelectBox">
                <div>
                    <img src={bg2} width="85px" height="60px"/>
                    <div>맥스파이시® 상하이 버거</div>
                    <div style={{fontWeight: "700"}}>₩4,900 494Kcal</div>
                </div>
            </div>
            <div className="menuSelectBox">
                <div>
                    <img src={bg3} width="85px" height="60px"/>
                    <div>치킨 토마토 스낵랩</div>
                    <div style={{fontWeight: "700"}}>₩2,200 264Kcal</div>
                </div>
            </div>
            <div className="menuSelectBox">1</div>
            <div className="menuSelectBox">1</div>
            <div className="menuSelectBox">1</div>
            <div className="menuSelectBox">1</div>
            <div className="menuSelectBox">1</div>
        </div>
    </div>
  )
}

export default HomeMenu
