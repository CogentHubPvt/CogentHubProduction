import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Carousel from 'react-bootstrap/Carousel'
import content from '../../ContentJson/content.json'
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
      [theme.breakpoints.down('md')]: {
        margin: '0',
        fontSize: '3rem',
      },
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
  const [index, setIndex] = useState(0)
  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')
  const [bio, setBio] = useState('')

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    console.log(index)
    console.log(selectedIndex)
    console.log('INDEX')
    if (selectedIndex === 0) {
      setName(content.Dhiren.Name)
      setDesignation(content.Dhiren.Designation)
      setBio(content.Dhiren.Bio)
    } else if (selectedIndex === 1) {
      setName(content.Vivek.Name)
      setDesignation(content.Vivek.Designation)
      setBio(content.Vivek.Bio)
    } else if (selectedIndex === 2) {
      setName(content.Habinder.Name)
      setDesignation(content.Habinder.Designation)
      setBio(content.Habinder.Bio)
    } else if (selectedIndex === 3) {
      setName(content.Nikole.Name)
      setDesignation(content.Nikole.Designation)
      setBio(content.Nikole.Bio)
    } else if (selectedIndex === 4) {
      setName(content.Avinash.Name)
      setDesignation(content.Avinash.Designation)
      setBio(content.Avinash.Bio)
    } else if (selectedIndex === 5) {
      setName(content.Sunny.Name)
      setDesignation(content.Sunny.Designation)
      setBio(content.Sunny.Bio)
    }
  }

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
          <hr />
          <h2>
            {name}
            <p style={{ color: '#188C4F' }}>
              <em>{designation}</em>
            </p>
          </h2>
          <p style={{ fontSize: '20px' }}>{bio}</p>
        </Col>
        <Col md={true}>
          <Carousel fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.cogenthub.com/img/Dhiren.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.cogenthub.com/img/Vivek.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.cogenthub.com/img/Harbinder.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.cogenthub.com/img/Nikole.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.cogenthub.com/img/Avinash.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.cogenthub.com/img/Suny.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default Leadership
