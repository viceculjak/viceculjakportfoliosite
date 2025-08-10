import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Blog1 from '../../assets/blog1.jpg'
import Blog2 from '../../assets/blog2.jpg'
import Blog3 from '../../assets/blog3.jpg'
import './blog.css'
import shapeOne from '../../assets/shape-1.png'

const Blog = () => {
  return (
    <section className="blog section" id="blog">
        <h2 className="section__title text-cs">Latest Blog</h2>
        <p className="section__subtitle">
            My <span>Articles and Advice</span>
        </p>

        <div className="blog__container container grid">
            <div className="blog__item card card-two">
                <span className="blog__date text-cs">OCTOBER 31, 2024</span>
                <h3 className="blog__title">The best framework in 2024</h3>
                <p className="blog__description">Exploring the latest web development frameworks and their impact on modern development. A comprehensive guide to choosing the right tools for your next project.</p>

                <a href="" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>

                </a>

                <img src={Blog1} alt="" className="blog__img" />

            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">OCTOBER 31, 2024</span>
                <h3 className="blog__title">The main thing for the Web developer</h3>
                <p className="blog__description">Essential skills and practices every web developer should master in 2024. From coding fundamentals to deployment strategies and best practices.</p>

                <a href="" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>

                </a>

                <img src={Blog2} alt="" className="blog__img" />

            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">OCTOBER 31, 2024</span>
                <h3 className="blog__title">The main thing for the designer</h3>
                <p className="blog__description">Understanding the intersection of design and development. How to create user-centered designs that translate perfectly into functional web applications.</p>

                <a href="" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>

                </a>

                <img src={Blog3} alt="" className="blog__img" />

            </div>
        </div>

        <div className="section__deco deco__right">
            <img src={shapeOne} alt="" className="shape" />
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Blog</span>
        </div>
    </section>
  )
}

export default Blog