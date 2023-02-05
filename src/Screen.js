import React from 'react';
import {useNavigate} from 'react-router-dom';

function Screen(){ //초기화면 with ad
  let navigate =useNavigate();
    return(
      <div className="screen">
        <img src="/images/ad2.svg" alt="광고" />
          <div className="order_box">
            <img src="/images/qr_btn_m.svg" id="qr" alt="qr버튼"/>
            <div className="order_btns">
              <div className="order_btn" onClick={()=>{navigate('/screen2');}}>주문하기
                <div>(Start Order)</div>
              </div>
              <div className ="sub_btn" id="lang">
                언어선택
              </div>
              <div className ="sub_btn" id="help">
                도움기능
              </div>
            </div>
          </div>
      </div>
    );
  }

export default Screen;