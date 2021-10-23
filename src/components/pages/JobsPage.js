import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import SearchBar from '../JobsOverview/SearchBar'
import AvailableRoles from '../JobsOverview/AvailableRoles'
import CareersConnect from './CareersConnect'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
const axios = require('axios')
import HeaderTemp from '../Header/HeaderTemp'
import Footer from '../Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
  jobsHead: {
    margin: '3rem 5rem',
    [theme.breakpoints.down('md')]: {
      margin: '10px',
      textAlign: 'center',
    },
    '& h1': {
      fontWeight: theme.fontWeight.bold,
      fontSize: theme.fontSize.h1,
      [theme.breakpoints.down('md')]: {
        fontSize: theme.fontSize.h1,
      },
    },
  },
  searchBar: {
    marginTop: '2rem',
  },
  search: {
    backgroundColor: theme.background.yellow,
    color: 'white',
  },
}))

function JobsPage() {
  const [jobs, setJobs] = useState([])
  const [pageJobs, setPageJobs] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)
  const [currentJobs, setCurrentJobs] = useState([])
  const classes = useStyles()
  let currentPosts = []

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
        setPageJobs(result.data.jobs)
        setCount(Math.ceil(result.data.jobs.length / 3))
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])

  useEffect(() => {
    console.log('Hello')
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost)

  // const getCurrentJobs = () => {
  //   const indexOfLastPost = currentPage * postsPerPage
  //   const indexOfFirstPost = indexOfLastPost - postsPerPage
  //   jobs.slice(indexOfFirstPost, indexOfLastPost).then((array) => {
  //     setCurrentJobs(array)
  //   })
  //   console.log('CURRENT POSTS', currentPosts)
  //   console.log('CURRENT JOBS', currentJobs)
  //   return currentJobs
  // }

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <HeaderTemp />
      </div>
      <div className={classes.jobsHead} data-aos="fade-left">
        <h1>Search Jobs At CogentHub</h1>
        <div className={classes.searchBar} data-aos="fade-left">
          <InputGroup
            className="mb-3"
            size="lg"
            onChange={(e) => {
              console.log(e.target.value)
              console.log(jobs)
              currentPosts = jobs.filter((job) =>
                job.name.includes(e.target.value),
              )
            }}
          >
            <FormControl
              placeholder="Search for Jobs"
              aria-label="Jobs"
              aria-describedby="Jobs"
            />
            <Button
              variant="warning"
              id="button-addon1"
              style={{ color: 'white' }}
            >
              Search
            </Button>
          </InputGroup>
        </div>
      </div>
      <AvailableRoles
        setLoading={setLoading}
        isLoading={isLoading}
        jobs={currentPosts}
        setPageJobs={setPageJobs}
        count={count}
        paginate={paginate}
      />
      <CareersConnect />
      <Footer />
    </>
  )
}

export default JobsPage
