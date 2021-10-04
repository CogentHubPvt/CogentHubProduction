import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
const axios = require('axios')

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: '2rem',
    textAlign: 'center',
  },
  previewImage: {
    '& img': {
      width: '100%',
      height: '70vh',
    },
    margin: '1rem',
  },
  addTitle: {
    margin: '1rem',
    textAlign: 'left',
    '& h2': {
      fontSize: '4rem',
    },
  },
  titleField: {
    height: '3rem',
  },
  addBody: {
    margin: '1rem',
  },
  imageUpload: {
    margin: '1rem',
  },
  body: {
    margin: '1rem',
    textAlign: 'left',
    maxWidth: '100%',
  },
  subHeading: {
    margin: '1rem',
    textAlign: 'left',
    '& h2': {
      fontSize: '2rem',
    },
  },
  previewButton: {
    backgroundColor: theme.background.green,
    padding: '10px',
    margin: '1rem',
    borderRadius: '20px',
    '& a': {
      textDecoration: 'none',
      color: 'white',
      height: '100%',
      width: '100%',
      display: 'block',
    },
  },
}))

const AddBlog = () => {
  const classes = useStyles()
  const [image, setImage] = useState('')
  const [imageForm, setImageForm] = useState(null)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [subHeadingOne, setSubHeadingOne] = useState('')
  const [subContentOne, setSubContentOne] = useState('')
  const [subHeadingTwo, setSubHeadingTwo] = useState('')
  const [subContentTwo, setSubContentTwo] = useState('')
  const [subHeadingThree, setSubHeadingThree] = useState('')
  const [subContentThree, setSubContentThree] = useState('')
  const [isPreview, setPreview] = useState(false)

  const handleSubmit = () => {
    console.log('image', image)
    let formData = new FormData()
    formData.append('title', title)
    formData.append('introduction', body)
    formData.append('subHeadingOne', subHeadingOne)
    formData.append('subHeadingTwo', subHeadingTwo)
    formData.append('subHeadingThree', subHeadingThree)
    formData.append('contentOne', subContentOne)
    formData.append('contentTwo', subContentTwo)
    formData.append('contentThree', subContentThree)
    formData.append('file', imageForm)

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    }
    axios
      .post('https://cogenthub-api.herokuapp.com/blogs', formData, config)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  const imageHandler = (e) => {
    const objectUrl = URL.createObjectURL(e.target.files[0])
    setImage(objectUrl)
    setImageForm(e.target.files[0])
  }

  const titleHandler = (e) => {
    setTitle(e.target.value)
  }
  const subOneHandler = (e) => {
    setSubHeadingOne(e.target.value)
  }
  const subTwoHandler = (e) => {
    setSubHeadingTwo(e.target.value)
  }
  const subThreeHandler = (e) => {
    setSubHeadingThree(e.target.value)
  }

  const handleBody = (e) => {
    setBody(e.target.value)
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
  }
  const handleContentOne = (e) => {
    setSubContentOne(e.target.value)
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
  }
  const handleContentTwo = (e) => {
    setSubContentTwo(e.target.value)
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
  }
  const handleContentThree = (e) => {
    setSubContentThree(e.target.value)
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
  }
  const handlePreview = () => {
    setPreview(true)
  }
  const handlePreviewBack = () => {
    setPreview(false)
  }

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2>Add Blog</h2>
      </div>
      <div
        className={classes.imageUpload}
        style={{ display: isPreview != true ? 'block' : 'none' }}
      >
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Control type="file" size="lg" onChange={imageHandler} />
        </Form.Group>
      </div>
      {image && (
        <div className={classes.previewImage}>
          <img src={image} />
        </div>
      )}
      <div
        className={classes.addTitle}
        style={{ display: isPreview != true ? 'block' : 'none' }}
      >
        <InputGroup>
          <InputGroup.Text id="inputGroup-sizing-lg">
            Enter Blog Title
          </InputGroup.Text>
          <FormControl
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            className={classes.titleField}
            onChange={titleHandler}
          />
        </InputGroup>
      </div>
      <div className={classes.addTitle}>
        <h2>{title}</h2>
      </div>
      <div
        className={classes.addBody}
        style={{ display: isPreview != true ? 'block' : 'none' }}
      >
        <InputGroup>
          <InputGroup.Text>Enter Brief Introduction</InputGroup.Text>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            onChange={handleBody}
            className={classes.bodyField}
          />
        </InputGroup>
      </div>
      <div className={classes.body}>
        <p>{body}</p>
      </div>
      <div
        className={classes.addTitle}
        style={{ display: isPreview != true ? 'block' : 'none' }}
      >
        <InputGroup>
          <InputGroup.Text id="inputGroup-sizing-lg">
            Enter Blog SubHeading
          </InputGroup.Text>
          <FormControl
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            className={classes.titleField}
            onChange={subOneHandler}
          />
        </InputGroup>
      </div>
      <div className={classes.subHeading}>
        <h2>{subHeadingOne}</h2>
      </div>
      <div
        className={classes.addBody}
        style={{ display: isPreview != true ? 'block' : 'none' }}
      >
        <InputGroup>
          <InputGroup.Text>Enter SubHeading Content</InputGroup.Text>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            onChange={handleContentOne}
            className={classes.bodyField}
          />
        </InputGroup>
      </div>
      <div className={classes.body}>
        <p>{subContentOne}</p>
      </div>
      <div
        className={classes.addTitle}
        style={{ display: isPreview != true ? 'block' : 'none' }}
      >
        <InputGroup>
          <InputGroup.Text id="inputGroup-sizing-lg">
            Enter Blog SubHeading
          </InputGroup.Text>
          <FormControl
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            className={classes.titleField}
            onChange={subTwoHandler}
          />
        </InputGroup>
      </div>
      <div className={classes.subHeading}>
        <h2>{subHeadingTwo}</h2>
      </div>
      <div
        className={classes.addBody}
        style={{ display: isPreview != true ? 'block' : 'none' }}
      >
        <InputGroup>
          <InputGroup.Text>Enter SubHeading Content</InputGroup.Text>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            onChange={handleContentTwo}
            className={classes.bodyField}
          />
        </InputGroup>
      </div>
      <div className={classes.body}>
        <p>{subContentTwo}</p>
      </div>
      <div
        className={classes.addTitle}
        style={{ display: isPreview != true ? 'block' : 'none' }}
      >
        <InputGroup>
          <InputGroup.Text id="inputGroup-sizing-lg">
            Enter Blog SubHeading
          </InputGroup.Text>
          <FormControl
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            className={classes.titleField}
            onChange={subThreeHandler}
          />
        </InputGroup>
      </div>
      <div className={classes.subHeading}>
        <h2>{subHeadingThree}</h2>
      </div>
      <div
        className={classes.addBody}
        style={{ display: isPreview != true ? 'block' : 'none' }}
      >
        <InputGroup>
          <InputGroup.Text>Enter SubHeading Content</InputGroup.Text>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            onChange={handleContentThree}
            className={classes.bodyField}
          />
        </InputGroup>
      </div>
      <div className={classes.body}>
        <p>{subContentThree}</p>
      </div>
      {!isPreview && (
        <div className={classes.previewButton}>
          <a href="#" onClick={handlePreview}>
            Preview
          </a>
        </div>
      )}
      {isPreview && (
        <div className={classes.previewButton}>
          <a href="#" onClick={handlePreviewBack}>
            Back
          </a>
        </div>
      )}
      <div className={classes.previewButton}>
        <a href="#" onClick={handleSubmit}>
          Submit
        </a>
      </div>
    </div>
  )
}

export default AddBlog
