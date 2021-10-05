import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/styles'
import Button from 'react-bootstrap/Button'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'

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
      fontWeight: theme.fontWeight.bold,
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
      float: 'right',
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
}))

const Footer = ({ inView, setInView }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.services}>
        <a href="#" style={{ fontWeight: 'bold' }}>
          Our Services :{' '}
        </a>
        <a href="/services/integratedBPO">Integrated BPO</a>
        <a href="/services/knowledgeServices">Knowledge Services</a>
        <a href="/services/backOfficeManagement">Back Office Services</a>
        <a href="/services/frontOfficeManagement">Front Office Services</a>
        <a href="/services/bureauServices">Bureau Services</a>
      </div>
      <div className={classes.break}></div>
      <div className={classes.contact}>
        <img src="/cogentHub.png" className={classes.footerLogo} />
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Career</a>
        <a href="#">Locations</a>
        <div className={classes.rightAlign}>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="#">
            <LinkedInIcon />
          </a>
          <a href="#">
            <FacebookIcon />
          </a>
        </div>
      </div>
      <div className={classes.break}></div>
    </div>
  )
}

export default Footer
