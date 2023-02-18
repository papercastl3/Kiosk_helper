import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Kiosk from './Kiosk.js'
import './css/App.css';
import './css/Screen.css'

function App() {
  const ZoomIn=()=>{
    document.body.style.zoom="175%";
    window.scroll(({
      top:100,
      behavior:'smooth'
    }))
    console.log("zoomed");
  }
  const ZoomOut=()=>{
    document.body.style.zoom="100%";
    console.log("zoomed");
  }
  return (
    <div className="App">
      <Fade cascade damping={0.15} fraction={1} triggerOnce="true" >
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h2>키오스크 연습용 사이트</h2>
        {/* <div className="ZoomInOutBtn" onClick={ZoomIn}>확대하기</div>
        <div className="ZoomInOutBtn" onClick={ZoomOut}>축소하기</div> */}
      </div>
      <Kiosk></Kiosk>
      <div style={{display:"flex",justifyContent:"center"}}>
      <p style={{marginBottom:"5px",fontWeight:"600"}}>
        <span style={{color:"#FFBC0D"}}>맥도날드</span>와 관련있는 "<span style={{color:"red"}}>공식사이트</span>"가 <span style={{color:"red"}}>아님</span>을 밝힙니다.{'\n'} 
        개발자 정보 : <a href="https://github.com/papercastl3" target="_blank">https://github.com/papercastl3</a>
      </p>
      </div>
      </Fade>
    </div>
  );
}

export default App;
