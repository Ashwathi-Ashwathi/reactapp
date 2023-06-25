import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import im from './assets/mri.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">

        <nav>
          <img src={im} class="logo"></img>

          <ul>

            <li> <a href="#">Premium</a></li>
            <li> <a href="#">Help</a></li>
            <li> <a href="#">Download</a></li>
            <li> <a href="#">|</a></li>
            <li> <a href="./login.html">Signup</a></li>
            <li> <a href="login.html">LogIn</a></li>
          </ul>
        </nav>
        <div class="container2">
          <div class="music">
            <h1>
              <bold>

                Music for everyone.<br></br>
              </bold>
            </h1>

            <div class="millions">

              <bold>
                <h4>Millions of songs.No credit card needed.</h4>
              </bold>
            </div>

            <button class="butt">GET SPOTIFY FREE</button>



          </div>
        </div>





      </div >


    </>
  )
}

export default App
