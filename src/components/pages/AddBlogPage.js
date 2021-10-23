import { React, useState, useEffect } from 'react'
import AddBlog from '../AddBlog/AddBlog'
import RichTextEditor from '../AddBlog/RichTextEditor'
import HeaderTemp from '../Header/HeaderTemp'
import Footer from '../Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function AddBlogPage() {
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
      <RichTextEditor />
      <Footer />
    </>
  )
}

export default AddBlogPage
