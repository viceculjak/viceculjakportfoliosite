import React from 'react'
import { cv } from '../../Data'
import Card from './Card'
import './resume.css'
import shapeOne from '../../assets/shape-1.png'
import { useTranslation } from 'react-i18next';

const Resume = () => {
  const { t } = useTranslation();
  return (
    <section className="resume" id="resume">
         <h2 className="section__title text-cs">{t('navigation.resume')}</h2>
        <p className="section__subtitle">
            My <span>{t('resume.story')}</span>
        </p>

        <div className="resume__container container grid">
            <div className="resume__group">
                <h3 className="resume__heading">{t('resume.education')}</h3>

                <div className="resume__items">
                    {cv.map((val,id)=>{
                        if(val.category === 'education'){
                            return <Card key={id} title={val.title} subtitle={val.subtitle} date={val.date} description={val.description}/>
                        }
                    })}
                </div>
            </div>

            <div className="resume__group">
                <h3 className="resume__heading">{t('resume.experience')}</h3>

                <div className="resume__items">
                    {cv.map((val,id)=>{
                        if(val.category === 'experience'){
                            return <Card key={id} title={val.title} subtitle={val.subtitle} date={val.date} description={val.description}/>
                        }
                    })}
                </div>
            </div>
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape" />
        </div>

        
    </section>
  )
}

export default Resume