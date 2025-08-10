import React from 'react'
import shapeTwo from '../../assets/shape-2.png'
import './pricing.css'
import { FaCheck , FaArrowRight} from 'react-icons/fa'
import shapeOne from '../../assets/shape-1.png'

const Pricing = () => {
  return (
    <section className="pricing section" id="pricing">
        <h2 className="section__title text-cs">Pricing</h2>
        <p className="section__subtitle">
            My <span>Price Board</span>
        </p>

        <div className="pricing__container container grid">
            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">Basic Website (HTML/CSS/JS)</span>
                <h3 className="pricing__price">399 <span>€</span> <em></em></h3>
                <p className="pricing__description">Get a professional, responsive website with HTML, CSS, and JavaScript, perfect for small businesses like plumbers, electricians, and freelancers. Up to 5 custom pages to showcase your services and contact info, all for just 399 €.</p>
                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Web Development</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Code Review/Bug Fixing</span>
                    </li>

                    <li className="list__item">
                        
                        <del>Backend Development</del>
                    </li>
                    <li className="list__item">
                    <del>Blockchain Solutions</del>
                    </li>
                </ul>

                <a href="" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>

            <div className="pricing__item-wrapper">
                <span className="pricing__label text-cs">Popular</span>
            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">FULL-STACK</span>
                <h3 className="pricing__price">1200 <span>€</span> <em></em></h3>
                <p className="pricing__description">This package includes full web development with a custom-designed, responsive front-end using HTML, TailwindCSS, and React.js, tailored specifically to your business needs. It also covers secure backend development, featuring database integration, user authentication, and server-side logic. You'll receive up to 10 pages, contact forms, dynamic content management, and basic SEO optimization, providing a comprehensive and robust online presence.</p>
                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Web Development</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Code Review/Bug Fixing</span>
                    </li>

                    <li className="list__item">
                    <FaCheck className='list__icon'></FaCheck>
                        <span>Backend Development</span>
                    </li>
                    <li className="list__item">
                    <del>Blockchain Solutions</del>
                    </li>
                </ul>

                <a href="" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>
            </div>

            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">FULLSTACK + BLOCKCHAIN</span>
                <h3 className="pricing__price">4,000 <span>€</span> <em></em></h3>
                <p className="pricing__description">Get a fully responsive, custom website with secure backend development and blockchain integration. This package includes front-end design, database setup, and blockchain features like smart contracts or secure transactions, perfect for businesses aiming for innovation and security.</p>
                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Web Development</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Code Review/Bug Fixing</span>
                    </li>

                    <li className="list__item">
                    <FaCheck className='list__icon'></FaCheck>
                        <span>Backend Development</span>
                    </li>
                    <li className="list__item">
                    <FaCheck className='list__icon'></FaCheck>
                    <span>Blockchain Solutions</span>
                    </li>
                </ul>

                <a href="" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>

           
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape" />
        </div>
        <div className="section__bg-wrapper">
            <span className="bg__title">Pricing</span>
        </div>
    </section>
  )
}

export default Pricing