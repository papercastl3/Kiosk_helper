import React from 'react'

function HomeMenu() {
  return (
    <div className="rightMenu">
        <p>메뉴 알아보기</p>
        <div className="menuBox">
            <div className="menuCategory">추천메뉴</div>
            <div className="menuCategory">맥런치</div>
        </div>
        <div className="menuBox">
            <div className="menuCategory">이달의 해피스낵</div>
            <div className="menuCategory">커피디저트</div>
        </div>
        <div className="adBox">
            이미지1
        </div>
        <div className="adBox">
            이미지2
        </div>
        <div className="adBox">
            이미지3
        </div>
        <div>
            <div>인기메뉴</div>
            <div className="gridContainer">
                <div className='menuSelectBox'>1</div>
                <div className='menuSelectBox'>2</div>
                <div className='menuSelectBox'>3</div>
                <div className='menuSelectBox'>4</div>
                <div className='menuSelectBox'>5</div>
                <div className='menuSelectBox'>6</div>
                <div className='menuSelectBox'>3</div>
                <div className='menuSelectBox'>4</div>
                <div className='menuSelectBox'>5</div>
                <div className='menuSelectBox'>6</div>
            </div>
        </div>
    </div>
  )
}

export default HomeMenu
