import { React, useState, useEffect } from 'react'
import Vision from '../Discover/Vision'
import Mission from '../Discover/Mission'
import GrowthStory from '../Discover/GrowthStory'
import Leadership from '../Discover/Leadership'
import HeaderTemp from '../Header/HeaderTemp'
import Footer from '../Footer/Footer'
import AOS from 'aos'

function Discover() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <HeaderTemp />
      </div>
      <div data-aos="fade-down">
        <Vision />
      </div>
      {/* <Mission /> */}
      <div>
        <GrowthStory />
      </div>
      <div>
        <Leadership />
      </div>
      <Footer />
    </>
  )
}

export default Discover
