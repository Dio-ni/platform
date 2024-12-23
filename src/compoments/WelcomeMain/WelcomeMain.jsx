import React from 'react'
import Header from '../Header/Header'
import './WelcomeMain.scss'
import WelcomeImage from '../../assets/images/landing-page/welcome-block.png';

const WelcomeMain = () => {
  return (
    <section className="welcome_main ">
        <Header />
        <div className="welcome_main__content container ">
            <div className="content_text">
                <h1>БІЛІМІҢІЗДІ КҮНДЕ ЖЕТІЛДІРІҢІЗ</h1>
                <p>Ұстаздарға арналған ең заманауи және тиімді курстар. Біліктілігіңізді арттырып, білім сапасын жақсартыңыз.</p>
                <button>Кіру</button>
            </div>
            <img src={WelcomeImage} alt="" />
        </div>
    </section>
  )
}

export default WelcomeMain