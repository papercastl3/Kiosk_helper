import React from 'react'
import { useState, createContext } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
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
import DetailedOrder from './DetailedOrder';

// export const Screen3Context= createContext();

function Screen3() {
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
    let [order,setOrder]=useState({});
    let [open,setOpen] =useState(false);
    const clicked=menu=>{
        let copy={...menu}
        setOpen(true); 
    }
    const close =()=>{
        setOpen(false);
    } 
    return (
    <div className="screen">
        <div className="menuContainer">
            <CategoryMenu/>
            <Routes>
                <Route path="/" element={<HomeMenu clicked={clicked} setOrder={setOrder}/>}/>
                <Route path="/recommended" element={<Recommended clicked={clicked} setOrder={setOrder}/>}/>
                <Route path="/mcLunch" element={<McLunch clicked={clicked} setOrder={setOrder}/>}/>
                <Route path="/burger" element={<Burger clicked={clicked} setOrder={setOrder}/>}/>
                <Route path="/happySnack" element={<HappySnack clicked={clicked} setOrder={setOrder}/>}/>
                <Route path="/burger" element={<Burger clicked={clicked} setOrder={setOrder}/>}/>
                <Route path="/happySnack" element={<HappySnack clicked={clicked} setOrder={setOrder}/>}/>
                <Route path="/side" element={<Side clicked={clicked} setOrder={setOrder}/>}/>
                <Route path="/coffee" element={<Coffee clicked={clicked} setOrder={setOrder}/>}/>
                <Route path="/dessert" element={<Dessert clicked={clicked} setOrder={setOrder}/>}/>
                <Route path="/beverage" element={<Beverage clicked={clicked} setOrder={setOrder}/>}/>
                <Route path="/HappyMeal" element={<HappyMeal clicked={clicked} setOrder={setOrder}/>}/>
            </Routes>
        </div>
        <TotalPriceBox></TotalPriceBox>
        {open && <DetailedOrder  close={close} order={order}/>}
    </div>
  )
}

export default Screen3
