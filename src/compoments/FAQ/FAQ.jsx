import React from 'react'
// import { GoChevronDown } from "react-icons/go";
import Telegram from "../../assets/images/icons/tg.svg"
import Whatsapp from '../../assets/images/icons/wsp.svg'
import Faq from "react-faq-component";
import './FAQ.scss'

const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
    arrowColor: "blue",
    
  };
  
  const config = {
    animate: true,
    // arrowIcon: GoChevronDown,
    arrowIcon:">", 
    tabFocus: true, // Icon when the FAQ is expanded
    customRowClassName: "question", 
  };
  
const FAQ = () => {
    const data = {
        title: "", // We can omit the title if we handle it separately in the layout
        rows: [
          {
            title: 'Бұл курстар кімдерге арналған?',
            content: 'answer',
          },
        ],
      };
  return (
    <>
    <section className="faq container">
        <h1>Курсқа қатысты сұрақтар</h1>
        <div className="faqs">
        <Faq 
          data={data}
          styles={styles}
          config={config}
          // className="faq-component" // Custom class for the FAQ container
        />
        </div>
        
    </section>
    <section className="feadback">
      <h1 className='title'>Сұрақтарыңыз болса, төмендегі әлеуметтік желілерге жаза аласыз!</h1>
      <div className="socials">

      <div className="soc_card">
        <img src={Telegram} alt="" />
        <span>Telegram</span>
      </div>
      <div className="soc_card">
        <img src={Whatsapp} alt="" />
        <span>Whatsapp</span>
      </div>
      
      </div>
    </section>
    </>
    
  )
}

export default FAQ