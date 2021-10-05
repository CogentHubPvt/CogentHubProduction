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
    backgroundColor: theme.background.green,
    color: 'white',
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
            <InputGroup.Text id="basic-addon2" className={classes.search}>
              Search
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>
    </>
  )
}

export default SearchBar
