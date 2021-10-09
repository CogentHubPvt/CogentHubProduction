import { React, useState, useEffect } from 'react'
import CareerInfo from '../CareerPageOverview/CareerInfo'
import HeaderTemp from '../Header/HeaderTemp'
import Footer from '../Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function CareerPage(isHeader, setIsHeader) {
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
        <HeaderTemp setIsHeader={setIsHeader} isHeader={isHeader} />
      </div>
      <CareerInfo />
      <Footer />
    </>
  )
}

export default CareerPage
