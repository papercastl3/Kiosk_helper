import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Screen from './Screen.js'
import Screen2 from './Screen2.js'
import Screen3 from './Screen3.js'

function Kiosk(){ //Kiosk component => 사용자 정의 함수= > 컴포넌트는 리액트의 본질
    return(
      <BrowserRouter>
        <div className="kiosk">
          <div className="top">
            <Routes>
              <Route path='/' element={<Screen/>} /> {/* 초기화면 with ad */}
              <Route path='/screen2' element={<Screen2/>} /> {/* 매장 or 포장 선택 화면*/}
              <Route path='/menu/*' element={<Screen3/>} /> {/* 메뉴판 */}
            </Routes>
          </div>
          <div className="bottom">
              <div className="receipt_box">
                  <img src="/images/receipt.svg" alt="영수증 나오는 곳"/>
              </div>
              <div className="card_box">
                  <img src="/images/card_barcode.svg" alt="카드 투입구"/>
              </div>
          </div>
        </div> 
      </BrowserRouter>
    );
  }

  export default Kiosk;