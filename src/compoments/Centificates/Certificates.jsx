import React from 'react'
import C1 from '../../assets/images/landing-page/certificate1.png'
import C2 from '../../assets/images/landing-page/certificate2.png'
import C3 from '../../assets/images/landing-page/certificate3.png'
import C4 from '../../assets/images/landing-page/certificate4.png'
import './Certificates.scss'

const Certificates = () => {
  return (
    <section className="certificates container">
        <img src={C1} alt="" />
        <img src={C2} alt="" />
        <img src={C3} alt="" />
        <img src={C4} alt="" />
    </section>
  )
}

export default Certificates