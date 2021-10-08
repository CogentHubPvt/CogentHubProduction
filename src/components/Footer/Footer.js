import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/styles'
import Button from 'react-bootstrap/Button'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    backgroundColor: theme.background.green,
    color: 'black',
  },
  newsletter: {
    margin: '1rem',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  title: {
    color: 'white',
    fontSize: theme.fontSize.h1,
    margin: '1rem 1rem 1rem 4rem',
    paddingTop: '1rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '10px',
    },
  },
  button: {
    fontSize: '1rem',
    margin: '0.5rem 1rem 0.5rem 4rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '10px',
    },
  },
  break: {
    border: '1px solid white',
    marginLeft: '4rem',
    [theme.breakpoints.down('md')]: {
      margin: '0',
    },
  },
  contact: {
    overflow: 'hidden',
    margin: '1rem 1rem 1rem 4rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '10px',
    },
    '& a': {
      float: 'left',
      [theme.breakpoints.down('md')]: {
        float: 'none',
        display: 'block',
      },
      color: 'white',
      textAlign: 'center',
      padding: '14px 16px',
      margin: '0.5rem 1.5rem 0 1.5rem',
      textDecoration: 'none',
      fontSize: theme.fontSize.p,
    },
    '& p': {
      float: 'left',
      [theme.breakpoints.down('md')]: {
        float: 'none',
        display: 'block',
      },
      color: 'white',
      margin: '0.5rem 0 0 0',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
      fontSize: theme.fontSize.p,
      fontWeight: theme.fontSize.bold,
    },
  },
  services: {
    marginTop: '2rem',
    overflow: 'hidden',
    marginLeft: '4rem',
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: '10px',
    },
    '& a': {
      [theme.breakpoints.down('md')]: {
        float: 'none',
        display: 'block',
      },
      color: 'white',
      padding: '0',
      textDecoration: 'none',
      fontSize: theme.fontSize.p,
      display: 'block',
      lineHeight: '2.5rem',
    },
    '& p': {
      [theme.breakpoints.down('md')]: {
        float: 'none',
        display: 'block',
      },
      color: 'white',
      padding: '0',
      textDecoration: 'none',
      fontSize: theme.fontSize.p,
    },
  },
  rightAlign: {
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      margin: '10px',
    },
    '& a': {
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      margin: '0.5rem 1.5rem 1rem 1.5rem',
      textDecoration: 'none',
      fontSize: theme.fontSize.p,
      border: '1px solid white',
      borderRadius: '50%',
      '&:hover': {
        backgroundColor: 'white',
        color: 'black',
      },
    },
  },
  footerLogo: {
    width: '120px',
    float: 'left',
    marginTop: '1rem',
  },
  contactUsButton: {
    float: 'left',
    margin: '0.5rem 1.5rem 1rem 1.5rem',
  },
  copyright: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  cogentLogo: {
    position: 'absolute',
    left: '70%',
  },
}))

const Footer = ({ inView, setInView }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Row>
        <Col md={true} className={classes.services}>
          <p style={{ fontSize: '19px', fontWeight: 'bold' }}>Our Services</p>
          <a href="/services/frontOfficeManagement">Front Office Management</a>
          <a href="/services/backOfficeManagement">Back Office Management</a>
          <a href="/services/knowledgeServices">Knowledge Services</a>
          <a href="/services/integratedBpo">Integrated BPO</a>
          <a href="/services/bureauServices">Bureau Services</a>
        </Col>
        <Col md={true} className={classes.services}>
          <p style={{ fontSize: '19px', fontWeight: 'bold' }}>Our Industries</p>
          <a href="/industries/retail">Fashion & Retail</a>
          <a href="/industries/travelTech">Travel Tech</a>
          <a href="/industries/ecommerce">Ecommerce</a>
          <a href="/industries/foodTech">Food Tech</a>
          <a href="/industries/edTech">Ed Tech</a>
        </Col>
        <Col md={true} className={classes.services}>
          <p style={{ fontSize: '19px', fontWeight: 'bold' }}>Insights</p>
          <a href="#">Case Studies</a>
          <a href="#">Blogs</a>
        </Col>
        <Col md={true} className={classes.services}>
          <p style={{ fontSize: '19px', fontWeight: 'bold' }}>About Us</p>
          <a href="/career">Join Our Family</a>
          <a href="/contactUs">Contact Us</a>
        </Col>
        <Col md={true} className={classes.services}>
          <p style={{ fontSize: '19px', fontWeight: 'bold' }}>Get In Touch</p>
          <p>info@cogenthub.com</p>
        </Col>
        {/* <img
          src="/CogenthubFooter.png"
          className={classes.cogentLogo}
          style={{ width: '400px', height: '100px' }}
        /> */}
      </Row>
      <div className={classes.break}></div>
      <Row className={classes.contact}>
        <Col style={{ margin: 'inherit', marginLeft: '0' }}>
          <img
            src="/CogenthubFooter.png"
            style={{ width: '350px', height: '100px' }}
          />
        </Col>
        <Col
          className={classes.rightAlign}
          style={{ margin: 'auto', marginLeft: '65px' }}
        >
          <a href="https://twitter.com/hubcogent">
            <TwitterIcon />
          </a>
          <a href="https://www.linkedin.com/company/cogenthub/">
            <LinkedInIcon />
          </a>
          <a href="https://www.facebook.com/CogentHubOutsourcing/">
            <FacebookIcon />
          </a>
        </Col>
        <Col className={classes.copyright}>
          <p>Copyright</p>
        </Col>
      </Row>
      <div className={classes.break}></div>
    </div>
  )
}

export default Footer
