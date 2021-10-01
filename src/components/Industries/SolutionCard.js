import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({}))

const SolutionCard = ({ solution }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <>
      <div data-aos="flip-left">
        <Card style={{ height: '50vh' }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          />
          <Card.Body>
            <Card.Title>{solution}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default SolutionCard
