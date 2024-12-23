import React from 'react'
import Faq from "react-faq-component";
import './FAQ.scss'

const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
    arrowColor: "blue",
    
  };
  
  const config = {
    animate: true,
    arrowIcon: "V", 
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
    <section className="faq container">
        <h1>Курсқа қатысты сұрақтар</h1>
        <Faq 
          data={data}
          styles={styles}
          config={config}
          // className="faq-component" // Custom class for the FAQ container
        />
    </section>
  )
}

export default FAQ