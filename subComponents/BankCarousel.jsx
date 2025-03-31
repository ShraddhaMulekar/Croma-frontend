import React, { useEffect, useState } from 'react'
import "./BankCarousel.css"

const BankCarousel = () => {
    const [banks, setBanks] = useState([])

    const fetchBanks = async()=>{
        const res = await fetch ("/HomePageData/Bank-carosel.json")
        const data = await res.json()
        // console.log("bank carousel data line 9", data)
        setBanks(data)
    }

    useEffect(()=>{
        fetchBanks()
    },[])

    // console.log("first banks", banks)
  return (
    <div className='bankCarousel-container'>
        <h2>Exciting Bank Offers For You</h2>
        <div className='bank-img-container'>
            {banks.map((bank)=>{
                return(
                    <div className='bank-carousel-div'>
                        <img className='bank-carousel-img' src={bank.img} alt={bank.alt} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default BankCarousel