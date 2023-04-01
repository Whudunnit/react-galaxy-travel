import React from 'react'
import {Link} from "react-router-dom"
import Pod from "../assets/pod.jpg"
import Moon from "../assets/moon.jpg"
import "./Training.css"

const TrainingSection = () => {
  return (
    <div className="training">

      <div className="left">
        <h1>Képzés</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perspiciatis, autem voluptas sit architecto, labore libero eveniet ipsa maiores voluptate soluta inventore. Minus laborum eum animi enim est dolorem natus?</p>
        <Link to="/contact" className="btn">Kapcsolat</Link>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="image-stack top">
            <img src={Moon} alt="moon" />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} alt="pod" />
          </div>          
        </div>
      </div>
    </div>
  )
}

export default TrainingSection