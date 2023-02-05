import React from 'react'
const burgerInfos={
    bigmac : {
        name :"빅맥™",
        price : "4900",
        setPrice : "5300",
        kalories : 594,
        img_src :"./img/빅맥.png"
    },
    shanghai : {
        name :"맥스파이시® 상하이 버거",
        price : 4900,
        kalories : 494,
    },
    double_quarter : {
        name :"더블 쿼터파운더® 치즈",
        price : 4900,
        kalories : 494,
    },
    shanghai : {
        name :"더블 쿼터파운더® 치즈",
        price : 4900,
        kalories : 494,
    },
    shanghai : {
        name :"맥스파이시® 상하이 버거",
        price : 4900,
        kalories : 494,
    },
    shanghai : {
        name :"맥스파이시® 상하이 버거",
        price : 4900,
        kalories : 494,
    },
    shanghai : {
        name :"맥스파이시® 상하이 버거",
        price : 4900,
        kalories : 494,
    },
    shanghai : {
        name :"맥스파이시® 상하이 버거",
        price : 4900,
        kalories : 494,
    },

}
function Selected_burger({burgerInfos}) {
    console.log(burgerInfos.bigmac);
  return (
    <div className="menuSelectBox">
    <div>
        <img src={burgerInfos.bigmac.img_src} width="85px" height="60px"/>
        <div>빅맥™ ® </div>
        <div style={{fontWeight: "700"}}>₩4,900 594Kcal</div>
    </div>
  </div>
  )
}

export default Selected_burger
