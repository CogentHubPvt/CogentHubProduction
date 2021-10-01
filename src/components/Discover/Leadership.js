import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AOS from 'aos'

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '3rem',
    boxShadow:
      'rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset',
  },
  leadershipTitle: {
    textAlign: 'center',
    '& h1': {
      fontSize: '4rem',
      margin: '2rem',
    },
    '& p': {
      fontSize: '1.5rem',
      margin: '2rem',
    },
  },
}))

function Leadership() {
  const classes = useStyles()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <div className={classes.container} data-aos="fade-down">
      <Row>
        <Col md={true} className={classes.leadershipTitle}>
          <h1>Executive Leadership</h1>
          <p>
            We have always striven to deliver the best. CogentHub has been
            recognized for its efforts at various industry platforms.
          </p>
        </Col>
        <Col md={true}>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dummyimage.com/600x400/000/fff"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dummyimage.com/600x400/000/fff"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dummyimage.com/600x400/000/fff"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default Leadership
