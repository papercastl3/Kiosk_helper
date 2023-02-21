import React from 'react'
import DetailedMenu from './DetailedOrder';
import { useState } from 'react';

const SelectedMenu=({Infos, clicked, setOrder})=> { // 선택된 메뉴 //각 메뉴 박스/ 상위 컴포넌트에서 map함수로 뿌림
  return (
    <div>
      <div className="menuSelectBox" onClick={()=>{clicked(); 
        setOrder(Infos);} }>
        <div style={{cursor:"default"}}>
          <img src={Infos.img_src} width="85px" height="60px" loading="lazy"/>
          <div style={{ display:"flex",height:"39px",width:"75px",alignItems:"flex-end",fontWeight :"500",textAlign:"left",margin:"auto"}}>{Infos.name} </div>
          <div style={{ display:"flex",fontWeight: "700",marginLeft:"6px"}}>₩{Infos.price} {Infos.calory}Kcal</div>
        </div>
    </div>
    </div>
  )
}

export default SelectedMenu
