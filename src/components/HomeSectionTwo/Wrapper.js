import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  informationBox: {
    width: '70%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },

    minHeight: '250px',
    textAlign: 'center',
    boxShadow: 'rgb(0 0 0 / 24%) 0px 3px 8px',
    padding: '2rem',
    '& h1': {
      fontWeight: theme.fontWeight.bold,
    },
    marginBottom: '6rem',
    marginTop: '6rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '3 rem',
    marginBottom: '2rem',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    boxShadow: 'rgb(0 0 0 / 24%) 0px 3px 8px',
    padding: '10px 10px 10px 10px',
    borderRadius: '30px',
    backgroundColor: theme.background.green,
    '& a': {
      textDecoration: 'none',
      color: 'white',
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
    width: '40%',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Wrapper = ({ inView, setInView }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.informationBox}>
        <h1>Why CogentHub</h1>
        <p style={{ fontSize: '19px' }}>
          Businesses encounter several challenges during their lifecycle. At
          CogentHub, we help to address these hurdles by contributing
          unparalleled services in management consulting. We harness the most
          advanced technology towards delivering a delightful experience for
          your customers. CogentHub achieves excellence by deploying
          immaculately planned operations without any compromise.
        </p>
        <p style={{ fontSize: '19px' }}>
          CogentHub presents a wide array of services ranging from front-office
          management, knowledge services, integrated BPO and back-office
          management. We continue to service clients in the Retail, Telecom,
          Finance, Utilities, Healthcare and Travel industries. We have
          thoughtfully created a passionate group of professionals that prides
          itself in delivering objectives set out by you. This team subscribes
          itself to your thought process and goals and endeavours to effectively
          fuel your business growth.
        </p>
        <div className={classes.buttonContainer} data-aos="zoom-in">
          <div className={classes.button}>
            <a href="/discover">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wrapper
