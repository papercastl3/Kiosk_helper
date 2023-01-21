import receipt from './receipt.svg'
import receipt_out from './receipt2.svg'
import card from './card_barcode.svg'
import qr_btn from './qr_point.svg'
import ad1 from './ad1.svg'
import ad2 from './ad2.svg'
import eat_in from './eat_in.svg'
import take_out from './take_out.svg'
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
              <img src={receipt} alt="영수증 나오는 곳"/>
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
      <img src={ad2} alt="광고"/>
        <div class="order_box">
          <img src={qr_btn} id="qr"/>
          <div class="order_btns" onClick={function(event){
            event.preventDefault();
            
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
      <h1>ㄹㅇㄴㄹ</h1>
      <div class="btn_box">
        <div class="btn">
          <h1>매장</h1>
          <img src={eat_in}/> 
        </div>
        <div class="btn">
          <h1>포장</h1>
          <img src={take_out} id="take_out"/> 
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
