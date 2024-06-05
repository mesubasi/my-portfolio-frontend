// About.jsx

import React from 'react'
import Header from "../components/header/Header";

const About = () => {
  return (
    <>
      <div className='fixed inset-0 bg-background bg-black bg-no-repeat bg-right-top bg-local bg-auto'>
        <Header firstLink={"/portfolio"} secondLink={"/contact"} pageName={"Home"} pageNameSecond={"Contact"} />
      </div >
    </>
  )
}

export default About
