import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import AOS from 'aos'

const useStyles = makeStyles((theme) => ({
  jobsHead: {
    margin: '3rem 5rem',
    [theme.breakpoints.down('md')]: {
      margin: '10px',
      textAlign: 'center',
    },
    '& h1': {
      fontWeight: 'bold',
      fontSize: '4rem',
      fontFamily: 'Montserrat',
      [theme.breakpoints.down('md')]: {
        fontSize: '3rem',
      },
    },
  },
  searchBar: {
    marginTop: '2rem',
  },
}))

const SearchBar = () => {
  const classes = useStyles()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <div className={classes.jobsHead} data-aos="fade-left">
        <h1>Search Jobs At CogentHub</h1>
        <div className={classes.searchBar} data-aos="fade-left">
          <InputGroup className="mb-3" size="lg">
            <FormControl
              placeholder="Search for Jobs"
              aria-label="Jobs"
              aria-describedby="Jobs"
            />
            <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
          </InputGroup>
        </div>
      </div>
    </>
  )
}

export default SearchBar
