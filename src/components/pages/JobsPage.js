import { React, useState, useEffect } from 'react'
import SearchBar from '../JobsOverview/SearchBar'
import AvailableRoles from '../JobsOverview/AvailableRoles'
import CareersConnect from './CareersConnect'
import HeaderTemp from '../Header/HeaderTemp'
import Footer from '../Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function JobsPage() {
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
      <SearchBar />
      <AvailableRoles />
      <CareersConnect />
      <Footer />
    </>
  )
}

export default JobsPage
