import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { makeStyles } from '@material-ui/styles'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { EditorState } from 'draft-js'
import Form from 'react-bootstrap/Form'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import ClassIcon from '@material-ui/icons/Class'
import PersonIcon from '@material-ui/icons/Person'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import BlogEdit from './BlogEdit'

const axios = require('axios')

const useStyles = makeStyles((theme) => ({
  blogs: {
    margin: '2rem',
  },
  blog: {
    width: '100%',
  },
  blogTitle: {
    margin: '2rem',
    fontSize: theme.fontSize.h1,
  },
  author: {
    fontSize: theme.fontSize.p,
    marginTop: '10px',
    marginRight: '10px',
    marginLeft: '10px',
  },
  currentBlogContainer: {
    padding: '6rem 2rem',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
  },
  blogImage: {
    margin: '2rem',
    width: '640px',
    height: '426px',
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
  blogContainer: {
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    margin: '1rem',
    padding: '1rem 1rem',
    borderRadius: '10px',
  },
  blog: {
    '& img': {
      display: 'flex',
      margin: 'auto',
    },
  },
  onHoverWhite: {
    '&:hover, &:focus': {
      color: 'white',
    },
  },
  categories: {
    margin: '1rem',
    padding: '1rem 1rem',
  },
  footerIcon: {
    fontSize: '18px',
    marginRight: '5px',
  },
}))

const Blogs = ({ inView, setInView }) => {
  const classes = useStyles()
  const [blogs, setBlog] = useState([])
  const [loading, setLoading] = useState(true)
  const [isAdmin, setAdmin] = useState(false)
  const [festival, setFestival] = useState(false)
  const [festivalDisabled, setFestivalDisabled] = useState(false)
  const [bpo, setBpo] = useState(false)
  const [bpoDisabled, setBpoDisabled] = useState(false)
  const [it, setIt] = useState(false)
  const [itDisabled, setItDisabled] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [marketingDisabled, setMarketingDisabled] = useState(false)
  const [dMarketing, setDmarketing] = useState(false)
  const [dMarketingDisabled, setDmarketingDisabled] = useState(false)
  const [isEdit, setEdit] = useState(false)
  const [currentId, setCurrentId] = useState('')

  useEffect(async () => {
    axios
      .get('https://cogenthub-api.herokuapp.com/blogs/getBlogs')
      .then(async (response) => {
        console.log('BLOGSSSSS')
        console.log(response.data.blogs)
        setBlog(response.data.blogs)
        setLoading(false)
      })
      .catch((error) => {
        console.log('There is an error')
        console.log(error)
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
  }, [])

  useEffect(async () => {
    let temp = 'None'
    setLoading(true)
    if (festival == true) {
      temp = 'Festival'
    } else if (it == true) {
      temp = 'IT'
    } else if (bpo == true) {
      temp = 'BPO'
    } else if (marketing == true) {
      temp = 'Marketing'
    } else if (dMarketing == true) {
      temp = 'Digital Marketing'
    } else {
      temp == 'None'
    }
    if (temp != 'None') {
      axios
        .post('https://cogenthub-api.herokuapp.com/blogs/getBlogByCategory', {
          category: temp,
        })
        .then(async (response) => {
          console.log('BLOGSSSSS CATEGORY')
          console.log(response.data.blog)
          setBlog(response.data.blog)
          setLoading(false)
        })
        .catch((error) => {
          console.log('There is an error')
          console.log(error)
        })
    } else {
      axios
        .get('https://cogenthub-api.herokuapp.com/blogs/getBlogs')
        .then(async (response) => {
          console.log('BLOGSSSSS')
          console.log(response.data.blogs)
          setBlog(response.data.blogs)
          setLoading(false)
        })
        .catch((error) => {
          console.log('There is an error')
          console.log(error)
        })
    }
  }, [festival, it, bpo, marketing, dMarketing])

  const showBlog = (id) => {
    // setLoading(true)
    // setShowBlogCheck(true)
    // axios
    //   .post('https://cogenthub-api.herokuapp.com/blogs/getBlogById', { id: id })
    //   .then((response) => {
    //     console.log('blogs', response.data.blog[0])
    //     let content = convertFromRaw(JSON.parse(response.data.blog[0].post))
    //     setCurrentBlog(stateToHTML(content))
    //     setLoading(false)
    //   })
    //   .catch((error) => {
    //     console.log(error.response)
    //   })
    let url = 'blog/' + id
    window.location.href = url
  }

  const deleteBlog = (id) => {
    setLoading(true)
    axios
      .post('https://cogenthub-api.herokuapp.com/blogs/deleteBlogById', {
        id: id,
      })
      .then((response) => {
        console.log('Deleted')
        console.log('blogs', response)
        axios
          .get('https://cogenthub-api.herokuapp.com/blogs/getBlogs')
          .then(async (response) => {
            setBlog(response.data.blogs)
            setLoading(false)
          })
          .catch((error) => {
            console.log('There is an error')
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  return (
    <div className={classes.container}>
      <div>
        {!isEdit && (
          <Row>
            <Col md={8}>
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
                    <div>
                      <Card className={classes.blogs}>
                        <Card.Img
                          src={blog.image}
                          className={classes.thumbnail}
                        />
                        <Card.Body>
                          <Card.Title
                            style={{ fontWeight: 'bold', fontSize: '24px' }}
                          >
                            {blog.title}
                          </Card.Title>
                          <Card.Text>{blog.introduction}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <small
                            className="text-muted"
                            className={classes.author}
                          >
                            <PersonIcon className={classes.footerIcon} />
                            <span style={{ paddingTop: '10px' }}>
                              {blog.author}
                            </span>
                          </small>
                          <small
                            className="text-muted"
                            className={classes.author}
                          >
                            <ClassIcon className={classes.footerIcon} />
                            <span style={{ paddingTop: '10px' }}>
                              {blog.category}
                            </span>
                          </small>
                          {/* <small
                          className="text-muted"
                          className={classes.author}
                        >
                          <GroupWorkIcon className={classes.footerIcon} />
                          <span style={{ paddingTop: '10px' }}>
                            {blog.tags}
                          </span>
                        </small> */}
                          <small
                            className="text-muted"
                            className={classes.author}
                          >
                            <AccessTimeIcon className={classes.footerIcon} />
                            <span style={{ paddingTop: '10px' }}>
                              {blog.date}
                            </span>
                          </small>
                          <Button
                            variant="outline-warning"
                            className={classes.onHoverWhite}
                            style={{ float: 'right' }}
                            onClick={() => {
                              showBlog(blog.routeName)
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
                          {isAdmin && (
                            <Button
                              variant="outline-primary"
                              style={{ float: 'right', marginRight: '1rem' }}
                              onClick={() => {
                                setEdit(true)
                                setCurrentId(blog._id)
                              }}
                            >
                              Edit
                            </Button>
                          )}
                        </Card.Footer>
                      </Card>
                    </div>
                  )
                })}
            </Col>
            <Col md={4}>
              <ListGroup as="ol" numbered className={classes.categories}>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Festival</div>
                  </div>
                  {!festivalDisabled && (
                    <Form.Check
                      type="checkbox"
                      value="Festival"
                      onChange={(e) => {
                        if (festival == false) {
                          setBpoDisabled(true)
                          setItDisabled(true)
                          setMarketingDisabled(true)
                          setDmarketingDisabled(true)
                        }
                        if (festival == true) {
                          setBpoDisabled(false)
                          setItDisabled(false)
                          setMarketingDisabled(false)
                          setDmarketingDisabled(false)
                        }
                        setFestival(!festival)
                      }}
                    />
                  )}
                  {festivalDisabled && <Form.Check type="checkbox" disabled />}
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">BPO</div>
                  </div>
                  {!bpoDisabled && (
                    <Form.Check
                      type="checkbox"
                      value="BPO"
                      onChange={(e) => {
                        if (bpo == false) {
                          setFestivalDisabled(true)
                          setItDisabled(true)
                          setMarketingDisabled(true)
                          setDmarketingDisabled(true)
                        }
                        if (bpo == true) {
                          setFestivalDisabled(false)
                          setItDisabled(false)
                          setMarketingDisabled(false)
                          setDmarketingDisabled(false)
                        }
                        setBpo(!bpo)
                      }}
                    />
                  )}
                  {bpoDisabled && <Form.Check type="checkbox" disabled />}
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">IT</div>
                  </div>
                  {!itDisabled && (
                    <Form.Check
                      type="checkbox"
                      value="IT"
                      onChange={(e) => {
                        if (it == false) {
                          setBpoDisabled(true)
                          setFestivalDisabled(true)
                          setMarketingDisabled(true)
                          setDmarketingDisabled(true)
                        }
                        if (it == true) {
                          setBpoDisabled(false)
                          setFestivalDisabled(false)
                          setMarketingDisabled(false)
                          setDmarketingDisabled(false)
                        }
                        setIt(!it)
                      }}
                    />
                  )}
                  {itDisabled && <Form.Check type="checkbox" disabled />}
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Marketing</div>
                  </div>
                  {!marketingDisabled && (
                    <Form.Check
                      type="checkbox"
                      value="Marketing"
                      onChange={(e) => {
                        if (marketing == false) {
                          setBpoDisabled(true)
                          setItDisabled(true)
                          setFestivalDisabled(true)
                          setDmarketingDisabled(true)
                        }
                        if (marketing == true) {
                          setBpoDisabled(false)
                          setItDisabled(false)
                          setFestivalDisabled(false)
                          setDmarketingDisabled(false)
                        }
                        setMarketing(!marketing)
                      }}
                    />
                  )}
                  {marketingDisabled && <Form.Check type="checkbox" disabled />}
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Digital Marketing</div>
                  </div>
                  {!dMarketingDisabled && (
                    <Form.Check
                      type="checkbox"
                      value="Digital Marketing"
                      onChange={(e) => {
                        if (dMarketing == false) {
                          setBpoDisabled(true)
                          setItDisabled(true)
                          setMarketingDisabled(true)
                          setFestivalDisabled(true)
                        }
                        if (dMarketing == true) {
                          setBpoDisabled(false)
                          setItDisabled(false)
                          setMarketingDisabled(false)
                          setFestivalDisabled(false)
                        }
                        setDmarketing(!dMarketing)
                      }}
                    />
                  )}
                  {dMarketingDisabled && (
                    <Form.Check type="checkbox" disabled />
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        )}
        {isEdit && (
          <div>
            <BlogEdit blogId={currentId} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Blogs
