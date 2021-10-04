import { React, useState, useEffect } from 'react'
import Blogs from '../Blogs/Blogs'
import HeaderTemp from '../Header/HeaderTemp'
import Footer from '../Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function BlogsPage() {
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
      <Blogs />
      <Footer />
    </>
  )
}

export default BlogsPage
