import React, { useEffect } from 'react'
import { useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { DataContext } from './Screen3';
import './css/CategoryMenu.css'

// const CategoryStyle=()=>css`
//         text-decoration: "underline";
//         text-underline-position:"under";
//         text-decoration-color :"#FFBC0D";
//     `;

function CategoryMenu() {
    const {fromHomeClicked,setFHC} =useContext(DataContext);
    
    let [clicked,setClicked]=useState([true,false,false,false,false,false,false,false,false,false]);

    function catClicked(index){
        setFHC(null);
        let copy =[...clicked];
        copy =[false,false,false,false,false,false,false,false,false,false];
        copy[index] = true;
        setClicked(copy);
    }
    useEffect(() => {
        if(fromHomeClicked==="추천메뉴"){
            let copy =[...clicked];
            copy =[false,true,false,false,false,false,false,false,false,false];
            setClicked(copy);
        }
        else if(fromHomeClicked==="맥런치"){
            let copy =[...clicked];
            copy =[false,false,true,false,false,false,false,false,false,false];
            setClicked(copy);
        }
        else if(fromHomeClicked==="해피스낵"){
            let copy =[...clicked];
            copy =[false,false,false,false,true,false,false,false,false,false];
            setClicked(copy);
        }
        else if(fromHomeClicked==="커피&디저트"){
            let copy =[...clicked];
            copy =[false,false,false,false,false,false,false,true,false,false];
            setClicked(copy);
        }
        }, [fromHomeClicked]);
   
    let navigate =useNavigate();
    return (
    <Fade>
    <div className="leftCategory">
        
        <div className="logoBox">
            <img src="/images/mc_logo.svg" width="74px" height="49px" alt="로고" />
        </div>
        <div className="categoryBox"  onClick={()=>{navigate('/menu'); catClicked(0);}}>
            <img src ="/images/mc_logo.svg" width="18px" height="18px" style={{marginLeft :"5px"}} />
            <div className="categoryName" style={{ textDecoration : clicked[0] ? "underline" : "none", textUnderlinePosition : clicked[0] ? "under" : "none",
             textDecorationColor : clicked[0] ? "#FFBC0D" : "none", textDecorationThickness : clicked[0] ? "1.5px" : "none",
             fontWeight : clicked[0] ? "600" : "300"}} >홈</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/recommended'); catClicked(1);}}>
            <img src="/images/추천메뉴.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{ textDecoration : clicked[1] ? "underline" : "none", textUnderlinePosition : clicked[0] ? "under" : "none",
             textDecorationColor : clicked[1] ? "#FFBC0D" : "none", textDecorationThickness : clicked[1] ? "2px" : "none",
             fontWeight : clicked[1] ? "600" : "300"}}>추천메뉴</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/mcLunch'); catClicked(2);}}>
            <img src="/images/맥런치.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{ textDecoration : clicked[2] ? "underline" : "none", textUnderlinePosition : clicked[0] ? "under" : "none",
             textDecorationColor : clicked[2] ? "#FFBC0D" : "none", textDecorationThickness : clicked[2] ? "1.5px" : "none",
             fontWeight : clicked[2] ? "600" : "300"}}>맥런치</div>
            {/* style={{border: EiClicked ? '2px solid #FFBC0D':' 0.5px solid rgba(0, 0, 0, 0.5)'}} */}
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/burger'); catClicked(3);}}>
            <img src="/images/맥런치.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{ textDecoration : clicked[3] ? "underline" : "none", textUnderlinePosition : clicked[3] ? "under" : "none",
             textDecorationColor : clicked[3] ? "#FFBC0D" : "none", textDecorationThickness : clicked[3] ? "1.5px" : "none",
             fontWeight : clicked[3] ? "600" : "300"}}>버거</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/happySnack'); catClicked(4);}}>
            <img src="/images/해피스낵.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{ textDecoration : clicked[4] ? "underline" : "none", textUnderlinePosition : clicked[4] ? "under" : "none",
             textDecorationColor : clicked[4] ? "#FFBC0D" : "none", textDecorationThickness : clicked[4] ? "1.5px" : "none",
             fontWeight : clicked[4] ? "600" : "300"}}>해피스낵</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/side'); catClicked(5);}}>
            <img src="/images/사이드.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{ textDecoration : clicked[5] ? "underline" : "none", textUnderlinePosition : clicked[5] ? "under" : "none",
             textDecorationColor : clicked[5] ? "#FFBC0D" : "none", textDecorationThickness : clicked[5] ? "1.5px" : "none",
             fontWeight : clicked[5] ? "600" : "300"}}>사이드</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/coffee'); catClicked(6);}}>
            <img src="/images/커피.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{ textDecoration : clicked[6] ? "underline" : "none", textUnderlinePosition : clicked[6] ? "under" : "none",
             textDecorationColor : clicked[6] ? "#FFBC0D" : "none", textDecorationThickness : clicked[6] ? "1.5px" : "none",
             fontWeight : clicked[6] ? "600" : "300"}}>커피</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/dessert'); catClicked(7);}}>
            <img src="/images/디저트.svg" width="18px" height="18px" style={{marginLeft:"5px"}}/>
            <div className="categoryName" style={{ textDecoration : clicked[7] ? "underline" : "none", textUnderlinePosition : clicked[7] ? "under" : "none",
             textDecorationColor : clicked[7] ? "#FFBC0D" : "none", textDecorationThickness : clicked[7] ? "1.5px" : "none",
             fontWeight : clicked[7] ? "600" : "300"}}>디저트</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/beverage'); catClicked(8);}}>
            <img src="/images/음료.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{ textDecoration : clicked[8] ? "underline" : "none", textUnderlinePosition : clicked[8] ? "under" : "none",
             textDecorationColor : clicked[8] ? "#FFBC0D" : "none", textDecorationThickness : clicked[8] ? "1.5px" : "none",
             fontWeight : clicked[8] ? "600" : "300"}}>음료</div>
        </div>
        <div className="categoryBox" onClick={()=>{navigate('/menu/happyMeal'); catClicked(9);}} style={{borderStyle: "solid solid solid none"}}>
            <img src="/images/해피밀.svg" width="18px" height="18px" style={{marginLeft :"5px"}}/>
            <div className="categoryName" style={{ textDecoration : clicked[9] ? "underline" : "none", textUnderlinePosition : clicked[9] ? "under" : "none",
             textDecorationColor : clicked[9] ? "#FFBC0D" : "none", textDecorationThickness : clicked[9] ? "1.5px" : "none",
             fontWeight : clicked[9] ? "600" : "300"}}>해피밀</div>
        </div>
        
    </div> 
    </Fade>
  )
}

export default CategoryMenu
