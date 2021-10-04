import { React, useState, useEffect } from 'react'
import HeaderTemp from '../Header/HeaderTemp'
import ScrollAnimation from 'react-animate-on-scroll'
import BannerCaraousel from '../BannerCarousel/BannerCarousel'
import Wrapper from '../HomeSectionTwo/Wrapper'
import Studies from '../HomeSectionThree/Studies'
import Footer from '../Footer/Footer'
import Benefits from '../HomeSectionFour/Benefits'
import Advantages from '../HomePageSectionFive/Advantages'
import { makeStyles } from '@material-ui/styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
  mainBackground: {
    backgroundColor: 'white',
  },
}))

function HomePage() {
  const classes = useStyles()
  const [wrapperInView, setWrapperInView] = useState(false)
  const [benefitsInView, setBenefitsInView] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <div className={classes.mainBackground}>
      <HeaderTemp />
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <BannerCaraousel />
      </ScrollAnimation>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Wrapper />
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Benefits />
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Advantages />
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Studies />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
