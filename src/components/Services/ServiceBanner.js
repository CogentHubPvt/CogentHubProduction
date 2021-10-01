import React, { useState, useEffect } from 'react'
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
    '& h1': {
      fontSize: '3rem',
      textShadow:
        '1px 1px 0px  #000, -1px -1px 0px  #000, 1px -1px 0px  #000, -2px 2px 0px  #000',
    },
    '& p': {
      fontSize: '1rem',
      textShadow:
        '0.5px 0.5px 0px  #000, -0.5px -0.5px 0px  #000, 0.5px -0.5px 0px  #000, -2px 2px 0px  #000',
    },
  },
}))

export default function ServiceBanner({ service }) {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')

  useEffect(() => {
    if (service === 'IntegratedBpo') {
      setTitle(content.IntegratedBpoTitle)
      setSubTitle(content.IntegratedBpoSubTitle)
    } else if (service === 'KnowledgeServices') {
      setTitle(content.KnowledgeServicesTitle)
      setSubTitle(content.KnowledgeServicesSubTitle)
    } else if (service === 'BackOfficeManagement') {
      setTitle(content.BackOfficeManagementTitle)
      setSubTitle(content.BackOfficeManagementSubTitle)
    } else if (service === 'FrontOfficeManagement') {
      setTitle(content.FrontOfficeManagementTitle)
      setSubTitle(content.FrontOfficeManagementSubTitle)
    } else if (service === 'BureauServices') {
      setTitle(content.BureauServicesTitle)
      setSubTitle(content.BureauServicesSubTitle)
    }
  }, [])

  return (
    <Carousel className={classes.carousel} controls={false}>
      <Carousel.Item className={classes.carouselItem} interval={2000}>
        <img
          className={classes.carouselSlide}
          src={content.IntegratedBpoImage}
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
  )
}
