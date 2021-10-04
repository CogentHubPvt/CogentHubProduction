import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/styles'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const axios = require('axios')

const useStyles = makeStyles((theme) => ({
  blogs: {
    margin: '2rem',
  },
}))

const Blogs = ({ inView, setInView }) => {
  const classes = useStyles()
  const [blogs, setBlog] = useState([])

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

  return (
    <div className={classes.container}>
      {blogs.map((blog) => {
        return (
          <Card className={classes.blogs}>
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Text>{blog.introduction}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        )
      })}
    </div>
  )
}

export default Blogs
