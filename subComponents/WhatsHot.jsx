import React, { useEffect, useState } from 'react'
import "./WhatsHot.css"

const WhatsHot = () => {
  const[hots, setHots] = useState([])

  const fetchHot = async()=>{
    const res = await fetch("../public/HomePageData/what'sHot.json")
    const data = await res.json()
    // console.log("what's hot line 9", data)
    setHots(data)
  }

  useEffect(()=>{
    fetchHot()
  },[])

  // console.log(hots)
  return (
    <div className='whatsHot-container' >
      <h2>What's Hot</h2>
      <div className='whatsHot-content'>
        {
          hots.map((hot)=>{
            return(
              <div className='whatsHot-div'>
                <img className='whatsHot-img' src={hot.img} alt={hot.alt} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WhatsHot