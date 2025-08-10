import React from 'react'
import profileImg from '../../assets/vice.jpeg'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'
import { FaLinkedin , FaTelegram, FaGithub, FaDiscord, FaSkype, FaMedium, FaMailchimp } from "react-icons/fa";
import './home.css'
import CV from '../../assets/vice-cv.pdf'
import fiverr from '../../assets/fiverr.png'

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="home__wrapper">
        <div className="home__container container">
            <p className="home__subtitle text-cs">
                Hello, <span>My Name Is</span>
            </p>
            <h1 className="home__title text-cs"><span>Vice C.</span></h1>
            <p className="home__job">
                <span className="text-cs">I Am </span><b>FullStack & Blockchain Engineer</b>
            </p>

            <div className="home__img-wrapper">
                <div className="home__banner">
                    <img src={profileImg} alt="" className='home__profile' />
                </div>

                <p className="home__data home__data-one">
                    <span className="text-lg">3 <b>+</b></span>
                    <span className="text-sm text-cs">Years of <span>Experience</span></span>
                </p>

                <p className="home__data home__data-two">
                    <span className="text-lg">10+</span>
                    <span className="text-sm text-cs">Completed <span>Projects</span></span>
                </p>

                <img src={shapeOne} className="img shape shape__1"/>
                <img src={shapeTwo} className="img shape shape__2"/>
                <img src={shapeTwo} className="img shape shape__3"/>
            </div>
            <p className="home__text">I have been working as a FullStack and blockchain engineer for over 3 years. Built several small-to-large websites and wrote smart contracts, and integrated by using web3 technology.</p>
            <div className="home__socials">

                <a href="https://www.linkedin.com/in/vice-culjak/" target='_blank' className="footer__social-links">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/viceculjak" target='_blank' className="footer__social-links">
                    <FaGithub/>
                </a>

                <a href="" target='_blank' className="footer__social-links">
                    <FaMailchimp/>
                </a>
            </div>

            <div className="home__btns">
                <a download='' href={CV} className="btn text-cs">Download CV</a>
                <a href="#skills" className="hero__link text-cs">My Skills</a>
            </div>
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape" />
        </div>
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Web Engineer</span>
        </div>
    </section>
  )
}

export default Home