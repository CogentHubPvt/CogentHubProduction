import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Button from 'react-bootstrap/Button'
import AOS from 'aos'
import Card from 'react-bootstrap/Card'

const useStyles = makeStyles((theme) => ({
  jobs: {
    [theme.breakpoints.down('md')]: {
      padding: '10px',
    },
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: '2rem',
  },
}))

const JobCard = ({ job }) => {
  const classes = useStyles()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <div className={classes.jobs}>
        <Card style={{ width: '21rem' }}>
          <Card.Body>
            <Card.Title className={classes.jobTitle}>{job.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {job.location}
            </Card.Subtitle>
            <Card.Text
              style={{
                fontWeight: 'bold',
                marginBottom: '0',
                marginTop: '1rem',
              }}
            >
              Skills :{' '}
              {job.skills.map((skill) => {
                return (
                  <p style={{ display: 'inline-block', fontWeight: 'lighter' }}>
                    {skill},
                  </p>
                )
              })}
            </Card.Text>
            <Card.Text style={{ fontWeight: 'bold' }}>
              Years Of Experience :{' '}
              <p style={{ display: 'inline-block', fontWeight: 'lighter' }}>
                {job.experience}
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </div>
    </>
  )
}

export default JobCard
