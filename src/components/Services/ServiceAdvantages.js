import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import content from '../../ContentJson/content.json'
import Container from 'react-bootstrap/Container'
import { makeStyles } from '@material-ui/styles'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import 'bootstrap/dist/css/bootstrap.css'

const useStyles = makeStyles((theme) => ({
  Title: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem',
    '& h2': {
      fontSize: '3rem',
    },
  },
  Underline: {
    display: 'block',
    border: '2px green solid',
    width: '20%',
  },
  underlineContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  benefitsInfoTitle: {
    display: 'flex',
    justifyContent: 'left',
    paddingTop: '20px',
    marginLeft: '1rem',
    color: theme.text.primary,
  },
  benefitsInfoSubtext: {
    display: 'flex',
    justifyContent: 'left',
    paddingTop: '10px',
    marginLeft: '1rem',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'right',
    [theme.breakpoints.down('md')]: {
      display: 'inline-block',
    },
  },
  icon: {
    width: '120px',
    height: '120px',
    color: '#7393B3',
    [theme.breakpoints.down('md')]: {
      width: '60px',
      height: '60px',
    },
    color: theme.text.primary,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
    [theme.breakpoints.down('md')]: {
      margin: '30px 0',
    },
  },
  advantages: {
    boxShadow:
      'rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset',
    width: '95%',
    padding: '10px',
  },
}))

export default function ServiceAdvantages({ service }) {
  const classes = useStyles()
  const [advantages, setAdvantages] = useState([])

  useEffect(() => {
    if (service === 'IntegratedBpo') {
      setAdvantages(content.IntegratedBpoAdvantages)
    } else if (service === 'KnowledgeServices') {
      setAdvantages(content.KnowledgeServicesAdvantages)
    } else if (service === 'BackOfficeManagement') {
      setAdvantages(content.BackOfficeManagementAdvantages)
    } else if (service === 'FrontOfficeManagement') {
      setAdvantages(content.FrontOfficeManagementAdvantages)
    } else if (service === 'BureauServices') {
      setAdvantages(content.BureauServicesAdvantages)
    }
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.advantages}>
        <div className={classes.Title}>
          <h2>Why Us?</h2>
        </div>
        <Container>
          {advantages.map((advantage) => {
            return (
              <Row data-aos="fade-up-right">
                <Col sm={3} className={classes.iconContainer}>
                  <ArrowForwardIosIcon className={classes.icon} />
                </Col>
                <Col sm={9}>
                  <div className={classes.benefitsInfoTitle}>
                    <h2>{advantage.Title}</h2>
                  </div>
                  <div className={classes.benefitsInfoSubtext}>
                    <p>{advantage.SubText}</p>
                  </div>
                </Col>
              </Row>
            )
          })}
        </Container>
      </div>
    </div>
  )
}
