import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import content from '../../ContentJson/content.json'
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    '& h1': {
      fontSize: '3rem',
    },
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: '1rem',
  },
  subText: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    '& p': {
      fontSize: '1.5rem',
    },
    marginBottom: '3rem',
  },
  row: {
    width: '70%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  card: {
    padding: 0,
    margin: 0,
    textAlign: 'center',
    '& h3': {
      margin: '1rem',
    },
    '& p': {
      margin: '1rem',
    },
  },
  icon: {
    width: '60px',
    height: '60px',
    color: theme.background.green,
  },
}))

const Benefits = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.title}>
        <h1>Benefits</h1>
      </div>
      <div className={classes.container}>
        <Row className={classes.row}>
          <Col sm className={classes.card} data-aos="fade-down">
            <StoreOutlinedIcon className={classes.icon} />
            <h3>Benefit</h3>
            <p>{content.BenefitTextOne}</p>
          </Col>
          <Col sm className={classes.card} data-aos="fade-down">
            <StoreOutlinedIcon className={classes.icon} />
            <h3>Benefit</h3>
            <p>{content.BenefitTextOne}</p>
          </Col>
          <Col sm className={classes.card} data-aos="fade-down">
            <StoreOutlinedIcon className={classes.icon} />
            <h3>Benefit</h3>
            <p>{content.BenefitTextOne}</p>
          </Col>
          <Col sm className={classes.card} data-aos="fade-down">
            <StoreOutlinedIcon className={classes.icon} />
            <h3>Benefit</h3>
            <p>{content.BenefitTextOne}</p>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Benefits
