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
    width: '80%',
    height: '400px',
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
  const [imageOne, setImageOne] = useState('')
  const [imageTwo, setImageTwo] = useState('')
  const [imageThree, setImageThree] = useState('')
  const [imageFour, setImageFour] = useState('')
  const [imageFive, setImageFive] = useState('')
  const [isAdmin, setAdmin] = useState(false)

  useEffect(() => {
    axios
      .get('https://cogenthub-api.herokuapp.com/blogs/getBlogs')
      .then((response) => {
        console.log('BLOGSSSSS')
        console.log(response.data.blogs)
        setBlog(response.data.blogs)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response)
      })
    let token = localStorage.getItem('token')
    axios
      .post('https://cogenthub-api.herokuapp.com/authorize', {
        token: token,
      })
      .then(function (response) {
        setAdmin(true)
        console.log(response)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [blogs])

  const showBlog = (id) => {
    setLoading(true)
    axios
      .post('https://cogenthub-api.herokuapp.com/blogs/getBlogById', { id: id })
      .then((response) => {
        console.log('blogs', response.data.blog[0])
        setCurrentBlog(response.data.blog[0])
        setShowBlogCheck(true)
        if (response.data.blog[0].images[0] != undefined) {
          setImageOne(response.data.blog[0].images[0])
        }
        if (response.data.blog[0].images[1] != undefined) {
          setImageTwo(response.data.blog[0].images[1])
        }
        if (response.data.blog[0].images[2] != undefined) {
          setImageThree(response.data.blog[0].images[2])
        }
        if (response.data.blog[0].images[3] != undefined) {
          setImageFour(response.data.blog[0].images[3])
        }
        if (response.data.blog[0].images[4] != undefined) {
          setImageFive(response.data.blog[0].images[4])
        }
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  const deleteBlog = (id) => {
    setLoading(true)
    axios
      .post('https://cogenthub-api.herokuapp.com/blogs/deleteBlogById', {
        id: id,
      })
      .then((response) => {
        console.log('blogs', response.data.blog[0])
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
                    {isAdmin && (
                      <Button
                        variant="outline-danger"
                        style={{ float: 'right', marginRight: '1rem' }}
                        onClick={() => {
                          deleteBlog(blog._id)
                        }}
                      >
                        Delete
                      </Button>
                    )}
                  </Card.Footer>
                </Card>
              )
            })}
        </div>
      )}
      {showBlogCheck && (
        <div className={classes.currentBlogContainer}>
          <div className={classes.imageContainer}>
            <img src={imageOne} className={classes.blogImage} />
          </div>
          <div>
            <h1>{currentBlog.title}</h1>
          </div>
          <div>
            <p>{currentBlog.introduction}</p>
          </div>
          <div className={classes.imageContainer}>
            <img src={imageTwo} className={classes.blogImage} />
          </div>
          <div>
            <h2>{currentBlog.subHeadingOne}</h2>
          </div>
          <div>
            <p>{currentBlog.contentOne}</p>
          </div>
          <div>
            <div className={classes.imageContainer}>
              <img src={imageThree} className={classes.blogImage} />
            </div>
            <h2>{currentBlog.subHeadingTwo}</h2>
          </div>
          <div>
            <p>{currentBlog.contentTwo}</p>
          </div>
          <div className={classes.imageContainer}>
            <img src={imageFour} className={classes.blogImage} />
          </div>
          <div>
            <h2>{currentBlog.subHeadingThree}</h2>
          </div>
          <div>
            <p>{currentBlog.contentThree}</p>
          </div>
          <div className={classes.imageContainer}>
            <img src={imageFive} className={classes.blogImage} />
          </div>
          <div>
            <h2>{currentBlog.subHeadingFour}</h2>
          </div>
          <div>
            <p>{currentBlog.contentFour}</p>
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
