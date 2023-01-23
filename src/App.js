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
import './App.css';
import './style2.css'

function Kiosk(){ //Kiosk component => 사용자 정의 함수= > 컴포넌트는 리액트의 본질
  return(
    <div class="kiosk">
      <div class="top">
          {/* <Screen></Screen> */}
          <Screen2></Screen2>
      </div>
      <div class="bottom">
          <div class="receipt_box">
              <img src={receipt} alt="영수증 나오는 곳" onChange=""/>
          </div>
          <div class="card_box">
              <img src={card} alt="카드 투입구"/>
          </div>
      </div>
    </div> 
  );
}

function Screen(){ //초기화면 with ad
  return(
    <div class="screen">
      <img src={ad2} alt="광고" />
        <div class="order_box">
          <img src={qr_btn} id="qr"/>
          <div class="order_btns" onClick={function(event){
            event.preventDefault();
            console.log("clicked");
          }}>
            <div class="order_btn">주문하기
              <div>(Start Order)</div>
            </div>
            <div class ="sub_btn" id="lang">
              언어선택
            </div>
            <div class ="sub_btn" id="help">
              도움기능
            </div>
          </div>
        </div>
    </div>

  );
}

function Screen2(){ //매장 or 화면 선택
  return(
    <div class="screen">
      <img src={logo} width ="30px" height="30px" style={{marginTop:"20px"}}></img>
      <div style={{fontSize :"30px",fontWeight :"550"}}>식사 장소를 {'\n'} 선택해 주세요</div>
      <div class="btn_box">
        <div class="btn">
          <div class="text_area">매장</div>
          <img src={eat_in}/> 
        </div>
        <div class="btn">
          <div class="text_area">포장</div>
          <img src={take_out} id="take_out"/> 
        </div>
      </div>
      <div style={{fontSize:"10px",fontWeight :"500"}}>
        언어 선택
      </div>
      <div class = "lang_select_boxes">
        <div class ="lsb" id="Eng">
          English
        </div>
        <div class ="lsb" id="Kr">
          한국어
        </div>
      </div>
      <div class="footer_box">
        <img src={qr_btn_s}/>
        <div class="back_btns">
          <div class="back_btn">처음으로</div>
          <div class="back_btn">도움 기능 ...</div>
        </div>
      </div>

    </div>
  );
}

function Screen3(){ //메인 화면
  return(
    <div class="screeen">
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
