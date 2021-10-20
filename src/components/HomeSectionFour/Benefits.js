import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import content from '../../ContentJson/content.json'
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined'
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined'
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'

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
    color: theme.background.yellow,
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
            <DoneAllOutlinedIcon className={classes.icon} />
            <h3>{content.BenefitTitleOne}</h3>
            <p>{content.BenefitTextOne}</p>
          </Col>
          <Col sm className={classes.card} data-aos="fade-down">
            <SecurityOutlinedIcon className={classes.icon} />
            <h3>{content.BenefitTitleTwo}</h3>
            <p>{content.BenefitTextTwo}</p>
          </Col>
          <Col sm className={classes.card} data-aos="fade-down">
            <SupervisedUserCircleOutlinedIcon className={classes.icon} />
            <h3>{content.BenefitTitleThree}</h3>
            <p>{content.BenefitTextThree}</p>
          </Col>
          <Col sm className={classes.card} data-aos="fade-down">
            <MonetizationOnOutlinedIcon className={classes.icon} />
            <h3>{content.BenefitTitleFour}</h3>
            <p>{content.BenefitTextFour}</p>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Benefits
