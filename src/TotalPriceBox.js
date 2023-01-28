import React from 'react'
import {useNavigate} from 'react-router-dom';
import './TotalPriceBox.css'
import qr_btn_s from'./qr_btn_s.svg'
import nutri_text from'./nutri_text.svg'

function TotalPriceBox() {
  let navigate=useNavigate();
  return (
    <div className="footer_box2">
        <img src={qr_btn_s} style={{marginLeft:"40px",marginRight:"15px"}} alt="qr버튼"/>
        <div className="footer_btns"> 
            <div className="price">￦</div>
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
