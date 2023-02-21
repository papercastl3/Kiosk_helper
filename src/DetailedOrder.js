import React from 'react'
import { useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade, Zoom } from 'react-awesome-reveal';
import './css/DetailedOrder.css'
import { DataContext } from './Screen3';
import SelectedMenu from './SelectedMenu';


const SizeChoose=({order,orderName,setSize,setOrderName})=>{ //사이즈 선택
  return(
    <div>
      <div className='orderFlowBox' >
        <Fade direction='up' duration={1000}>
        <div className="flowBox" style={{borderLeft:"4px solid #FFBC0D",width:"100px",display:"flex",alignItems:"center"}}>
          <img src="/images/circle.svg" width="15px" height="15px" style={{marginLeft:'5px', marginRight:"8px"}}/>
          <div style={{textAlign:"left",width:"83px"}}></div>
        </div>
        <div className="flowBox" style={{background: "#E7E3E3",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <img src="/images/circle2.svg" width="15px" height="15px" style={{marginLeft:'5px', marginRight:"8px"}}/>
          <div style={{textAlign:"left",width:"83px"}}> 주문확인하기</div>
        </div>
      </Fade>
      </div>
      <Fade duration={1000} direction='up'>
      <div className="SelectingBox" style={{marginTop:"50px"}}>
        <div className="menuSelectBox" style={{cursor:"default", marginRight:"5px"}} onClick={()=>{setSize("세트"); setOrderName(prev=>prev+"-세트")}}>
          <img src={order.set_img_src} width="85px" height="60px" loading="lazy"/>
          <div style={{ display:"flex",height:"39px",width :"75px",alignItems:"flex-end",fontWeight :"500",textAlign:"left",margin:"auto"}}>{orderName}-세트</div>
          <div style={{fontWeight: "700"}}>₩{order.price} {order.calory}Kcal</div>
        </div>
        <div className="menuSelectBox" style={{cursor:"default"}} onClick={()=>{setSize("라지세트");setOrderName(prev=>prev+"-라지세트")}} >
          <img src={order.set_img_src} width="85px" height="60px" loading="lazy"/>
          <div style={{ display:"flex",height:"39px",width :"75px",alignItems:"flex-end",fontWeight :"500",textAlign:"left",margin:"auto"}}>{orderName}-라지세트</div>
          <div style={{fontWeight: "700"}}>₩{order.price} {order.calory}Kcal</div>
        </div>
       </div>
      </Fade>
    </div>
  );
}

const SideChoose=({orderName,setSide})=>{ //사이드 선택
  return(
    <div>
      <div className='orderFlowBox' style={{top:"110px"}}>
        <div className="flowBox"style={{height:"76px",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <img src="/images/circleChked.svg" width="15px" height="15px" style={{marginLeft:'5px', marginRight:"8px"}}/>
          <div style={{textAlign:"left",width:"83px"}}>{orderName}</div>
        </div>
        <Fade cascade duration={600} dumping={0.1}>
        <div className="flowBox" style={{borderLeft:"4px solid #FFBC0D",width:"100px",display:"flex",alignItems:"center"}}>
          <img src="/images/circle.svg" width="15px" height="15px" style={{marginLeft:'3px', marginRight:"8px"}}/>
          <div style={{textAlign:"left",fontWeight:"600"}}>세트메뉴 사이드를 선택하세요</div>
        </div>
        <div className="flowBox" style={{background: "#E7E3E3",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <img src="/images/circle2.svg" width="15px" height="15px" style={{marginLeft:'5px', marginRight:"8px"}}/>
          <div style={{textAlign:"left",width:"83px"}}>세트메뉴 음료를 선택하세요</div>
        </div>
        <div className="flowBox" style={{background: "#E7E3E3",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <img src="/images/circle2.svg" width="15px" height="15px" style={{marginLeft:'5px', marginRight:"8px"}}/>
          <div style={{textAlign:"left",width:"83px"}}>주문확인하기</div>
        </div> 
        </Fade>  
      </div>
      <Fade direction='up' duration={1000}>
      <div className="SelectingBox" style={{flexDirection:"column"}}>
        <div style={{fontSize:"16px",fontWeight:"600",width:"225px"}}>세트메뉴 사이드를 선택하세요</div>
        <div style={{display:"flex",marginTop:"20px"}}>
        <div className="menuSelectBox" style={{cursor:"default", marginRight:"5px"}} onClick={()=>{setSide("후렌치 후라이-미디엄");}}>
          <img src="/images/후렌치_후라이.png" width="85px" height="60px" loading="lazy"/>
          <div style={{ display:"flex",height:"39px",width :"72px",alignItems:"flex-end",fontWeight :"500",textAlign:"left",margin:"auto"}}>후렌치 후라이-미디엄 </div>
          <div style={{width :"72px",textAlign:"left",fontWeight: "700"}} >322Kcal</div>
        </div>
        <div className="menuSelectBox" style={{cursor:"default", marginRight:"5px"}} onClick={()=>{setSide("골든 모짜렐라 치즈스틱-2조각");}} >
          <img src="/images/치즈스틱.png" width="85px" height="60px" loading="lazy"/>
          <div style={{ display:"flex",height:"39px",width :"72px",alignItems:"flex-end",fontWeight :"500",textAlign:"left",margin:"auto"}}>골든 모짜렐라 치즈스틱-2조각</div>
          <div style={{width :"80px",fontWeight: "700",fontWeight: "700"}}>+₩500 162Kcal</div>
        </div>
        <div className="menuSelectBox" style={{cursor:"default", marginRight:"5px"}} onClick={()=>{setSide("후렌치 후라이M + 치즈스틱-2조각");}}>
          <img src="/images/감튀_치즈스틱.svg" width="85px" height="60px" loading="lazy"/>
          <div style={{ display:"flex",height:"39px",width :"72px",alignItems:"flex-end",fontWeight :"500",textAlign:"left",margin:"auto"}}>후렌치 후라이M + 치즈스틱-2조각</div>
          <div style={{width :"80px",fontWeight: "700",fontWeight: "700"}}>+₩500 162Kcal</div>
        </div>
        </div>
       </div>
      </Fade>
    </div>
  );
}

const BeverageChoose=({orderName,side,setBeverage})=>{ //사이드 음료 선택
  const BeverageInfos2=[
     {
      name :"코카-콜라-미디엄",
      calory : "143",
      img_src :"/images/코카콜라.png"
    }, 
    {
      name :"스프라이트-미디엄",
      calory : "149",
      img_src :"/images/스프라이트.png"
    }, 
    {
      name :"환타",
      calory : "62",
      img_src :"/images/환타.png"
    }, 
    {
      name :"코카 콜라 제로-미디엄",
      calory : "0",
      img_src :"/images/코카제로.png"
    }, 
    {
      name :"딸기 칠러-미디엄",
      price : "2,000",
      calory : "156",
      img_src :"/images/딸기칠러.png"
    },
    {
      name :"자두 칠러-미디엄",
      price : "3,500",
      calory : "350",
      img_src :"/images/자두칠러.png"
    },
    {
      name :"골드 맥피즈",
      price : "2,700",
      calory : "164",
      img_src :"/images/골드맥피즈.png"
    },
   
    {
      name :"바닐라 쉐이크",
      price : "2,000",
      calory : "198",
      img_src :"/images/바닐라쉐이크.png"
    },
    {
      name :"딸기 쉐이크",
      price : "3,500",
      calory : "350",
      img_src :"/images/딸기쉐이크.png"
    },
    {
      name :"초코 쉐이크",
      price : "3,500",
      calory : "344",
      img_src :"/images/초코쉐이크.png"
    },
    {
      name :"오렌지 주스",
      price : "2,200",
      calory : "?",
      img_src :"/images/오렌지주스.png"
    },
   
   
   
   
    {
      name :"생수",
      price : "1,900",
      calory : "15",
      img_src :"/images/생수.png"
    },
    {
      name :"우유",
      price : "2,200",
      calory : "194",
      img_src :"/images/우유.png"
    },
  
  ]
  return(
    <div>
      <div className='orderFlowBox' style={{top:"118px"}}>
        <div className="flowBox" style={{height:"76px",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <img src="/images/circleChked.svg" width="15px" height="15px" style={{marginLeft:'5px', marginRight:"8px"}}/>
          <div style={{textAlign:"left",width:"83px"}}>{orderName}</div>
        </div>
        <div className="flowBox" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <img src="/images/circleChked.svg" width="15px" height="15px" style={{marginLeft:'3px', marginRight:"8px"}}/>
          <div style={{textAlign:"left"}}>{side}</div>
        </div>
        <div className="flowBox" style={{borderLeft:"4px solid #FFBC0D",width:"100px",display:"flex",alignItems:"center"}}>
          <img src="/images/circle2.svg" width="15px" height="15px" style={{marginLeft:'5px', marginRight:"8px"}}/>
          <div style={{textAlign:"left",width:"83px",fontWeight:"600"}}>세트메뉴 음료를 선택하세요</div>
        </div>
        <div className="flowBox" style={{background: "#E7E3E3",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <img src="/images/circle2.svg" width="15px" height="15px" style={{marginLeft:'5px', marginRight:"8px"}}/>
          <div style={{textAlign:"left",width:"83px"}}>주문확인하기</div>
        </div>
      </div>
      <div className="SelectingBox" style={{flexDirection:"column"}}>
      <div style={{fontSize:"16px",fontWeight:"600",width:"225px"}}>세트메뉴 음료를 선택하세요</div>
    
      {/* <Fade direction='up' fraction={0}  duration="700" triggerOnce="true">
      <div className="burgerGrid" style={{overflowY:"hidden"}}>
        {BeverageInfos2.map((v) =>{
          return(
            <SelectedMenu Infos={v} clicked={setBeverage}  key={v.name.toString()}/>
          );
        })}
      </div>
      </Fade> */}

        <Fade direction='up' className="gridWrap" fraction={0}  duration="700" triggerOnce="true" style={{width:"315px",height:"400px",}}>
          <div className="HappySnackGrid"style={{overflowY:"hidden"}}>
            {BeverageInfos2.map((v) =>{
              return(
                <SelectedMenu  Infos={v} clicked={setBeverage} key={v.name.toString()}/>
              );
            })}
          </div>
       </Fade>

      </div>
  </div>
  );
}

const CheckOrder =()=>{
  return(
    <div className="Modal" style={{position:"absolute"}}>

    </div>
  );
}


const DecideSetDetail=({order,close})=>{ //세트 내용세부 선택
  const [orderName,setOrderName]=useState(order.name);
  const [size,setSize]=useState("");
  const[side,setSide]=useState("");
  const[beverage,setBeverage]=useState("");
  const [price,setPrice]=useState("");
  let navigate = useNavigate();
  return(
    <div className="Modal" style={{position:"absolute"}}>
      <div>
      <div className='headerContainer'>
        <img src="/images/mc_logo.svg" widht="39px" height="26px" style={{
          marginTop:"20px",marginRight:"50px",marginLeft:"34px"
        }}/>
        <div className="NameAndCalBox">
          <div style={{fontWeight:"600",marginBottom:"4px"}}>{orderName}</div>
          {size!=="" &&<div style={{fontSize:"13px",fontWeight:"1000"}}>₩{order.price} {order.calory}Kcal</div> }
        </div>
        {size!=="" && <div className="nutriBox">영양정보 </div>}
      </div>
      {size==="" && <SizeChoose order={order} orderName={orderName} setSize={setSize} setOrderName={setOrderName}/>} {/*사이즈 선택 */}
      {size!==""&& side==="" && <SideChoose orderName={orderName} setSide={setSide}/>}  {/*사이드 선택 */} 

      {size!==""&& side!=="" && <BeverageChoose orderName={orderName} side={side} setBeverge={setBeverage}/>}  {/*음료 선택 */}
    </div>
        
      <div className="footer_btns2" style={{width:"350px", height:"94px",marginLeft:"82px",marginTop:"6px",position:"absolute",bottom:"0px",backgroundColor:"white"}}>
        <div className="cancelBox" onClick={close} style={{
            width: "260px",
            height: "36px",
            borderRadius: "3px",
            marginLeft:"50px"
        }}>
          <div>취소</div>
        </div>
        <div style={{marginLeft:"80px",height:"40px"}}>
          <div className="back_btns2">
            <div className="back_btn" onClick={()=>{navigate('/')}}>처음으로</div>
            <div className="back_btn">도움기능...</div>
          </div>
          <div style={{width:"260px",height:"18px",display:"flex-start"}}>
            <img src="/images/nutri_text.svg" alt="영양정보"/>
          </div>
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
            <img src="/images/nutri_text.svg" alt="영양정보" loading="lazy"/>
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
          <img src="/images/mc_logo.svg" width="62px" height="42px" loading="lazy"/>
          <div style={{marginLeft:"10px",marginTop:"6px"}}>{order.name}</div>
        </div>
        <div className="decideSetBox">
          <h2 style={{marginRight:"32px"}}>세트로 주문하시겠습니까?</h2>
            <div className="decideContainer">
              <div className="Set_decide" onClick={()=>open("세트")}>
                <img src={order.set_img_src} width="152px" height="113px" loading="lazy"/>
                <span style={{}}>세트선택</span>
              </div>
              <div className="Set_decide" onClick={()=>open("단품")}>
                <img src={order.img_src} width="152px" height="113px" loading="lazy"/>
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
    const Open=(SetorSingle)=>{
      setInitial(false);
      if(SetorSingle==="단품"){
        SetIsSingle(true);
      }
      else if(SetorSingle==="세트"){
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
