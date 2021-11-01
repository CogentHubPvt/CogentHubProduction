import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { useParams } from 'react-router-dom'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import HeaderTemp from '../Header/HeaderTemp'
import Footer from '../Footer/Footer'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import useWindowDimensions from '../../useWindowDimensions'
import { stateToHTML } from 'draft-js-export-html'
import DOMPurify from 'dompurify'

const axios = require('axios')

const useStyles = makeStyles((theme) => ({
  container: {
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
      width: '100%',
      height: 'auto',
    },
  },
  onHoverWhite: {
    '&:hover, &:focus': {
      color: 'white',
    },
  },
  loading: {
    height: '60vh',
    textAlign: 'center',
    paddingTop: '25vh',
    fontSize: '3rem',
  },
}))

const BlogFind = () => {
  const classes = useStyles()
  let { name } = useParams()
  const [currentBlog, setCurrentBlog] = useState({})
  const [title, setTitle] = useState('')
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .post('https://cogenthub-api.herokuapp.com/blogs/getBlogByTitle', {
        routeName: name,
      })
      .then((response) => {
        console.log('blogs')
        console.log(response)
        let content = convertFromRaw(JSON.parse(response.data.blog[0].post))
        setCurrentBlog(stateToHTML(content))
        setTitle(response.data.blog[0].title)
        let blogName = response.data.blog[0].routeName
        let url = '/blogs/' + blogName
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response)
      })
  })

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    }
  }

  return (
    <div>
      <HeaderTemp />
      <div className={classes.container}>
        {isLoading && (
          <div className={classes.loading}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {!isLoading && (
          <div>
            <div style={{ textAlign: 'right', padding: '1rem' }}>
              <Button
                variant="outline-warning"
                className={classes.onHoverWhite}
                onClick={() => {
                  window.location.href = '/blogs'
                }}
              >
                Go Back To Blogs
              </Button>{' '}
            </div>
            <h1 style={{ fontWeight: 'bold', marginBottom: '15px' }}>
              {title}
            </h1>
            <div
              className={classes.blog}
              dangerouslySetInnerHTML={createMarkup(currentBlog)}
            ></div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default BlogFind
