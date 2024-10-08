import React from 'react'
import './mainBanner.css'
import MiniNav from '../navbar/mininav'

const MainBanner = () => {
    return (
        <div className='mainBanner'>


            <img className='mainBannerBg' src='/mainBannerBg.png' alt='fa' />
            <img className="stringd " src='/stringd.png' />
            <img className='Vector' src='Vector.png' />
            <img className="Vector-1 " src='Vector-1.png' />
            <div className="headerInfo">
                <h1 >TECH JOBS YOU WANT,<br />AT COMPANIES YOU ADMIRE </h1>

                <p> Build the tech careers that's right for you.</p>
            </div>



        </div>
    )
}

export default MainBanner