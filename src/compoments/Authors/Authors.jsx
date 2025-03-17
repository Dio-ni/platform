import React from 'react'
import A1 from "../../assets/images/landing-page/founder1.png";
import A2 from "../../assets/images/landing-page/founder2.png";
import link from "../../assets/images/icons/link.png" 
import './Authors.scss'
// import { Link } from 'react-router-dom';

const Authors = () => {
  return (
    <section className="authors container">
        <h1 className="title">
        Негізін қалаушылар
        </h1>
        <div className="authors_list">
            <div className="author_card">
                <img src={A1} alt="" />
                <div className="info">
                    <h2>ШРЫМБАЙ ДАНА АБИЛАХАТОВНА</h2>
                    <p>8D01503 – «Информатика мұғалімдерін даярлау» БББ докторанты</p>
                </div>
            </div>
            <div className="author_card">
                <img src={A2} alt="" />
                <div className="info">
                    <h2>АДЫЛБЕКОВА ЭЛЬВИРА ТУЛЕПБЕРГЕНОВНА</h2>
                    <p>8D01503 – «Информатика мұғалімдерін даярлау» БББ докторанты</p>
                </div>
            </div>
            <img className='link' src={link} alt="" />
        </div>

    </section>
  )
}

export default Authors