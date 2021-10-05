import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AOS from 'aos'

const useStyles = makeStyles((theme) => ({
  highlights: {
    padding: '1rem',
    margin: '3rem',
    [theme.breakpoints.down('md')]: {
      margin: '1rem',
    },
  },
  highlightsHeader: {
    textAlign: 'center',
    margin: '20px',
    color: theme.text.secondary,
    '& h2': {
      fontWeight: theme.fontWeight.bold,
    },
  },
  highlightsContent: {
    textAlign: 'center',
    borderRadius: '20px',
    backgroundColor: theme.background.lightGreen,
  },
  data: {
    fontSize: '5rem',
    color: theme.text.primary,
    marginBottom: '0',
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
