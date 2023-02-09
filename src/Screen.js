import React from 'react';
import { useState, useRef,useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import {useNavigate} from 'react-router-dom';

function Screen(){ //초기화면 with ad
  let navigate =useNavigate();
  const ad_src=["/images/ad1.svg","/images/ad2.svg"]
    let [src,setSrc] =useState("/images/ad1.svg");
    useEffect(() => {
      const timer = setTimeout(() => console.log('Initial timeout!'), 1000);
      return () => clearTimeout(timer);
    }, []);

    return(
      <div className="screen">
        <Fade>
        <img src={src} alt="광고" />
        {/* <img src="/images/ad1.svg" alt="광고" /> */}
        </Fade>
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