import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import content from '../../ContentJson/content.json'
import Container from 'react-bootstrap/Container'
import AOS from 'aos'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PeopleIcon from '@material-ui/icons/People'
import EventNoteIcon from '@material-ui/icons/EventNote'
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import Card from 'react-bootstrap/Card'
import useWindowDimensions from '../../useWindowDimensions'

const useStyles = makeStyles((theme) => ({
  career: {
    margin: '1.5rem',
    boxShadow: 'rgb(0 0 0 / 35%) 0px 5px 15px',
  },
  about: {
    margin: '1.5rem',
    boxShadow: 'rgb(0 0 0 / 35%) 0px 5px 15px',
  },
  aboutInfo: {
    padding: '30px',
  },
  aboutImage: {
    textAlign: 'right',
    height: '357px',
  },
  career: {
    margin: '1.5rem 1.5rem 0 1.5rem',
    boxShadow: 'rgb(0 0 0 / 35%) 0px 5px 15px',
  },
  careerInfo: {
    padding: '30px',
  },
  image: {
    height: '357px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  benefitsName: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  icon: {
    width: '210px',
    height: '210px',
    color: theme.background.yellow,
  },
  benefitsInfoTitle: {
    display: 'flex',
    justifyContent: 'left',
    paddingTop: '20px',
    color: theme.background.yellow,
  },
  benefitsInfoSubtext: {
    display: 'flex',
    justifyContent: 'left',
    paddingTop: '10px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  incentiveContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    padding: 0,
    [theme.breakpoints.down('md')]: {
      padding: '10px',
    },
  },
  cardBody: {
    [theme.breakpoints.down('md')]: {
      boxShadow: 'rgb(0 0 0 / 24%) 0px 3px 8px',
    },
  },
  margin1: {
    marginTop: '5rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '1rem',
    },
  },
  margin2: {
    marginTop: '10rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '1rem',
    },
  },
  margin3: {
    marginTop: '15rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '1rem',
    },
  },
}))

function Advantages() {
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
        <div className={classes.benefitsName} data-aos="fade-down">
          <h1>Why Should You Choose CogentHub</h1>
        </div>
        <div>
          <Container className={classes.whyContainer}>
            <Row>
              <Col sm className={classes.card}>
                <Card data-aos="fade-down-right" className={classes.cardBody}>
                  <Card.Img
                    variant="top"
                    src="/advantageQuality.jpg"
                    style={{ height: '250px' }}
                  />
                  <Card.Body>
                    <Card.Title className={classes.title}>
                      {content.DifferenceTitleOne}
                    </Card.Title>
                    <Card.Text>{content.DifferenceTextOne}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm className={classes.card}>
                <Card className={classes.margin1} data-aos="fade-down-right">
                  <Card.Img
                    variant="top"
                    src="/advantageSecurity.jpg"
                    style={{ height: '250px' }}
                  />
                  <Card.Body>
                    <Card.Title className={classes.title}>
                      {content.DifferenceTitleTwo}
                    </Card.Title>
                    <Card.Text>{content.DifferenceTextTwo}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm className={classes.card}>
                <Card className={classes.margin2} data-aos="fade-down-right">
                  <Card.Img
                    variant="top"
                    src="/advantageExpert.jpg"
                    style={{ height: '250px' }}
                  />
                  <Card.Body>
                    <Card.Title className={classes.title}>
                      {content.DifferenceTitleThree}
                    </Card.Title>
                    <Card.Text>{content.DifferenceTextThree}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm className={classes.card}>
                <Card className={classes.margin3} data-aos="fade-down-right">
                  <Card.Img
                    variant="top"
                    src="/advantageCustomer.jpg"
                    style={{ height: '250px' }}
                  />
                  <Card.Body>
                    <Card.Title className={classes.title}>
                      {content.DifferenceTitleFour}
                    </Card.Title>
                    <Card.Text>{content.DifferenceTextFour}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Advantages
