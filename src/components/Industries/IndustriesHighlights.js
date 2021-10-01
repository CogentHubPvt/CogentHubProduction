import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AOS from 'aos'

const useStyles = makeStyles((theme) => ({
  highlights: {
    padding: '1rem',
    [theme.breakpoints.down('md')]: {
      margin: '1rem',
    },
    boxShadow:
      'rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset',
  },
  highlightsHeader: {
    textAlign: 'center',
    margin: '20px',
    fontFamily: 'Montserrat',
    '& h2': {
      fontWeight: 'bold',
    },
  },
  highlightsContent: {
    textAlign: 'center',
  },
  data: {
    fontSize: '5rem',
    fontFamily: 'Montserrat',
    color: 'green',
  },
}))

const IndustriesHighlights = ({
  retailDataOne,
  retailDataTwo,
  retailDataThree,
  retailCaptionOne,
  retailCaptionTwo,
  retailCaptionThree,
}) => {
  const classes = useStyles()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <div className={classes.highlights} data-aos="fade-down">
        <div className={classes.highlightsHeader}>
          <h2>Highlights</h2>
        </div>
        <div className={classes.highlightsContent}>
          <Row data-aos="zoom-out">
            <Col md={true}>
              <p className={classes.data}>{retailDataOne}</p>
              <p>{retailCaptionOne}</p>
            </Col>
            <Col md={true}>
              <p className={classes.data}>{retailDataTwo}</p>
              <p>{retailCaptionTwo}</p>
            </Col>
            <Col md={true}>
              <p className={classes.data}>{retailDataThree}</p>
              <p>{retailCaptionThree}</p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default IndustriesHighlights
