import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/styles'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const axios = require('axios')

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '4rem',
    display: 'flex',
    justifyContent: 'center',
  },
  jobs: {
    margin: '3rem',
    padding: '2rem',
    width: '50%',
    textAlign: 'center',
    boxShadow:
      'rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset',
    borderRadius: '20px',
  },
}))

const AddJobs = ({ inView, setInView }) => {
  const classes = useStyles()
  const [designation, setDesignation] = useState('')
  const [location, setLocations] = useState('')
  const [skills, setSkills] = useState('')
  const [experience, setExperience] = useState('')

  useEffect(() => {
    axios
      .get('https://cogenthub-api.herokuapp.com/blogs/getBlogs')
      .then((response) => {
        console.log(response.data)
        setBlog(response.data.blogs)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }, [])

  const handleSkills = (e) => {
    setSkills(e.target.value)
  }

  const handleLocation = (e) => {
    setLocations(e.target.value)
  }

  const handleExperience = (e) => {
    setExperience(e.target.value)
  }

  const handleDesignation = (e) => {
    setDesignation(e.target.value)
  }

  const handleSubmit = () => {
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    }
    axios
      .post('https://cogenthub-api.herokuapp.com/jobs', {
        name: designation,
        skills: skills,
        location: location,
        experience: experience,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  return (
    <div className={classes.container}>
      <Form className={classes.jobs}>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ textAlign: 'left' }}
        >
          <Form.Label>Enter Designation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Designation"
            onChange={handleDesignation}
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          style={{ textAlign: 'left' }}
        >
          <Form.Label>Enter Job Location(s)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Location(s)"
            onChange={handleLocation}
          />
          <Form.Text className="text-muted">
            If multiple job locations, then seperate with a '|'
          </Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          style={{ textAlign: 'left' }}
        >
          <Form.Label>Enter Skills Required</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Skill(s)"
            onChange={handleSkills}
          />
          <Form.Text className="text-muted">
            If multiple skills are required, then seperate with a ','
          </Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          style={{ textAlign: 'left' }}
        >
          <Form.Label>Enter Experience Required</Form.Label>
          <Form.Control
            type="text"
            placeholder="2+ years"
            onChange={handleExperience}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddJobs
