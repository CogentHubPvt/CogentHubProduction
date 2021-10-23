import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
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
    backgroundColor: theme.background.yellow,
    color: 'white',
  },
}))

const SearchBar = ({ jobs, setPageJobs, currentJobs }) => {
  const classes = useStyles()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return <></>
}

export default SearchBar
