import { useState,useRef } from 'react'
import './App.css'
import cards from'./casino-cards.svg'
import chips from'./casino-chips.svg'
import heroimg from'./casino-main.svg'



function App() {

  return (

    <>
    <main>
    <div className="hero">
      <img className='cards' src={cards} alt="playing cards image" />
      <img className='heroimg' src={heroimg} alt="spinning wheel image" />
      <img className='chips' src={chips} alt="casino chips image" />
     
     </div>
     <h1>Blackjack</h1>
     <p>Want to play a round?</p>
     <p>Cards:</p>
     <p>Sum:</p>
     <button>Start</button>
     <button>New Card</button>
     
     </main>
    </>
  )
}

export default App
