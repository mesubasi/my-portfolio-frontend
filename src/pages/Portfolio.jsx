import React from 'react'
import Header from '../components/header/Header'
import Section from '../components/section/Section'
import Article from '../components/article/Article'

const Home = () => {
    return (
        <div className='bg-background bg-black bg-no-repeat overflow-y-hidden bg-right-top bg-local bg-auto min-w-full min-h-fit'>
            <Header />
            <Section />
            <Article />
        </div>
    )
}

export default Home
