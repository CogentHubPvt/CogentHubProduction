import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Carousel from 'react-bootstrap/Carousel'
import AOS from 'aos'

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
  bannerText: {
    top: '15%',
    [theme.breakpoints.down('md')]: {
      top: '0',
    },
    '& h1': {
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
          variant="dark"
        >
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="First slide" />
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
