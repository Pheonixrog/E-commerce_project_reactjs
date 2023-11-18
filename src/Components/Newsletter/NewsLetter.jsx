import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers On your email</h1>
        <p>Subscribe to our Newsletter and stay updated</p>
        <div>
          <input type="email" placeholder='your Email Id' />
          <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter