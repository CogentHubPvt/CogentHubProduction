import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Carousel from 'react-bootstrap/Carousel'
import AOS from 'aos'
let Background = 'https://www.agpaytech.co.uk/assets/img/dotted-bg.png'

const useStyles = makeStyles((theme) => ({
  bannerImage: {
    height: '80%',
    '& img': {
      [theme.breakpoints.down('md')]: {
        height: '70vh',
        width: '100%',
      },
    },
  },
  overlay: {
    backgroundImage: `url(${Background})`,
    width: '100%',
    height: '100vh',
    top: 0,
    left: 0,
    position: 'absolute',
    zIndex: -2,
  },
  bannerText: {
    position: 'relative',
    padding: '2rem',
    top: '20%',
    left: '0',
    zIndex: '3',
    [theme.breakpoints.down('md')]: {
      top: '0',
    },
    '& h1': {
      color: 'white',
      fontSize: theme.fontSize.bannerTitle,
      textShadow:
        '1px 1px 0px  #000, -1px -1px 0px  #000, 1px -1px 0px  #000, -2px 2px 0px  #000',
      [theme.breakpoints.down('md')]: {
        fontSize: theme.fontSize.h1,
      },
    },
    '& p': {
      fontWeight: theme.fontWeight.bold,
      [theme.breakpoints.down('md')]: {
        fontSize: theme.fontSize.p,
      },
    },
  },
  carouselSlide: {
    position: 'absolute',
    width: '100%',
    top: '0',
    left: '0',
    minHeight: '100vh',
    zIndex: -3,
  },
}))

const IndustriesBanner = ({ bannerTitle, bannerSubText, img }) => {
  const classes = useStyles()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <div data-aos="fade-down">
        <Carousel
          controls={false}
          indicators={false}
          className={classes.bannerImage}
        >
          <Carousel.Item style={{ height: '600px' }}>
            <div className={classes.overlay}></div>
            <img
              className={classes.carouselSlide}
              src={img}
              alt="First slide"
            />
            <Carousel.Caption className={classes.bannerText}>
              <h1 className={classes.title}>{bannerTitle}</h1>
              <p>{bannerSubText}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default IndustriesBanner
