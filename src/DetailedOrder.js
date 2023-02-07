import React from 'react'
import './css/DetailedOrder.css'
function DetailedOrder({close,order}){ //단품 세트, 메뉴 디테일 고르기
    return(
      <div className="Modal">
        <div className="menuName">
          <img src="/images/mc_logo.svg" width="62px" height="42px"/>
          <span>{order.name}</span>
        </div>
        <div className="decideContainer">
          <div className="Set_decide">
            <img src={order.img_src} width="152px" height="113px"/>
          </div>
          <div className="Set_decide">
            <img src={order.img_src} width="152px" height="113px"/>
          </div>
        </div>
        <div className="cancelBox"onClick={()=>{close();}}>취소</div>
      </div>
    );
  }

export default DetailedOrder
