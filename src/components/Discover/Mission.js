import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Container from 'react-bootstrap/Container'
import MenuIcon from '@material-ui/icons/Menu'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AOS from 'aos'

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '3rem',
  },
  iconContainer: {
    textAlign: 'center',
  },
  icon: {
    fontSize: '2rem',
    margin: '10px',
  },
  mission: {
    textAlign: 'left ',
    '& p': {
      fontSize: '1.75rem',
    },
  },
}))

function Mission() {
  const classes = useStyles()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <div className={classes.container} data-aos="fade-down">
      <div>
        <div>
          <h1>Our Missions</h1>
        </div>
        <Row>
          <Col md={2} className={classes.iconContainer}>
            <MenuIcon className={classes.icon} />
          </Col>
          <Col md={10} className={classes.mission}>
            <p>
              Provide cost effective, innovative, qualitative and on-time
              solutions.
            </p>
          </Col>
          <Col md={2} className={classes.iconContainer}>
            <MenuIcon className={classes.icon} />
          </Col>
          <Col md={10} className={classes.mission}>
            <p>
              Provide cost effective, innovative, qualitative and on-time
              solutions.
            </p>
          </Col>
          <Col md={3} className={classes.iconContainer}>
            <MenuIcon className={classes.icon} />
          </Col>
          <Col md={9} className={classes.mission}>
            <p>
              Provide cost effective, innovative, qualitative and on-time
              solutions.
            </p>
          </Col>
          <Col md={3} className={classes.iconContainer}>
            <MenuIcon className={classes.icon} />
          </Col>
          <Col md={9} className={classes.mission}>
            <p>
              Provide cost effective, innovative, qualitative and on-time
              solutions.
            </p>
          </Col>
          <Col md={3} className={classes.iconContainer}>
            <MenuIcon className={classes.icon} />
          </Col>
          <Col md={9} className={classes.mission}>
            <p>
              Provide cost effective, innovative, qualitative and on-time
              solutions.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Mission
