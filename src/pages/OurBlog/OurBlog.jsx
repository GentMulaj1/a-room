import React from 'react'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import './OurBlog.css'

const OurBlog = () => {
  return (
    <>
    <div className='ourBlog' id='blog'>
        <div className="wrapper ourBlog__content">
            <h1 id="ourBlog__h1">Our blog</h1>
            <div className="ourBlog__header">
                <a href="#">Health care</a>
                <a href="#">Fin tech</a>
                <a href="#">Retail & e-com</a>
                <a href="#">Social Media</a>
            </div>

            <div className="ourBlog__second">
                <div className="ourBlog__left">
                    <h1>They talk about us</h1>
                    <h2>Fin tech</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste omnis voluptatibus, et animi incidunt qui. Deserunt numquam quidem sequi suscipit ex veritatis omnis, doloribus, provident repellendus quis quibusdam quos ullam!</p>
                    <button>Learn more</button>
                </div>

                <div className="ourBlog__right"></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OurBlog