import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import './css/TotalPriceBox.css'


function TotalPriceBox() {
  const [price,setPrcice] =useState(0);
  const [quantity,setquantity] =useState(0); //상위 컴포너트에서 use context로 쓰자
  let navigate=useNavigate();
  return (
    <Fade  duration={700} fraction={0}>
    <div className="footer_box2">
        <img src="/images/qr_btn_s.svg" style={{marginLeft:"40px",marginRight:"15px",marginTop:"10px"}} alt="qr버튼"/>
        <div className="footer_btns2"> 
          <div className="priceBox">
            <img src="/images/quantity.svg" width="27px" height="30px" style={{marginBottom:"10px"}}/>
            <span className='quantity'>{quantity}</span>
            <div className="price">
              ₩{price}
            </div>
            <div className="orderChkBtn" style={{}}>
                주문내역 확인 후 결제하기
            </div>
          </div>
          <div className="back_btns2">
              <div className="back_btn" onClick={()=>{navigate('/')}}>처음으로</div>
              <div className="back_btn">도움기능...</div>
          </div>
          <div style={{width:"260px",height:"14px",display:"flex-start"}}>
              <img src="/images/nutri_text.svg" alt="영양정보"/>
          </div>
        </div>
    </div>
    </Fade>
  );
}

export default TotalPriceBox
