import React from 'react'
import Home from './Home'
import Footer from './Footer'
import Carousel from './Carousel'
import QuizHome from './QuizHome'

const HomeComp = () => {
    return (
        <div>
        <Carousel />
        <Home />
        <QuizHome />
        <Footer />
        </div>
    )
}

export default HomeComp
