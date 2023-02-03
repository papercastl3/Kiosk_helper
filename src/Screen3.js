import React from 'react'
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import logo from './img/mc_logo.svg'
import  './css/Screen3.css'
import CategoryMenu from './CategoryMenu'
import HomeMenu from './HomeMenu.js'
import Recommended from './Recommended'
import McLunch from './McLunch'
import Burger from './Burger'
import HappySnack from './HappySnack.js'
import Side from './Side'
import Coffee from './Coffee'
import Dessert from './Dessert'
import Beverage from './Beverage'
import HappyMeal from './HappyMeal'

import TotalPriceBox from './TotalPriceBox.js'

function Screen3() {
    const burgerInfos={
        bigmac : {
            name :"빅맥™",
            price : 4900,
            setPrice : 5300,
            kalories : 594,
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
    // const [orders,setOrders]=useState([]);
    // const [totalPrice,setTotalPrice]=useState(0);
    // const [price,setPrice]= useState(0);

    // const countPrice=(e)=>{
    //     setPrice(e.target.value+price);
    // }
    // const countPrice=()=>{
    //     setTotalPrice((prevState)=>{
    //         return [price,...prevState];
    //     })
    // }; 나중에 map함수 활용하기

    return (
    <div className="screen">
        <div className="menuContainer">
            <CategoryMenu/>
            <Routes>
                <Route path="/" element={<HomeMenu/>}/>
                <Route path="/recommended" element={<Recommended/>}/>
                <Route path="/mcLunch" element={<McLunch/>}/>
                <Route path="/burger" element={<Burger/>}/>
                <Route path="/happySnack" element={<HappySnack/>}/>
                <Route path="/burger" element={<Burger/>}/>
                <Route path="/happySnack" element={<HappySnack/>}/>
                <Route path="/side" element={<Side/>}/>
                <Route path="/coffee" element={<Coffee/>}/>
                <Route path="/dessert" element={<Dessert/>}/>
                <Route path="/beverage" element={<Beverage/>}/>
                <Route path="/HappyMeal" element={<HappyMeal/>}/>
            </Routes>
        </div>
        <TotalPriceBox></TotalPriceBox>
    </div>
  )
}

export default Screen3
