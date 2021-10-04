import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Button from 'react-bootstrap/Button'
import AOS from 'aos'
import JobCard from './JobCard'
const axios = require('axios')
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PageItem from 'react-bootstrap/PageItem'
import Spinner from 'react-bootstrap/Spinner'
import Pagination from '@mui/material/Pagination'

const useStyles = makeStyles((theme) => ({
  subHead: {
    margin: '1rem 5rem',
    [theme.breakpoints.down('md')]: {
      margin: '10px',
      textAlign: 'center',
    },
    '& h2': {
      fontWeight: 'bold',
      fontFamily: 'Montserrat',
    },
  },
  leftAlign: {
    overflow: 'hidden',
    margin: '1rem 5rem',
    [theme.breakpoints.down('md')]: {
      margin: '10px',
      textAlign: 'center',
    },
    fontFamily: 'Montserrat',
    '& a': {
      textAlign: 'center',
      textDecoration: 'none',
      float: 'left',
      [theme.breakpoints.down('md')]: {
        float: 'none',
      },
    },
    '& p': {
      textAlign: 'center',
      textDecoration: 'none',
    },
  },
  rightAlign: {
    overflow: 'hidden',
    textAlign: 'end',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
    '& a': {
      float: 'right',
      [theme.breakpoints.down('md')]: {
        float: 'none',
      },
      color: 'black',
      textDecoration: 'none',
    },
  },
  jobs: {
    marginTop: '2rem',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      width: 'min-content',
      padding: '10px',
      marginTop: '10px',
    },
  },
  pagination: {
    color: theme.background.darkGreen,
    margin: '2rem 7.2rem',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  loading: {
    height: '60vh',
    textAlign: 'center',
    paddingTop: '25vh',
    fontSize: '3rem',
  },
}))

const AvailableRoles = () => {
  const classes = useStyles()
  const [jobs, setJobs] = useState(['1'])
  const [isLoading, setLoading] = useState(true)
  const [count, setCount] = useState(0)

  let items = []

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  useEffect(() => {
    axios
      .get('https://cogenthub-api.herokuapp.com/jobs/getJobs')
      .then((result) => {
        console.log(result.data.jobs)
        setJobs(result.data.jobs)
        setCount(Math.ceil(result.data.jobs.length / 4))
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])

  return (
    <>
      <div className={classes.subHead} data-aos="fade-left">
        <h1>Latest Jobs</h1>
      </div>
      {isLoading && (
        <div className={classes.loading}>
          <Spinner animation="border" size="lg" />
        </div>
      )}
      {!isLoading && (
        <>
          <div className={classes.leftAlign} data-aos="fade-left">
            <a>Sort By :</a>
            <a href="#">Most Recent</a>
            <a>|</a>
            <a href="#">Most Relevant</a>
            <div className={classes.rightAlign}>
              <Button variant="outline-success">Filter Results</Button>{' '}
            </div>
          </div>
          <Container className={classes.jobs} data-aos="zoom-in-up">
            <Row>
              {jobs.map((job) => {
                return (
                  <Col sm={4}>
                    <JobCard job={job} />
                  </Col>
                )
              })}
            </Row>
          </Container>
          {console.log(items)};
          <Pagination count={count} className={classes.pagination} />
        </>
      )}
    </>
  )
}

export default AvailableRoles
