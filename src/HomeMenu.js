import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/HomeMenu.css'

function HomeMenu() {
    let navigate=useNavigate();
    return (
    <div className="rightMenu">
        <h1 style={{textAlign:"left", fontSize:"15px",marginTop:"40px"}}>메뉴 알아보기</h1>
        <div className="menuBox">
            <div className="menuCategory" onClick={()=>{navigate('/menu/recommended')}}>
                <div>추천메뉴</div>
                <img loading="lazy" src="/images/추천메뉴_L.svg" />
            </div>
            <div className="menuCategory" onClick={()=>{navigate('/menu/mcLunch')}}>
                <div>맥런치</div>
                <img loading="lazy" src="/images/맥런치_L.svg" />
            </div>
        </div>
        <div className="menuBox">
            <div className="menuCategory" onClick={()=>{navigate('/menu/happySnack')}}>
                <div>이달의{'\n'}해피스낵</div>
                <img loading="lazy" src="/images/해피스낵_L.svg" />
            </div>
            <div className="menuCategory" onClick={()=>{navigate('/menu/dessert')}}>
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
            <div className="menuSelectBox" value="4900">
                <div>
                    <img loading="lazy" src="/images/상하이.png" width="85px" height="60px"/>
                    <div>빅맥™ ® </div>
                    <div style={{fontWeight: "700"}}>₩4,900 594Kcal</div>
                </div>
            </div>
            <div className="menuSelectBox">
                <div>
                    <img loading="lazy" src="/images/상하이.png" width="85px" height="60px"/>
                    <div>맥스파이시® 상하이 버거</div>
                    <div style={{fontWeight: "700"}}>₩4,900 494Kcal</div>
                </div>
            </div>
            <div className="menuSelectBox">
                <div>
                    <img loading="lazy" src="/images/상하이.png" width="85px" height="60px"/>
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
