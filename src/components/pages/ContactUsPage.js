import { React, useState, useEffect } from 'react'
import HeaderTemp from '../Header/HeaderTemp'
import Footer from '../Footer/Footer'
import AOS from 'aos'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/styles'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const useStyles = makeStyles((theme) => ({
  map: {
    width: '100%',
    height: '445px',
    margin: '2rem',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 0',
    },
  },
  info: {
    margin: '2rem',
    padding: '2rem',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 0',
    },
    borderRadius: '20px',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
  },
  form: {
    margin: '2rem',
    padding: '2rem',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 0',
    },
    borderRadius: '20px',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
  },
}))

function ContactUsPage() {
  const classes = useStyles()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <HeaderTemp />
      </div>
      <Container>
        <Row>
          <Col md={true}>
            <div>
              <iframe
                className={classes.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9649530614884!2d88.43495321495969!3d22.58041408517872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a94dd40001%3A0x9d0f74c71ae0ad26!2sCogentHub%20Private%20Limited!5e0!3m2!1sen!2sin!4v1616161540347!5m2!1sen!2sin"
              ></iframe>
            </div>
          </Col>
          <Col md={true}>
            <div className={classes.info}>
              <h1>Address</h1>
              <p style={{ fontSize: '19px' }}>
                CogentHub Pvt Ltd Martin Burn Business Park, Level 7, Plot 3, BP
                Block, Sector V, Bidhannagar, Kolkata 700091, West Bengal India
              </p>
              <h1>Mail Us</h1>
              <p>info@cogenthub.com</p>
              <h1>Terms & Conditions</h1>
              <p>Privacy Policy</p>
              <p>Terms </p>
            </div>
          </Col>
        </Row>
        <Form className={classes.form}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '19px', fontWeight: 'bold' }}>
                  How Can We Help?
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '19px', fontWeight: 'bold' }}>
                  First Name
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '19px', fontWeight: 'bold' }}>
                  Last Name
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '19px', fontWeight: 'bold' }}>
                  Email address
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '19px', fontWeight: 'bold' }}>
                  Phone Number
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '19px', fontWeight: 'bold' }}>
                  City
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '19px', fontWeight: 'bold' }}>
                  Country
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: 'center' }}>
              <Button variant="outline-warning">Submit</Button>{' '}
            </Col>
          </Row>
        </Form>
      </Container>
      <Footer />
    </>
  )
}

export default ContactUsPage
