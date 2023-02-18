import React from 'react'
import { useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade, Zoom } from 'react-awesome-reveal';
import './css/DetailedOrder.css'
import { DataContext } from './Screen3';

const DecideSetDetail=({order,close})=>{ //세트 내용세부 선택
  let navigate = useNavigate();
  return(
    <div className="Modal">
      <div className='nameBox' style={{display:"flex"}}>
        <img src="/images/mc_logo.svg" widht="39px" height="26px"/>
        <p>{order.name}</p>
      </div>
      <div className='orderFlowBox' >
        <div>1</div>
        <div>2</div>
      </div>
      <div>

      </div>
        <div className="footer_btns2"> 
          <div className="cancelBox" onClick={close}>
            <div>취소</div>
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
  );
}

const DecideSingleDetail = ({order,close})=>{ //단품
  const {SetTotalQuantity,calculatePrice} = useContext(DataContext); //useContextAPI 사용
  let [quantity,SetQuantity]= useState(1); //수량 개수 초깃값 1
  let price=[parseInt((order.price).replace(",","")*quantity)].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //,달기
  let calory=order.calory*quantity;
 
  const addQunatity=()=>{ //단품 수량 추가
    SetQuantity(prev=>prev+1);
  }
  const subQunatity=()=>{ //단품 수량 감소
    if(quantity>1){
    SetQuantity(prev=>prev-1);
    }
  }

  return(
    <div>
      <div className='littleModal' >
        <img src={order.img_src} width="192px" height="143px"/>
        <div>
          <div style={{fontWeight:"600"}}>{order.name}</div>
          <div style={{fontWeight:"600"}}>₩{price} {calory}Kcal</div>
        </div>
        <div className='nutri'>영양정보</div>
        <div className="PlusMinusWrap">
          <div className="Minus" style={{
          borderWidth: "2px",
          borderStyle : "solid none solid solid", 
          borderColor : quantity>1 ? "#CCCCC9": "rgba(204, 204, 201, 0.35)"
          }} onClick={subQunatity}>-</div>
          <div className="Number">{quantity}</div>
          <div className="Plus" onClick={addQunatity}>+</div>
        </div>
        <div className='Add' onClick={()=>{close(); calculatePrice(price); SetTotalQuantity(prev=>prev+quantity)}}>장바구니추가</div>
      </div> 
      <div style={{marginTop:"136px",marginLeft:"177px"}}>
        <div className="back_btns2">
            <div className="back_btn">처음으로</div>
            <div className="back_btn">도움기능...</div>
        </div>
        <div style={{width:"260px",height:"14px"}}>
            <img src="/images/nutri_text.svg" alt="영양정보"/>
        </div>
      </div>
      </div>
  );
}



const DecideSetorNot=({order,open,close})=>{ // 세트 단품 선택 창
  return(
      
      <div className="Modal">
      <Zoom direction='In' duration="50">
        <div className="menuName">
          <img src="/images/mc_logo.svg" width="62px" height="42px"/>
          <div style={{marginLeft:"10px",marginTop:"6px"}}>{order.name}</div>
        </div>
        <div className="decideSetBox">
          <h2 style={{marginRight:"32px"}}>세트로 주문하시겠습니까?</h2>
            <div className="decideContainer">
              <div className="Set_decide" onClick={()=>open("세트")}>
                <img src={order.set_img_src} width="152px" height="113px"/>
                <span style={{}}>세트선택</span>
              </div>
              <div className="Set_decide" onClick={()=>open("단품")}>
                <img src={order.img_src} width="152px" height="113px"/>
                <div>단품선택{'\n'}
                ₩{order.price} {order.calory}Kcal</div>
              </div>
            </div>
            <div className="cancelBox"onClick={()=>{close();}}>취소</div>
        </div>
        </Zoom>     
      </div>   
  
  );
}

function DetailedOrder({close,order}){ //디테일한 메뉴 선택창 (맨처음) 고르기 하위 컴포넌트 컨트롤러 
    let [Initial,setInitial]=useState(true);
    let [IsSingle,SetIsSingle] =useState("");
    const Open=(SetorNot)=>{
      setInitial(false);
      if(SetorNot==="단품"){
        SetIsSingle(true);
      }
      else if(SetorNot==="세트"){
        SetIsSingle(false);
      }
    }
    return(
      <div className="Modal">
        {Initial && <DecideSetorNot order={order} open={Open} close={close}/> } {/* 세트 or 단품 선택 렌더링 */}
        {!Initial &&  IsSingle===false && <DecideSetDetail order={order} close={close}/>} {/* 세트 디테일 창 렌더링 */}
        {!Initial && IsSingle===true && <DecideSingleDetail order={order} close={close}/>} {/* 단품 개수 선택창 렌더링 */}
      </div>
    );
  }

export default DetailedOrder
