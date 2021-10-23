import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import AOS from 'aos'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined'
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined'
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined'
import { useSpring, animated } from 'react-spring'

const useStyles = makeStyles((theme) => ({
  subHead: {
    margin: '1rem 5rem',
    '& h1': {
      fontWeight: theme.fontWeight.bold,
      [theme.breakpoints.down('md')]: {
        fontSize: theme.fontSize.h1,
        marginTop: '0',
      },
    },
    [theme.breakpoints.down('md')]: {
      margin: '20px 20px 10px 20px',
      textAlign: 'center',
    },
  },
  stayConnected: {
    width: '90%',
    margin: '1rem 5rem',
    [theme.breakpoints.down('md')]: {
      margin: '20px',
    },
  },
  blogIcon: {
    width: '9rem',
    height: '9rem',
    position: 'relative',
    top: '2rem',
    zIndex: '12',
    color: theme.background.yellow,
  },
  teamIcon: {
    width: '9rem',
    height: '9rem',
    position: 'relative',
    top: '2.5rem',
    zIndex: '12',
    color: theme.background.yellow,
  },
  stayConnectedLinks: {
    '& a': {
      textDecoration: 'none',
      fontSize: theme.fontSize.p,
      color: theme.text.yellow,
      '&:hover, &:focus': {
        borderBottom: '5px solid #FFCB05',
        fontSize: '18px',
      },
    },
  },
  underline: {
    borderBottom: '1px blue solid',
    width: '0',
  },
}))

const CareersConnect = () => {
  const classes = useStyles()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <div className={classes.container}>
        <div className={classes.subHead} data-aos="fade-left">
          <h1>Stay Connected</h1>
        </div>
        <div className={classes.stayConnected} data-aos="flip-up">
          <Row>
            <Col md={true}>
              <GroupOutlinedIcon className={classes.teamIcon} />
              <Card>
                <Card.Body>
                  <Card.Title
                    style={{
                      marginTop: '1rem',
                      fontWeight: 'bold',
                      fontSize: '2rem',
                    }}
                  >
                    Join Our Team
                  </Card.Title>
                  <Card.Text style={{ height: '6rem' }}>
                    Search open positions that match your skills and interest.
                    We look for passionate, curious, creative and
                    solution-driven team players.
                  </Card.Text>
                  <div className={classes.stayConnectedLinks}>
                    <a href="/jobs">Search For Jobs</a>
                    <div className={classes.underline}></div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={true}>
              <LibraryBooksOutlinedIcon className={classes.blogIcon} />
              <Card>
                <Card.Body>
                  <Card.Title
                    style={{
                      marginTop: '1rem',
                      fontWeight: 'bold',
                      fontSize: '2rem',
                    }}
                  >
                    Keep Up to Date
                  </Card.Title>
                  <Card.Text style={{ height: '6rem' }}>
                    Stay ahead with careers tips, insider perspectives, and
                    industry-leading insights you can put to use today–all from
                    the people who work here.
                  </Card.Text>
                  <div className={classes.stayConnectedLinks}>
                    <a href="/blogs">Read Our Blogs</a>
                    {/* <div className={classes.underline}></div> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* <Col md={true}>
              <FeedbackOutlinedIcon className={classes.blogIcon} />
              <Card>
                <Card.Body>
                  <Card.Title
                    style={{
                      marginTop: '1rem',
                      fontWeight: 'bold',
                      fontSize: '2rem',
                    }}
                  >
                    Job Alert Emails
                  </Card.Title>
                  <Card.Text style={{ height: '6rem' }}>
                    Personalize your subscription to receive job alerts, latest
                    news and insider tips tailored to your preferences. See what
                    exciting and rewarding opportunities await.
                  </Card.Text>
                  <div className={classes.stayConnectedLinks}>
                    <a href="#">Get Notified</a>
                  </div>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </div>
      </div>
    </>
  )
}

export default CareersConnect
