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
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  benefitsSubtext: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  icon: {
    width: '210px',
    height: '210px',
    color: theme.background.green,
  },
  benefitsInfoTitle: {
    display: 'flex',
    justifyContent: 'left',
    paddingTop: '20px',
    color: theme.background.green,
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
  },
  margin2: {
    marginTop: '10rem',
  },
  margin3: {
    marginTop: '15rem',
    marginBottom: '3rem',
  },
}))

function CareerInfo() {
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
        <Container>
          <div className={classes.career}>
            <Row data-aos="fade-right">
              <Col sm={6} className={classes.careerImg}>
                <img
                  className={classes.image}
                  src="https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </Col>
              <Col sm={6} className={classes.careerInfo}>
                <h3>Working At CogentHub</h3>
                <p>{content.CareerInfo}</p>
              </Col>
            </Row>
          </div>
          <div className={classes.about}>
            <Row data-aos="fade-left">
              <Col sm={6} className={classes.aboutInfo}>
                <h3>About Us</h3>
                <p>{content.CareerInfo}</p>
              </Col>
              <Col sm={6} className={classes.aboutImage}>
                <img
                  className={classes.image}
                  src="https://c0.wallpaperflare.com/preview/764/602/552/business-professional-sign.jpg"
                />
              </Col>
            </Row>
          </div>
        </Container>
        <div className={classes.benefitsName} data-aos="fade-down">
          <h1>We Care About Our Employees</h1>
        </div>
        <div className={classes.benefitsSubtext} data-aos="fade-down">
          <p>Lorum Ipsum Lorum Ipsum Lorum Ipsum</p>
        </div>
        <Container>
          <Row data-aos="fade-up-right">
            <Col sm={3} className={classes.iconContainer}>
              <AccountCircleIcon className={classes.icon} />
            </Col>
            <Col sm={9}>
              <div className={classes.benefitsInfoTitle}>
                <h2>Company Profile</h2>
              </div>
              <div className={classes.benefitsInfoSubtext}>
                <p>{content.BenefitOne}</p>
              </div>
            </Col>
          </Row>
          <Row data-aos="fade-up-right">
            <Col sm={3} className={classes.iconContainer}>
              <PeopleIcon className={classes.icon} />
            </Col>
            <Col sm={9}>
              <div className={classes.benefitsInfoTitle}>
                <h2>Leadership Team</h2>
              </div>
              <div className={classes.benefitsInfoSubtext}>
                <p>{content.BenefitOne}</p>
              </div>
            </Col>
          </Row>
          <Row data-aos="fade-up-right">
            <Col sm={3} className={classes.iconContainer}>
              <EventNoteIcon className={classes.icon} />
            </Col>
            <Col sm={9}>
              <div className={classes.benefitsInfoTitle}>
                <h2>Training</h2>
              </div>
              <div className={classes.benefitsInfoSubtext}>
                <p>{content.BenefitOne}</p>
              </div>
            </Col>
          </Row>
          <Row data-aos="fade-up-right">
            <Col sm={3} className={classes.iconContainer}>
              <EmojiTransportationIcon className={classes.icon} />
            </Col>
            <Col sm={9}>
              <div className={classes.benefitsInfoTitle}>
                <h2>Transportation Facilities</h2>
              </div>
              <div className={classes.benefitsInfoSubtext}>
                <p>{content.BenefitOne}</p>
              </div>
            </Col>
          </Row>
          <Row data-aos="fade-up-right">
            <Col sm={3} className={classes.iconContainer}>
              <LocalHospitalIcon className={classes.icon} />
            </Col>
            <Col sm={9}>
              <div className={classes.benefitsInfoTitle}>
                <h2>Medical Insurance</h2>
              </div>
              <div className={classes.benefitsInfoSubtext}>
                <p>{content.BenefitOne}</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={classes.benefitsName} data-aos="fade-down">
          <h1>Why Work With CogentHub</h1>
        </div>
        <div className={classes.benefitsSubtext} data-aos="fade-down">
          <p>Lorum Ipsum Lorum Ipsum Lorum Ipsum</p>
        </div>
        <div>
          <Container className={classes.whyContainer}>
            <Row>
              <Col sm className={classes.card}>
                <Card data-aos="fade-down-right" className={classes.cardBody}>
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/1136465/pexels-photo-1136465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <Card.Body>
                    <Card.Title>{content.DifferenceTitleOne}</Card.Title>
                    <Card.Text>{content.DifferenceTextOne}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm className={classes.card}>
                <Card className={classes.margin1} data-aos="fade-down-right">
                  <Card.Img
                    variant="top"
                    src="https://ak.picdn.net/shutterstock/videos/1069822501/thumb/9.jpg?ip=x480"
                  />
                  <Card.Body>
                    <Card.Title>{content.DifferenceTitleTwo}</Card.Title>
                    <Card.Text>{content.DifferenceTextTwo}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm className={classes.card}>
                <Card className={classes.margin2} data-aos="fade-down-right">
                  <Card.Img
                    variant="top"
                    src="https://videohive.img.customer.envatousercontent.com/files/93a611b7-50c9-4a98-abfd-14062cf480e9/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=1386b1f085d989c2fd60e048aaaf22db"
                  />
                  <Card.Body>
                    <Card.Title>{content.DifferenceTitleThree}</Card.Title>
                    <Card.Text>{content.DifferenceTextThree}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm className={classes.card}>
                <Card className={classes.margin3} data-aos="fade-down-right">
                  <Card.Img
                    variant="top"
                    src="https://ak.picdn.net/shutterstock/videos/21307717/thumb/11.jpg?ip=x480"
                  />
                  <Card.Body>
                    <Card.Title>{content.DifferenceTitleFour}</Card.Title>
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

export default CareerInfo
