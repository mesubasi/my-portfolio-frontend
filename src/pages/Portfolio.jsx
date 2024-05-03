import React from 'react'
import Header from '../components/header/Header'
import Section from '../components/section/Section'
import Article from '../components/article/Article'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <div className='bg-background bg-black bg-no-repeat bg-right-top bg-local bg-auto min-w-max min-h-max'>
            <Header />
            <Section />
            <Article />
            <Footer />
        </div>
    )
}

export default Home
