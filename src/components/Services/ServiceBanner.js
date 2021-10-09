import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import Carousel from 'react-bootstrap/Carousel'
import content from '../../ContentJson/content.json'
import { makeStyles } from '@material-ui/styles'
import 'bootstrap/dist/css/bootstrap.css'
let Background = 'https://www.agpaytech.co.uk/assets/img/dotted-bg.png'

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: 'hidden',
  },
  carousel: {
    position: 'relative',
  },
  overlay: {
    backgroundImage: `url(${Background})`,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    zIndex: -2,
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
    zIndex: -3,
  },
  carouselCaption: {
    position: 'relative',
    // backgroundColor: 'rgba(194, 183, 189, 0.7)',
    zIndex: '3',
    '& h1': {
      fontSize: theme.fontSize.bannerTitle,
      textShadow:
        '1px 1px 0px  #000, -1px -1px 0px  #000, 1px -1px 0px  #000, -2px 2px 0px  #000',
    },
    '& p': {
      fontSize: theme.fontSize.p,
      textShadow:
        '0.5px 0.5px 0px  #000, -0.5px -0.5px 0px  #000, 0.5px -0.5px 0px  #000, -2px 2px 0px  #000',
    },
  },
}))

export default function ServiceBanner({ service, isHeader }) {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    if (service === 'IntegratedBpo') {
      setTitle(content.IntegratedBpoTitle)
      setSubTitle(content.IntegratedBpoSubTitle)
      setImage(content.IntegratedBpoImage)
    } else if (service === 'KnowledgeServices') {
      setTitle(content.KnowledgeServicesTitle)
      setSubTitle(content.KnowledgeServicesSubTitle)
      setImage(content.KnowledgeServicesImage)
    } else if (service === 'BackOfficeManagement') {
      setTitle(content.BackOfficeManagementTitle)
      setSubTitle(content.BackOfficeManagementSubTitle)
      setImage(content.BackOfficeImage)
    } else if (service === 'FrontOfficeManagement') {
      setTitle(content.FrontOfficeManagementTitle)
      setSubTitle(content.FrontOfficeManagementSubTitle)
      setImage(content.FrontOfficeImage)
    } else if (service === 'BureauServices') {
      setTitle(content.BureauServicesTitle)
      setSubTitle(content.BureauServicesSubTitle)
      setImage(content.BureauServicesImage)
    }
  }, [])

  return (
    <div style={{ display: 'block' }} className={classes.container}>
      <Carousel className={classes.carousel} controls={false}>
        <Carousel.Item className={classes.carouselItem} interval={2000}>
          <div className={classes.overlay}></div>
          <img
            className={classes.carouselSlide}
            src={image}
            alt="First slide"
          />
          <Carousel.Caption>
            <div data-aos="fade-up" className={classes.carouselCaption}>
              <h1>{title}</h1>
              <p>{subTitle}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
