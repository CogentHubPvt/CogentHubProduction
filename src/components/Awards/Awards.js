import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import content from '../../ContentJson/content.json'
import Container from 'react-bootstrap/Container'
import AOS from 'aos'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import useWindowDimensions from '../../useWindowDimensions'

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '6rem',
  },
}))

function Awards() {
  const classes = useStyles()
  const [phoneView, setPhoneView] = useState(false)
  const { height, width } = useWindowDimensions()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
    if (width <= 500) {
      setPhoneView(true)
    } else {
      setPhoneView(false)
    }
  }, [])

  return (
    <>
      <div className={classes.container}>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              style={{ height: '240px' }}
              src="https://www.cogenthub.com/img/award4.jpg"
            />
            <Card.Body>
              <Card.Title>ISO/IEC 27701 CERTIFIED</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              style={{ height: '240px' }}
              src="https://www.cogenthub.com/img/award2.jpg"
            />
            <Card.Body>
              <Card.Title>ISO 9001 CERTIFIED</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              style={{ height: '240px' }}
              src="https://www.cogenthub.com/img/award3.jpg"
            />
            <Card.Body>
              <Card.Title>ISO/IEC 27001 CERTIFIED</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.cogenthub.com/img/award1.jpg"
            />
            <Card.Body>
              <Card.Title>CERTIFICATION OF HONOUR</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  )
}

export default Awards