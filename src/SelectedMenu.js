import React from 'react'
import DetailedMenu from './DetailedOrder';
import { useState } from 'react';

const SelectedMenu=({Infos, clicked, setOrder})=> {
  return (
    <div>
      <div className="menuSelectBox" onClick={()=>{clicked(); 
        setOrder(Infos);} }>
        <div>
          <img src={Infos.img_src} width="85px" height="60px"/>
          <div style={{ display:"flex",height:"26.67px",width :"72px",alignItems:"flex-end",fontWeight :"500",textAlign:"left",margin:"auto"}}>{Infos.name} </div>
          <div style={{fontWeight: "700"}}>₩{Infos.price} {Infos.calory}Kcal</div>
        </div>
    </div>
  </div>
  )
}

export default SelectedMenu
