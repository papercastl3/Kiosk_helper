import {useState} from 'react'
// import {BrowseRouter, Route, Switch} from 'react-douter-dom'
import receipt from './receipt.svg'
import receipt_out from './receipt2.svg'
import card from './card_barcode.svg'
import qr_btn from './qr_btn_m.svg'
import qr_btn_s from './qr_btn_s.svg'
import ad1 from './ad1.svg'
import ad2 from './ad2.svg'
import eat_in from './eat_in.svg'
import take_out from './take_out.svg'
import logo from './mc_logo.svg'
import nutri_text from './nutri_text.svg'
import './App.css';
import './style2.css'

function Kiosk(){ //Kiosk component => 사용자 정의 함수= > 컴포넌트는 리액트의 본질
  return(
    <div className="kiosk">
      <div className="top">
          {/* <Screen></Screen> */}
          <Screen2></Screen2>
      </div>
      <div className="bottom">
          <div className="receipt_box">
              <img src={receipt} alt="영수증 나오는 곳"/>
          </div>
          <div className="card_box">
              <img src={card} alt="카드 투입구"/>
          </div>
      </div>
    </div> 
  );
}

function Screen(){ //초기화면 with ad
  return(
    <div className="screen">
      <img src={ad2} alt="광고" />
        <div className="order_box">
          <img src={qr_btn} id="qr"/>
          <div className="order_btns" onClick={function(event){
            event.preventDefault();
            console.log("clicked");
          }}>
            <div className="order_btn">주문하기
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

function Screen2(){ //매장 or 화면 선택
  const [ToClicked,setToClicked]=useState(false); //포장
  const [EiClicked,setEiClicked]=useState(false); //매장

  const [EnClicked,setEnClicked]=useState(false); //영어
  const [KrClicked,setKrClicked]=useState(true); //한국어

  const EiClickEvent=()=>{
    if(!EiClicked){ 
      setEiClicked(true);
      setToClicked(false)
    }
  }

  function ToClickEvent(){
    if(!ToClicked){ 
      setToClicked(true);
      setEiClicked(false);
    }
  }

  const EnClickEvent=()=>{
    if(!EnClicked){ 
      setEnClicked(true);
      setKrClicked(false)
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
      <img src={logo} width ="18px" height="18px" style={{marginTop:"20px"}}></img>
      <div style={{fontSize :"30px",fontWeight :"550"}}>식사 장소를 {'\n'} 선택해 주세요</div>
      <div className="btn_box">
        <div className="btn" id="Ei" style={{border: EiClicked ? '2px solid #FFBC0D':' 0.5px solid rgba(0, 0, 0, 0.5)'}} onClick={()=>EiClickEvent()} >
          <div className="text_area">매장</div>
          <img src={eat_in}/> 
        </div>
        <div className="btn" id="To" style={{border: ToClicked ? '2px solid #FFBC0D':' 0.5px solid rgba(0, 0, 0, 0.5)'}} onClick={()=>ToClickEvent()}>
          <div className="text_area">포장</div>
          <img src={take_out} id="take_out"/> 
        </div>
      </div>
      <div style={{fontSize:"10px",fontWeight :"530"}}>
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
        <img src={qr_btn_s} style={{marginLeft:"40px",marginRight:"15px"}}/>
        <div className="footer_btns"> 
          <div className="back_btns">
            <div className="back_btn">처음으로</div>
            <div className="back_btn">도움기능...</div>
          </div>
          <div style={{width:"260px",height:"14px",display:"flex-start"}}>
            <img src={nutri_text}/>
          </div>
      </div>
      </div>

    </div>
  );
}

function Screen3(){ //메인 화면
  return(
    <div className="screeen">
      화면 3
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <header>키오스크 연습하기</header>
      <section>
      </section>
      <Kiosk></Kiosk>
      
    </div>
  );
}

export default App;
