import React from 'react'
import './AboutCourse.scss'
import CourseCardImage from '../../assets/images/landing-page/about-course.png'

const AboutCourse = () => {
  return (
    <section className="about_course container">
        <div className="summary">
            <div className='card'>
                <h1>6 модуль</h1>
                <p>Әр модульді өткен сайын арнайы тесттен өте аласыз.</p>
            </div>
            <div className='card'>
                <h1>7 апта</h1>
                <p>Небәрі 2 айдан аз уақыттың ішінде біліміңізді шыңдай түсесіз.</p>
            </div>
            <div className='card'>
                <h1>144 сағат </h1>
                <p>Курсты аяқтаған соң, сертификатты ала аласыз.</p>
            </div>
        </div>
        <div className="course_card">
            <div className="card_content">
                <h1>Курс жайлы</h1>
                <p>Ұстаздарға білім беру сапасын жақсартуға және оқыту дағдыларын дамытуға көмектесетін сабақтар платформасы.
                    <br />
                    <br />
                    Әрбір ұстаздың үздіксіз білім алуына сенеміз және олардың жетістіктері біздің басты құндылығымыз.
                    <br />
                    <br />
                    Курста: дизайн, жоспарлау, түрлі ойындар, текст қүрастыру</p>
                <button className='btn_blue'>Кіру</button>
            </div>
            <img src={CourseCardImage} alt="" />
        </div>
        <div className="steps">
            <div className="card">
                <h1>1 қадам</h1>
                <p>Сабаққа тіркелеміз</p>
            </div>
            <div className="card">
                <h1>2 қадам</h1>
                <p>Видеосабақтарды қараймыз</p>
            </div>
            <div className="card">
                <h1>3 қадам</h1>
                <p>Тапсырмаларды орындаймыз</p>
            </div>
            <div className="card">
                <h1>4 қадам</h1>
                <p>Практикалық тесттен өтеміз</p>
            </div>
            <div className="card">
                <h1>5 қадам</h1>
                <p>Сертификатты аламыз</p>
            </div>
        </div>
        <button>Тіркелу</button>
    </section>
  )
}

export default AboutCourse