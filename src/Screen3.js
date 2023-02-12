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
export const DataContext =createContext(null);
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
    let [totalPrice,setTotalPrice]=useState("0");
    let [totalQuantity,SetTotalQuantity]=useState(0);
    const calculatePrice=(price)=>{
        const copy =totalPrice;
        const IntialTotalPrice=parseInt((copy).replace(",","")); //string 콤마 빼고 int형으로 변환
        const AddedPrice =parseInt((price).replace(",","")); //string 콤마 빼고 int형으로 변환
        let result =IntialTotalPrice + AddedPrice; //int형으로 형변환 후 계산
        result=[result].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //다시 문자열로 바꾸고, 콤마 추가
        setTotalPrice(result);
      };
    // const SetTotalPriceCal=()=>{
    //     const IntialTotalPrice=parseInt((totalPrice).replace(",","")); //string 콤마 빼고 int형으로 변환
    //     const AddedPrice =parseInt((menu).replace(",","")); //string 콤마 빼고 int형으로 변환
    //     const result =IntialTotalPrice + AddedPrice; //int형으로 형변환 후 계산
    //     result=[result].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //다시 문자열로 바꾸고, 콤마 추가
    //     setTotalPrice(result);
    // }
    let [order,setOrder]=useState({}); //선택한 메뉴 저장
    let [open,setOpen] =useState(false); //모달 창 여는 state
    const clicked=menu=>{
        let copy={...menu}
        setOpen(true); 
    }
    const close =()=>{
        setOpen(false);
    } 
    return (
        <DataContext.Provider value={{totalPrice,setTotalPrice,totalQuantity, SetTotalQuantity,calculatePrice}}>
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
        <TotalPriceBox price={totalPrice} quantity={totalQuantity}/>
        {open && <DetailedOrder  close={close} order={order}/>} 
        {/* 모달창 */}
    </div>
    </DataContext.Provider>
  )
}

export default Screen3
