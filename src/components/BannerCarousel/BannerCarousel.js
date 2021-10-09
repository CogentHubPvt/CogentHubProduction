import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Carousel from 'react-bootstrap/Carousel'
import content from '../../ContentJson/content.json'
import { makeStyles } from '@material-ui/styles'
import 'bootstrap/dist/css/bootstrap.css'
let Background = 'https://www.agpaytech.co.uk/assets/img/dotted-bg.png'

const useStyles = makeStyles((theme) => ({
  carousel: {
    position: 'absolute',
    zIndex: 99,
    [theme.breakpoints.down('md')]: {
      top: '300px',
      left: '60px',
    },
    top: '500px',
    left: '150px',
    width: '75%',
    height: '100%',
  },
  bannerVideo: {
    position: 'relative',
    width: '100%',
    top: '0',
    left: '0',
    minHeight: '100vh',
    zIndex: -3,
    [theme.breakpoints.down('md')]: {
      top: 20,
    },
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  },
  overlay: {
    position: 'relative',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  container: {
    '& div': {
      '& ol': {
        '& li': {
          color: 'green',
        },
      },
    },
  },
  carouselItem: {
    height: '300px',
    top: 25,
    '& img': {
      [theme.breakpoints.down('md')]: {
        height: '400px',
      },
    },
  },
  carouselSlide: {
    position: 'absolute',
    width: '100%',
    top: '0',
    left: '0',
    minHeight: '300px',
  },
  carouselCaption: {
    // position: 'relative',
    position: 'relative',
    padding: '2rem',
    top: '20%',
    left: '0',
    zIndex: '3',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      margin: '0',
    },
    margin: '2rem',
    '$ h1': {
      fontSize: '19px',
      fontWeight: 'bold',
      textShadow:
        '2px 2px 0px  #000, -2px -2px 0px  #000, 2px -2px 0px  #000, -2px 2px 0px  #000',
    },
  },
  title: {
    fontSize: '35px',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
    fontWeight: 'bold',
    textShadow:
      '1px 1px 0px  #000, -1px -1px 0px  #000, 1px -1px 0px  #000, -2px 2px 0px  #000',
  },
  caption: {
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
    },
  },
  overlay: {
    backgroundImage: `url(${Background})`,
    width: '100%',
    height: '100vh',
    top: 100,
    left: 0,
    position: 'absolute',
    zIndex: -2,
  },
}))

export default function BannerCaraousel({}) {
  const classes = useStyles()
  const [flip, setFlip] = useState(true)

  const fadeUp = useSpring({
    to: { opacity: 1, height: 200 },
    from: { opacity: 0, height: 0 },
    delay: 100,
    reset: true,
    reverse: flip,
    onRest: () => setFlip(false),
  })

  const handleActive = () => {
    setFlip(true)
  }

  return (
    <div className={classes.container}>
      <div>
        <video
          src="https://cogent-images-and-files.s3.ap-south-1.amazonaws.com/bannerVideo.mp4"
          loop
          muted
          autoPlay
          className={classes.bannerVideo}
        ></video>
        <div className={classes.overlay}></div>
      </div>
      {/* <div className={classes.overlay}>
        <img src="https://www.agpaytech.co.uk/assets/img/dotted-bg.png" />
      </div> */}
      <Carousel
        className={classes.carousel}
        controls={false}
        onSlide={handleActive}
      >
        <Carousel.Item className={classes.carouselItem} interval={4000}>
          {/* <img
            className={classes.carouselSlide}
            src="/banner.gif"
            alt="Second slide"
          /> */}
          <Carousel.Caption className={classes.carouselCaption}>
            <animated.div style={fadeUp}>
              <h2 className={classes.title}>{content.SliderOne}</h2>
              <p className={classes.caption}>{content.SliderOneText}</p>
            </animated.div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.carouselItem} interval={4000}>
          {/* <img
            className={classes.carouselSlide}
            src="/banner.gif"
            alt="Second slide"
          /> */}

          <Carousel.Caption className={classes.carouselCaption}>
            <animated.div style={fadeUp}>
              <h1 className={classes.title}>{content.SliderTwo}</h1>
              <p>{content.SliderTwoText}</p>
            </animated.div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.carouselItem} interval={4000}>
          {/* <img
            className={classes.carouselSlide}
            src="/banner.gif"
            alt="Second slide"
          /> */}

          <Carousel.Caption className={classes.carouselCaption}>
            <animated.div style={fadeUp}>
              <h1 className={classes.title}>{content.SliderThird}</h1>
              <p>{content.SliderThirdText}</p>
            </animated.div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
