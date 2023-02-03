import React from "react";
import {useNavigate} from 'react-router-dom';
import {useState} from 'react'
import qr_btn_s from './img/qr_btn_s.svg'
import eat_in from './img/eat_in.svg'
import take_out from './img/take_out.svg'
import logo from './img/mc_logo.svg'
import nutri_text from './img/nutri_text.svg'

function Screen2(){ //매장 or 포장 선택 화면
    let navigate =useNavigate();
    const [ToClicked,setToClicked]=useState(false); //포장
    const [EiClicked,setEiClicked]=useState(false); //매장
  
    const [EnClicked,setEnClicked]=useState(false); //영어
    const [KrClicked,setKrClicked]=useState(true); //한국어
  
    const EiClickEvent=()=>{
      if(!EiClicked){ 
        setEiClicked(true);
        setToClicked(false);
        navigate('/menu');
      }
    }
  
    function ToClickEvent(){
      if(!ToClicked){ 
        setToClicked(true);
        setEiClicked(false);
        navigate('/menu');
      }
    }
  
    const EnClickEvent=()=>{
      if(!EnClicked){ 
        setEnClicked(true);
        setKrClicked(false);
      }
    }
  
    function KrClickEvent(){
      if(!KrClicked){ 
        setKrClicked(true);
        setEnClicked(false);
      }
    }
    return(
      <div className="screen">
        <img src={logo} width ="18px" height="18px" style={{marginTop:"20px"}} alt="로고"></img>
        <div style={{fontSize :"30px",fontWeight :"550"}}>식사 장소를 {'\n'} 선택해 주세요</div>
        <div className="btn_box">
          <div className="btn" id="Ei" style={{border: EiClicked ? '2px solid #FFBC0D':' 0.5px solid rgba(0, 0, 0, 0.5)'}} onClick={()=>EiClickEvent()} >
            <div className="text_area">매장</div>
            <img src={eat_in} alt="매장 이미지"/> 
          </div>
          <div className="btn" id="To" style={{border: ToClicked ? '2px solid #FFBC0D':' 0.5px solid rgba(0, 0, 0, 0.5)'}} onClick={()=>ToClickEvent()}>
            <div className="text_area">포장</div>
            <img src={take_out} alt="포장 이미지"/> 
          </div>
        </div>
        <div style={{fontSize:"10px",fontWeight :"530", marginBottom:"20px"}}>
          언어 선택
        </div>
        <div className = "lang_select_boxes">
          <div className ="lsb" id="Eng" style={{border: EnClicked ? '2px solid #FFBC0D':' 0.5px solid rgba(0, 0, 0, 0.5)'}} onClick={()=>EnClickEvent()}>
            English
          </div>
          <div className ="lsb" id="Kr" style={{border: KrClicked ? '2px solid #FFBC0D':' 0.5px solid rgba(0, 0, 0, 0.5)'}} onClick={()=>KrClickEvent()}>
            한국어
          </div>
        </div>
        <div className="footer_box">
          <img src={qr_btn_s} style={{marginLeft:"40px",marginRight:"15px"}} alt="qr버튼"/>
          <div className="footer_btns"> 
            <div className="back_btns">
              <div className="back_btn" onClick={()=>{navigate('/')}}>처음으로</div>
              <div className="back_btn">도움기능...</div>
            </div>
            <div style={{width:"260px",height:"14px",display:"flex-start"}}>
              <img src={nutri_text} alt="영양정보"/>
            </div>
        </div>
        </div>
  
      </div>
    );
  }

  export default Screen2;