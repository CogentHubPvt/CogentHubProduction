import { React, useState, useEffect } from 'react'
import IndustriesBanner from '../Industries/IndustriesBanner'
import IndustriesHighlights from '../Industries/IndustriesHighlights'
import IndustriesSolutions from '../Industries/IndustriesSolutions'
import HeaderTemp from '../Header/HeaderTemp'
import Footer from '../Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.background.lightGreen,
  },
}))

function IndustriesPage({
  bannerTitle,
  bannerSubText,
  retailDataOne,
  retailDataTwo,
  retailDataThree,
  retailCaptionOne,
  retailCaptionTwo,
  retailCaptionThree,
  solutions,
  solutionsSubText,
  img,
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <div>
      <div data-aos="fade-right">
        <HeaderTemp />
      </div>
      <div data-aos="fade-right">
        <IndustriesBanner
          bannerTitle={bannerTitle}
          bannerSubText={bannerSubText}
          img={img}
        />
      </div>
      {/* <div data-aos="fade-right">
        <IndustriesHighlights
          retailDataOne={retailDataOne}
          retailDataTwo={retailDataTwo}
          retailDataThree={retailDataThree}
          retailCaptionOne={retailCaptionOne}
          retailCaptionTwo={retailCaptionTwo}
          retailCaptionThree={retailCaptionThree}
        />
      </div> */}
      <div data-aos="fade-right">
        <IndustriesSolutions
          solutions={solutions}
          solutionsSubText={solutionsSubText}
        />
      </div>
      <Footer />
    </div>
  )
}

export default IndustriesPage
