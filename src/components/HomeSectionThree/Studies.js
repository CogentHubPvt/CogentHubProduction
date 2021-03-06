import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/styles'
import content from '../../ContentJson/content.json'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '70%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    margin: '3rem auto',
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
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  subText: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    '& p': {
      fontSize: '1.5rem',
    },
    marginBottom: '3rem',
  },
  image: {
    height: '350px',
  },
}))

const Studies = ({ inView }) => {
  const classes = useStyles()

  const enterLeft = useSpring({
    to: { transform: 'translate(0)', opacity: 1 },
    from: { transform: 'translate(-1000px)', opacity: 0 },
    delay: 100,
    reverse: !inView,
    reset: true,
  })

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Case Studies</h1>
      </div>
      <div className={classes.subText}>
        <p>
          CogentHub's research models add values to enhance the business of its
          customers.
        </p>
      </div>
      <div className={classes.card}>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <div data-aos="flip-left">
              <Card style={{ minHeight: '56.4rem' }}>
                <Card.Img
                  variant="top"
                  className={classes.image}
                  src="https://e-file.huawei.com/-/media/EBG/Images/SolutionV4/enterprise-collaboration/03-remote-collabration.jpg?la=id-ID"
                />
                <Card.Header
                  style={{
                    fontWeight: 'bold',
                    fontSize: '23px',
                    paddingTop: '7px',
                    paddingBottom: '14px',
                  }}
                >
                  M-Commerce: A Drastic Evolution in the Retail Market
                </Card.Header>
                <Card.Body>
                  <Card.Text>{content.ReportOne}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small>
                    <Button
                      variant="warning"
                      style={{ color: 'white' }}
                      target="_blank"
                      href="https://cogent-images-and-files.s3.ap-south-1.amazonaws.com/M+Commerce+ultimate.pdf"
                    >
                      Download PDF
                    </Button>{' '}
                  </small>
                </Card.Footer>
              </Card>
            </div>
          </Col>
          <Col>
            <div data-aos="flip-up">
              <Card style={{ minHeight: '56.4rem' }}>
                <Card.Img
                  variant="top"
                  className={classes.image}
                  src="https://c1.wallpaperflare.com/preview/482/39/625/workspace-workplace-partnership-office.jpg"
                />
                <Card.Header
                  style={{
                    fontWeight: 'bold',
                    fontSize: '23px',
                    paddingTop: '7px',
                    paddingBottom: '14px',
                  }}
                >
                  Farm To Table Business Model Affecting the Food-Tech Sector
                </Card.Header>
                <Card.Body>
                  <Card.Text>{content.ReportTwo}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small>
                    <Button
                      variant="warning"
                      style={{ color: 'white' }}
                      target="_blank"
                      href="https://cogent-images-and-files.s3.ap-south-1.amazonaws.com/Farm+to+Table+Business+Model+Affecting+the+Food+Tech+Sector.pdf"
                    >
                      Download PDF
                    </Button>{' '}
                  </small>
                </Card.Footer>
              </Card>
            </div>
          </Col>
          <Col>
            <div data-aos="flip-down">
              <Card style={{ minHeight: '56.4rem' }}>
                <Card.Img
                  variant="top"
                  className={classes.image}
                  src="https://c4.wallpaperflare.com/wallpaper/283/270/523/business-circuit-computer-internet-wallpaper-preview.jpg"
                />
                <Card.Header
                  style={{
                    fontWeight: 'bold',
                    fontSize: '23px',
                    paddingTop: '7px',
                    paddingBottom: '14px',
                  }}
                >
                  Global Fashion & Retail Market: Current Status and Ananlysis
                </Card.Header>
                <Card.Body>
                  <Card.Text>{content.ReportThree}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small>
                    <Button
                      variant="warning"
                      style={{ color: 'white' }}
                      target="_blank"
                      href="https://cogent-images-and-files.s3.ap-south-1.amazonaws.com/Global+Fashion+and+Retail+Market.pdf"
                    >
                      Download PDF
                    </Button>{' '}
                  </small>
                </Card.Footer>
              </Card>
            </div>
          </Col>
          <Col>
            <div data-aos="flip-right">
              <Card style={{ minHeight: '56.4rem' }}>
                <Card.Img
                  variant="top"
                  className={classes.image}
                  src="https://images.pexels.com/photos/8867429/pexels-photo-8867429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
                <Card.Header
                  style={{
                    fontWeight: 'bold',
                    fontSize: '23px',
                    paddingTop: '7px',
                    paddingBottom: '14px',
                  }}
                >
                  Customer Retention: Grow Your Business by Selling More to
                  Current Customers
                </Card.Header>
                <Card.Body>
                  <Card.Text>{content.ReportFour}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small>
                    <Button
                      variant="warning"
                      style={{ color: 'white' }}
                      target="_blank"
                      href="https://cogent-images-and-files.s3.ap-south-1.amazonaws.com/Customer+Retention.pdf"
                    >
                      Download PDF
                    </Button>{' '}
                  </small>
                </Card.Footer>
              </Card>
            </div>
          </Col>
          <Col>
            <div data-aos="flip-right">
              <Card style={{ minHeight: '56.4rem' }}>
                <Card.Img
                  variant="top"
                  className={classes.image}
                  src="https://cogent-images-and-files.s3.ap-south-1.amazonaws.com/business-customer-service-concept-4FBV7WS.jpg"
                />
                <Card.Header
                  style={{
                    fontWeight: 'bold',
                    fontSize: '23px',
                    paddingTop: '7px',
                    paddingBottom: '14px',
                  }}
                >
                  How To Save Sales And Solve Customer Problems With Live Chat
                </Card.Header>
                <Card.Body>
                  <Card.Text>{content.ReportFive}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small>
                    <Button
                      variant="warning"
                      style={{ color: 'white' }}
                      target="_blank"
                      href="https://cogent-images-and-files.s3.ap-south-1.amazonaws.com/How+to+Save+Sales+and+Solve+Customer+Problems+with+Live+Chat.pdf"
                    >
                      Download PDF
                    </Button>{' '}
                  </small>
                </Card.Footer>
              </Card>
            </div>
          </Col>
          <Col>
            <div data-aos="flip-right">
              <Card style={{ minHeight: '56.4rem' }}>
                <Card.Img
                  variant="top"
                  className={classes.image}
                  src="https://images.pexels.com/photos/7681077/pexels-photo-7681077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
                <Card.Header
                  style={{
                    fontWeight: 'bold',
                    fontSize: '23px',
                    paddingTop: '7px',
                    paddingBottom: '14px',
                  }}
                >
                  Re-Commerce: Management of Fashion and Retail Based On Reuse
                </Card.Header>
                <Card.Body>
                  <Card.Text>{content.ReportSix}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small>
                    <Button
                      variant="warning"
                      style={{ color: 'white' }}
                      href="https://cogent-images-and-files.s3.ap-south-1.amazonaws.com/Re-Commerce+new.pdf"
                    >
                      Download PDF
                    </Button>{' '}
                  </small>
                </Card.Footer>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Studies
