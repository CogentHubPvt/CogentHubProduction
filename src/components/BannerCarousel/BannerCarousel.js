import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Carousel from 'react-bootstrap/Carousel'
import content from '../../ContentJson/content.json'
import { makeStyles } from '@material-ui/styles'
import 'bootstrap/dist/css/bootstrap.css'

const useStyles = makeStyles((theme) => ({
  carousel: {
    position: 'absolute',
    zIndex: 99,
    top: '200px',
    left: '200px',
    width: '75%',
    height: '100%',
  },
  bannerVideo: {
    position: 'relative',
    zIndex: 0,
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
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
    height: '600px',
    '& img': {
      [theme.breakpoints.down('md')]: {
        height: '100vh',
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
    display: 'flex',
    justifyContent: 'left',
    alignItem: 'left',
    textAlign: 'left',
    '$ h1': {
      fontSize: theme.fontSize.h1,
      fontWeight: 'bold',
      textShadow:
        '2px 2px 0px  #000, -2px -2px 0px  #000, 2px -2px 0px  #000, -2px 2px 0px  #000',
    },
  },
  title: {
    fontSize: theme.fontSize.bannerTitle,
    fontWeight: 'bold',
    textShadow:
      '1px 1px 0px  #000, -1px -1px 0px  #000, 1px -1px 0px  #000, -2px 2px 0px  #000',
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
          src="/bannerVideo.mp4"
          loop
          muted
          autoPlay
          className={classes.bannerVideo}
        ></video>
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
              <h1 className={classes.title}>{content.SliderOne}</h1>
              <p>{content.SliderOneText}</p>
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
