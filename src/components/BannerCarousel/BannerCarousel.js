import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Carousel from 'react-bootstrap/Carousel'
import content from '../../ContentJson/content.json'
import { makeStyles } from '@material-ui/styles'
import 'bootstrap/dist/css/bootstrap.css'

const useStyles = makeStyles((theme) => ({
  carousel: {
    position: 'relative',
    marginTop: '2px',
    fontFamily: 'Montserrat',
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
      fontSize: '3rem',
      fontWeight: 'bold',
      fontFamily: 'Poppins',
      textShadow:
        '2px 2px 0px  #000, -2px -2px 0px  #000, 2px -2px 0px  #000, -2px 2px 0px  #000',
    },
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    fontFamily: 'Poppins',
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
      <Carousel
        className={classes.carousel}
        controls={false}
        onSlide={handleActive}
      >
        <Carousel.Item className={classes.carouselItem} interval={2000}>
          <img
            className={classes.carouselSlide}
            src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
          />
          <Carousel.Caption className={classes.carouselCaption}>
            <animated.div style={fadeUp}>
              <h1 className={classes.title}>{content.SliderOne}</h1>
              <p>{content.SliderOneText}</p>
            </animated.div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.carouselItem} interval={2000}>
          <img
            className={classes.carouselSlide}
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            alt="Second slide"
          />

          <Carousel.Caption className={classes.carouselCaption}>
            <animated.div style={fadeUp}>
              <h1 className={classes.title}>{content.SliderTwo}</h1>
              <p>{content.SliderTwoText}</p>
            </animated.div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.carouselItem} interval={2000}>
          <img
            className={classes.carouselSlide}
            src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />

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
