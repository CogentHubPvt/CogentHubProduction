import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import content from '../../ContentJson/content.json'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import SolutionCard from '../Industries/SolutionCard'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '6rem',
  },
  Title: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem',
    '& h2': {
      fontSize: '3rem',
    },
    '& p': {
      display: 'block',
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
  solutions: {
    width: '95%',
    margin: '20px',
  },
}))

function ServicesSolutions({ service }) {
  const classes = useStyles()
  const [solutions, setSolutions] = useState([])
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
    if (service === 'IntegratedBpo') {
      setSolutions(content.IntegratedBpoSolution)
    } else if (service === 'KnowledgeServices') {
      setSolutions(content.KnowledgeServicesSolution)
    } else if (service === 'BackOfficeManagement') {
      setSolutions(content.BackOfficeManagementSolution)
    } else if (service === 'FrontOfficeManagement') {
      setSolutions(content.FrontOfficeManagementSolution)
    } else if (service === 'BureauServices') {
      setSolutions(content.BureauServicesSolution)
    }
  }, [])

  return (
    <div className={classes.container} data-aos="fade-right">
      <div className={classes.Title}>
        <h2>Solutions</h2>
        {/* <p>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum</p> */}
      </div>
      <div className={classes.underlineContainer}>
        <div className={classes.Underline}></div>
      </div>
      <Row className={classes.solutions}>
        {solutions.map((solution) => {
          return (
            <Col style={{ padding: '2px' }}>
              <Card style={{ height: '20rem' }}>
                <Card.Header>Solution</Card.Header>
                <Card.Body>
                  <Card.Title>{solution.Title}</Card.Title>
                  <Card.Text>{solution.Caption}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default ServicesSolutions
