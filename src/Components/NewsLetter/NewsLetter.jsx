import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className = "newletter">
        <h1>GET Exclusive Offers On YOur Email</h1>
        <p>Subscribe to our newLetter and stay updated</p>
        <div>
            <input type = "email" placeholder = "Your Email id"/>
            <button>SubScribe</button>
        </div>
    </div>
  )
}
export default NewsLetter
