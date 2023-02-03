import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './css/TotalPriceBox.css'
import qr_btn_s from'./img/qr_btn_s.svg'
import nutri_text from'./img/nutri_text.svg'
import quantity from './img/quantity.svg'

function TotalPriceBox() {
  // const [price,setPrcice] =useState(0);
  // const [quantity,setquantity] =useState(0); 상위 컴포너트에서 use context로 쓰자
  let navigate=useNavigate();
  return (
    <div className="footer_box2">
        <img src={qr_btn_s} style={{marginLeft:"40px",marginRight:"15px",marginTop:"10px"}} alt="qr버튼"/>
        <div className="footer_btns2"> 
          <div className="priceBox">
            <img src={quantity} width="34.5px" height="34.5px"/>
            <span className='quantity'>7</span>
            <div className="price">
              ₩0{}
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
              <img src={nutri_text} alt="영양정보"/>
          </div>
        </div>
    </div>
  );
}

export default TotalPriceBox
