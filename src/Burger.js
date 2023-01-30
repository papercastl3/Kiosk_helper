import React from 'react'
import bg1 from'./img/빅맥.png'
import bg2 from'./img/상하이.png'
import bg3 from'./img/치토스.png'
import './css/Burger.css'
function Burger() {
  return (
    <div>
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
      <div className="burgerGrid">
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
        <div className="menuSelectBox">
          <div>
              <img src={bg3} width="85px" height="60px"/>
              <div>치킨 토마토 스낵랩</div>
              <div style={{fontWeight: "700"}}>₩2,200 264Kcal</div>
          </div>
        </div>
        <div className="menuSelectBox">
          <div>
              <img src={bg3} width="85px" height="60px"/>
              <div>치킨 토마토 스낵랩</div>
              <div style={{fontWeight: "700"}}>₩2,200 264Kcal</div>
          </div>
        </div>
        <div className="menuSelectBox">
          <div>
              <img src={bg3} width="85px" height="60px"/>
              <div>치킨 토마토 스낵랩</div>
              <div style={{fontWeight: "700"}}>₩2,200 264Kcal</div>
          </div>
        </div>
        <div className="menuSelectBox">
          <div>
              <img src={bg3} width="85px" height="60px"/>
              <div>치킨 토마토 스낵랩</div>
              <div style={{fontWeight: "700"}}>₩2,200 264Kcal</div>
          </div>
        </div>
        <div className="menuSelectBox">
          <div>
              <img src={bg3} width="85px" height="60px"/>
              <div>치킨 토마토 스낵랩</div>
              <div style={{fontWeight: "700"}}>₩2,200 264Kcal</div>
          </div>
        </div>
        <div className="menuSelectBox">
          <div>
              <img src={bg3} width="85px" height="60px"/>
              <div>치킨 토마토 스낵랩</div>
              <div style={{fontWeight: "700"}}>₩2,200 264Kcal</div>
          </div>
        </div>
        <div className="menuSelectBox">
          <div>
              <img src={bg3} width="85px" height="60px"/>
              <div>치킨 토마토 스낵랩</div>
              <div style={{fontWeight: "700"}}>₩2,200 264Kcal</div>
          </div>
        </div>
        <div className="menuSelectBox">
          <div>
              <img src={bg3} width="85px" height="60px"/>
              <div>치킨 토마토 스낵랩</div>
              <div style={{fontWeight: "700"}}>₩2,200 264Kcal</div>
          </div>
        </div>
        <div className="menuSelectBox">
          <div>
              <img src={bg3} width="85px" height="60px"/>
              <div>치킨 토마토 스낵랩</div>
              <div style={{fontWeight: "700"}}>₩2,200 264Kcal</div>
          </div>
        </div>
        <div className="menuSelectBox">
          <div>
              <img src={bg3} width="85px" height="60px"/>
              <div>치킨 토마토 스낵랩</div>
              <div style={{fontWeight: "700"}}>₩2,200 264Kcal</div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Burger
