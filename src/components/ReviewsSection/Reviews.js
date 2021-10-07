import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
  },
  container: {
    margin: '4rem',
  },
}))

const Reviews = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Our Clients Have Something To Say</h2>
      <Carousel style={{ padding: '2rem 6rem' }}>
        <Carousel.Item>
          <Row style={{ width: '90%', margin: 'auto' }}>
            <CardGroup>
              <Col md={true}>
                <Card text="black" style={{ width: '18rem', margin: 'auto' }}>
                  <Card.Header
                    style={{ backgroundColor: '#188C4F', color: 'white' }}
                  >
                    Client Name
                  </Card.Header>
                  <Card.Body>
                    <Card.Title style={{ float: 'right' }}>
                      <FormatQuoteIcon
                        style={{ fontSize: '2rem', color: '#188C4F' }}
                      />
                    </Card.Title>
                    <Card.Text style={{ fontSize: '19px' }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={true}>
                <Card text="black" style={{ width: '18rem', margin: 'auto' }}>
                  <Card.Header
                    style={{ backgroundColor: '#188C4F', color: 'white' }}
                  >
                    Client Name
                  </Card.Header>
                  <Card.Body>
                    <Card.Title style={{ float: 'right' }}>
                      <FormatQuoteIcon
                        style={{ fontSize: '2rem', color: '#188C4F' }}
                      />
                    </Card.Title>
                    <Card.Text style={{ fontSize: '19px' }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={true}>
                <Card text="black" style={{ width: '18rem', margin: 'auto' }}>
                  <Card.Header
                    style={{ backgroundColor: '#188C4F', color: 'white' }}
                  >
                    Client Name
                  </Card.Header>
                  <Card.Body>
                    <Card.Title style={{ float: 'right' }}>
                      <FormatQuoteIcon
                        style={{ fontSize: '2rem', color: '#188C4F' }}
                      />
                    </Card.Title>
                    <Card.Text style={{ fontSize: '19px' }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </CardGroup>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row style={{ width: '90%', margin: 'auto' }}>
            <CardGroup>
              <Col md={true}>
                <Card text="black" style={{ width: '18rem', margin: 'auto' }}>
                  <Card.Header
                    style={{ backgroundColor: '#188C4F', color: 'white' }}
                  >
                    Client Name
                  </Card.Header>
                  <Card.Body>
                    <Card.Title style={{ float: 'right' }}>
                      <FormatQuoteIcon
                        style={{ fontSize: '2rem', color: '#188C4F' }}
                      />
                    </Card.Title>
                    <Card.Text style={{ fontSize: '19px' }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={true}>
                <Card text="black" style={{ width: '18rem', margin: 'auto' }}>
                  <Card.Header
                    style={{ backgroundColor: '#188C4F', color: 'white' }}
                  >
                    Client Name
                  </Card.Header>
                  <Card.Body>
                    <Card.Title style={{ float: 'right' }}>
                      <FormatQuoteIcon
                        style={{ fontSize: '2rem', color: '#188C4F' }}
                      />
                    </Card.Title>
                    <Card.Text style={{ fontSize: '19px' }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={true}>
                <Card text="black" style={{ width: '18rem', margin: 'auto' }}>
                  <Card.Header
                    style={{ backgroundColor: '#188C4F', color: 'white' }}
                  >
                    Client Name
                  </Card.Header>
                  <Card.Body>
                    <Card.Title style={{ float: 'right' }}>
                      <FormatQuoteIcon
                        style={{ fontSize: '2rem', color: '#188C4F' }}
                      />
                    </Card.Title>
                    <Card.Text style={{ fontSize: '19px' }}>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </CardGroup>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Reviews
