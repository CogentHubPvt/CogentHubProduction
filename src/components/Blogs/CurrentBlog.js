import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { useParams } from 'react-router-dom'
import useWindowDimensions from '../../useWindowDimensions'
import { stateToHTML } from 'draft-js-export-html'
import DOMPurify from 'dompurify'

const axios = require('axios')

const useStyles = makeStyles((theme) => ({}))

const CurrentBlog = ({ currentBlog }) => {
  const classes = useStyles()

  useEffect(() => {
    console.log('Current Blog')
    console.log(currentBlog)
  })

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    }
  }

  return (
    <div className={classes.container}>
      <h1>Current Blog </h1>
      <div
        className={classes.blog}
        dangerouslySetInnerHTML={createMarkup(currentBlog)}
      ></div>
    </div>
  )
}

export default CurrentBlog
