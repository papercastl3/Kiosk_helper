import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import logo from './mc_logo.svg'
import  './Screen3.css'
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
    return (
    <div className="screen">
        <div className="menuContainer">
            <CategoryMenu/>
            <Routes>
                <Route path="/home" element={<HomeMenu/>}/>
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
