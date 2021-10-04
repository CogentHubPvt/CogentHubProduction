import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SolutionCard from './SolutionCard'
import AOS from 'aos'

const useStyles = makeStyles((theme) => ({
  solutions: {
    // margin: '3rem',
    // padding: '1rem',
    [theme.breakpoints.down('md')]: {
      margin: '1rem',
    },
  },
  solutionsTitle: {
    textAlign: 'center',
    margin: '30px 20px 20px 20px',
    fontFamily: 'Montserrat',
    '& h2': {
      fontWeight: 'bold',
      fontSize: '3rem',
    },
  },
  Top: {
    padding: '20px',
  },
  solutionsSubtext: {
    padding: '20px',
    margin: '2rem 5rem',
  },
  solutionsContent: {
    margin: '1rem 5rem',
  },
}))

const IndustriesSolutions = ({ solutions, solutionsSubText }) => {
  const classes = useStyles()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <div className={classes.solutions} data-aos="zoom-in-down">
        <div className={classes.solutionsTitle}>
          <h2>Solutions</h2>
        </div>
        <div className={classes.solutionsSubtext}>
          <p>{solutionsSubText}</p>
        </div>
        <div className={classes.solutionsContent}>
          <Row>
            {solutions.map((solution) => {
              return (
                <Col md={3} className={classes.Top}>
                  <SolutionCard
                    solution={solution}
                    data-aos="flip-left"
                    data-aos-offset="3000"
                    data-aos-duration="3000"
                  />
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    </>
  )
}

export default IndustriesSolutions
