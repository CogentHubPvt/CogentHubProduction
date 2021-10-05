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
    paddingTop: '2rem',
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
    width: '30%',
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
        <h1>Podcast Plug-In</h1>
        <p>
          Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum
          <br /> Ipsum Lorum Ipsum
        </p>

        <div className={classes.buttonContainer} data-aos="zoom-in">
          <div className={classes.button}>
            <a href="#">Button Text</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wrapper
