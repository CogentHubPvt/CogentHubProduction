import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/styles'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const axios = require('axios')

const useStyles = makeStyles((theme) => ({
  blogs: {
    margin: '2rem',
  },
  blogTitle: {
    margin: '2rem',
    fontSize: theme.fontSize.h1,
  },
  author: {
    fontSize: theme.fontSize.p,
    marginTop: '10px',
  },
  currentBlogContainer: {
    margin: '6rem',
    padding: '2rem',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
  },
  blogImage: {
    margin: '2rem',
  },
  imageContainer: {
    textAlign: 'center',
  },
  loading: {
    height: '60vh',
    textAlign: 'center',
    paddingTop: '25vh',
    fontSize: '3rem',
  },
}))

const Blogs = ({ inView, setInView }) => {
  const classes = useStyles()
  const [blogs, setBlog] = useState([])
  const [currentBlog, setCurrentBlog] = useState({})
  const [showBlogCheck, setShowBlogCheck] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://cogenthub-api.herokuapp.com/blogs/getBlogs')
      .then((response) => {
        console.log(response.data)
        setBlog(response.data.blogs)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }, [])

  const showBlog = (id) => {
    setLoading(true)
    axios
      .post('https://cogenthub-api.herokuapp.com/blogs/getBlogById', { id: id })
      .then((response) => {
        console.log('blogs', response.data.blog[0])
        setCurrentBlog(response.data.blog[0])
        setShowBlogCheck(true)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  return (
    <div className={classes.container}>
      {!showBlogCheck && (
        <div>
          <h1 className={classes.blogTitle}>Latest Blogs</h1>
          {loading && (
            <div className={classes.loading}>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {!loading &&
            blogs.map((blog) => {
              return (
                <Card className={classes.blogs}>
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.introduction}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted" className={classes.author}>
                      Author Name
                    </small>
                    <Button
                      variant="outline-success"
                      style={{ float: 'right' }}
                      onClick={() => {
                        showBlog(blog._id)
                      }}
                    >
                      Read More
                    </Button>{' '}
                  </Card.Footer>
                </Card>
              )
            })}
        </div>
      )}
      {showBlogCheck && (
        <div className={classes.currentBlogContainer}>
          <div className={classes.imageContainer}>
            <img src={currentBlog.image} className={classes.blogImage} />
          </div>
          <div>
            <h1>{currentBlog.title}</h1>
          </div>
          <div>
            <p>{currentBlog.introduction}</p>
          </div>
          <div>
            <h2>{currentBlog.subHeadingOne}</h2>
          </div>
          <div>
            <p>{currentBlog.contentOne}</p>
          </div>
          <div>
            <h2>{currentBlog.subHeadingTwo}</h2>
          </div>
          <div>
            <p>{currentBlog.contentTwo}</p>
          </div>
          <div>
            <h2>{currentBlog.subHeadingThree}</h2>
          </div>
          <div>
            <p>{currentBlog.contentThree}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Button
              variant="outline-success"
              onClick={() => {
                setShowBlogCheck(false)
              }}
            >
              Go Back To Blogs
            </Button>{' '}
          </div>
        </div>
      )}
    </div>
  )
}

export default Blogs
