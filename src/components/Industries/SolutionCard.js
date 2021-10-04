import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import AOS from 'aos'
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
  icon: {
    width: '60px',
    height: '60px',
    color: theme.background.green,
  },
  iconContainer: {
    textAlign: 'center',
  },
  solutionName: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
}))

const SolutionCard = ({ solution }) => {
  const classes = useStyles()
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <>
      <div data-aos="flip-left">
        <div className={classes.iconContainer}>
          <StoreOutlinedIcon className={classes.icon} />
        </div>
        <div className={classes.solutionName}>Dummy Solution</div>
      </div>
    </>
  )
}

export default SolutionCard
