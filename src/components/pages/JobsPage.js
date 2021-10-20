import { React, useState, useEffect } from 'react'
import SearchBar from '../JobsOverview/SearchBar'
import AvailableRoles from '../JobsOverview/AvailableRoles'
import CareersConnect from './CareersConnect'
const axios = require('axios')
import HeaderTemp from '../Header/HeaderTemp'
import Footer from '../Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function JobsPage() {
  const [jobs, setJobs] = useState([])
  const [pageJobs, setPageJobs] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)

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
    setPageJobs(currentPosts)
    console.log('Hello')
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost)

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
      <SearchBar
        jobs={jobs}
        setPageJobs={setPageJobs}
        currentJobs={currentPosts}
      />
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
