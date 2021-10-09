import { React, useState, useEffect } from 'react'
import HeaderTemp from '../Header/HeaderTemp'
import Footer from '../Footer/Footer'
import ServiceBanner from '../Services/ServiceBanner'
import ServiceAdvantages from '../Services/ServiceAdvantages'
import ServicesSolutions from '../Services/ServicesSolutions'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ServicesPage({ service, isHeader, setIsHeader }) {
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
      <div>
        <ServiceBanner service={service} isHeader={isHeader} />
      </div>
      <div>
        <ServiceAdvantages service={service} />
      </div>
      <div>
        <ServicesSolutions service={service} />
      </div>
      <Footer />
    </>
  )
}

export default ServicesPage
