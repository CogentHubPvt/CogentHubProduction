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
    textAlign: 'left',
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

const AddBlog = () => {
  const classes = useStyles()
  const [image, setImage] = useState({ url: '', file: '' })
  const [imageTwo, setImageTwo] = useState({ url: '', file: '' })
  const [imageThree, setImageThree] = useState({ url: '', file: '' })
  const [imageFour, setImageFour] = useState({ url: '', file: '' })
  const [imageFive, setImageFive] = useState({ url: '', file: '' })
  const [imageForm, setImageForm] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [subHeadingOne, setSubHeadingOne] = useState('')
  const [subContentOne, setSubContentOne] = useState('')
  const [subHeadingTwo, setSubHeadingTwo] = useState('')
  const [subContentTwo, setSubContentTwo] = useState('')
  const [subHeadingThree, setSubHeadingThree] = useState('')
  const [subContentThree, setSubContentThree] = useState('')
  const [subHeadingFour, setSubHeadingFour] = useState('')
  const [subContentFour, setSubContentFour] = useState('')
  const [author, setAuthor] = useState('')
  const [isPreview, setPreview] = useState(false)
  const images = []

  // const handleSubmit = async () => {
  //   console.log('image', image)
  //   let formData = new FormData()
  // formData.append('title', title)
  // formData.append('introduction', body)
  //   formData.append('subHeadingOne', subHeadingOne)
  //   formData.append('subHeadingTwo', subHeadingTwo)
  //   formData.append('subHeadingThree', subHeadingThree)
  //   formData.append('subHeadingFour', subHeadingFour)
  //   formData.append('contentOne', subContentOne)
  //   formData.append('contentTwo', subContentTwo)
  //   formData.append('contentThree', subContentThree)
  //   formData.append('contentFour', subContentFour)

  //   console.log('Image Form', imageForm)
  //   console.log('images')
  //   console.log(image)
  //   console.log(imageTwo)
  //   console.log(imageThree)
  //   console.log(imageFour)
  //   console.log(imageFive)

  //   let newStateArray = []
  //   let counter = 0

  //   if (image.file != '') {
  //     newStateArray.push(image.file)
  //     counter = counter + 1
  //     // setImageForm(newStateArray)
  //   }
  //   if (imageTwo.file != '') {
  //     // let newStateArray = imageForm.slice()
  //     newStateArray.push(imageTwo.file)
  //     counter = counter + 1
  //     // setImageForm(newStateArray)
  //   }
  //   if (imageThree.file != '') {
  //     // let newStateArray = imageForm.slice()
  //     newStateArray.push(imageThree.file)
  //     counter = counter + 1
  //     // setImageForm(newStateArray)
  //   }
  //   if (imageFour.file != '') {
  //     // let newStateArray = imageForm.slice()
  //     newStateArray.push(imageFour.file)
  //     counter = counter + 1
  //     // setImageForm(newStateArray)
  //   }
  //   if (imageFive.file != '') {
  //     // let newStateArray = imageForm.slice()
  //     newStateArray.push(imageFive.file)
  //     counter = counter + 1
  //     // setImageForm(newStateArray)
  //   }

  //   console.log(newStateArray)

  //   newStateArray.forEach((item) => formData.append('file', item))

  // const config = {
  //   headers: { 'content-type': 'multipart/form-data' },
  // }
  //   axios
  //     .post('https://cogenthub-api.herokuapp.com/blogs', formData, config)
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.log(error.response)
  //     })
  // }

  // const imageOneHandler = (e) => {
  //   const objectUrl = URL.createObjectURL(e.target.files[0])
  //   setImage({
  //     url: objectUrl,
  //     file: e.target.files[0],
  //   })
  // }
  // const imageTwoHandler = (e) => {
  //   const objectUrl = URL.createObjectURL(e.target.files[0])
  //   setImageTwo({
  //     url: objectUrl,
  //     file: e.target.files[0],
  //   })
  // }
  // const imageThreeHandler = (e) => {
  //   const objectUrl = URL.createObjectURL(e.target.files[0])
  //   setImageThree({
  //     url: objectUrl,
  //     file: e.target.files[0],
  //   })
  // }
  // const imageFourHandler = (e) => {
  //   const objectUrl = URL.createObjectURL(e.target.files[0])
  //   setImageFour({
  //     url: objectUrl,
  //     file: e.target.files[0],
  //   })
  // }
  // const imageFiveHandler = (e) => {
  //   const objectUrl = URL.createObjectURL(e.target.files[0])
  //   setImageFive({
  //     url: objectUrl,
  //     file: e.target.files[0],
  //   })
  // }

  const titleHandler = (e) => {
    setTitle(e.target.value)
  }
  // const subOneHandler = (e) => {
  //   setSubHeadingOne(e.target.value)
  // }
  // const subTwoHandler = (e) => {
  //   setSubHeadingTwo(e.target.value)
  // }
  // const subThreeHandler = (e) => {
  //   setSubHeadingThree(e.target.value)
  // }
  // const subFourHandler = (e) => {
  //   setSubHeadingFour(e.target.value)
  // }

  const handleBody = (e) => {
    setBody(e.target.value)
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
  }
  // const handleContentOne = (e) => {
  //   setSubContentOne(e.target.value)
  //   e.target.style.height = 'inherit'
  //   e.target.style.height = `${e.target.scrollHeight}px`
  // }
  // const handleContentTwo = (e) => {
  //   setSubContentTwo(e.target.value)
  //   e.target.style.height = 'inherit'
  //   e.target.style.height = `${e.target.scrollHeight}px`
  // }
  // const handleContentThree = (e) => {
  //   setSubContentThree(e.target.value)
  //   e.target.style.height = 'inherit'
  //   e.target.style.height = `${e.target.scrollHeight}px`
  // }

  // const handleContentFour = (e) => {
  //   setSubContentFour(e.target.value)
  //   e.target.style.height = 'inherit'
  //   e.target.style.height = `${e.target.scrollHeight}px`
  // }
  const handlePreview = () => {
    setPreview(true)
  }
  const handlePreviewBack = () => {
    setPreview(false)
  }

  const handleImages = (e) => {
    setImageForm(e.target.files)
    console.log('files', e.target.files)
  }

  const handleAuthor = (e) => {
    setAuthor(e.target.value)
  }

  const handleSubmit = () => {
    console.log(imageForm)
    let formData = new FormData()
    formData.append('title', title)
    formData.append('introduction', body)
    formData.append('author', author)
    console.log(typeof imageForm)
    let array = Array.from(imageForm)
    console.log('Arrayyyyy', array)
    // formData.append('files', array)
    array.forEach((item) => formData.append('files', item))

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    }

    axios
      .post(
        'https://cogenthub-api.herokuapp.com/blogs/blogUpload',
        formData,
        config,
      )
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  return (
    <div className={classes.root}>
      {!isPreview && (
        <div>
          <div className={classes.title}>
            <h2>Add Blog</h2>
          </div>
          <div
            className={classes.imageUpload}
            style={{ display: isPreview != true ? 'block' : 'none' }}
          >
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control
                type="file"
                multiple
                size="lg"
                onChange={handleImages}
              />
              <Form.Text className="text-muted">
                Enter the image files in order.
              </Form.Text>
            </Form.Group>
          </div>
          {image.url != '' && (
            <div className={classes.previewImage}>
              <img src={image.url} />
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
            className={classes.addBody}
            style={{ display: isPreview != true ? 'block' : 'none' }}
          >
            <InputGroup>
              <InputGroup.Text>Enter Author Name</InputGroup.Text>
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                className={classes.titleField}
                onChange={handleAuthor}
              />
            </InputGroup>
          </div>
          {/* <div
            className={classes.imageUpload}
            style={{ display: isPreview != true ? 'block' : 'none' }}
          >
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control type="file" size="lg" onChange={imageTwoHandler} />
            </Form.Group>
          </div>
          {imageTwo.url != '' && (
            <div className={classes.previewImage}>
              <img src={imageTwo.url} />
            </div>
          )}
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
            className={classes.imageUpload}
            style={{ display: isPreview != true ? 'block' : 'none' }}
          >
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control
                type="file"
                size="lg"
                onChange={imageThreeHandler}
              />
            </Form.Group>
          </div>
          {imageThree.url != '' && (
            <div className={classes.previewImage}>
              <img src={imageThree.url} />
            </div>
          )}
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
            className={classes.imageUpload}
            style={{ display: isPreview != true ? 'block' : 'none' }}
          >
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control type="file" size="lg" onChange={imageFourHandler} />
            </Form.Group>
          </div>
          {imageThree.url != '' && (
            <div className={classes.previewImage}>
              <img src={imageFour.url} />
            </div>
          )}
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
          <div
            className={classes.imageUpload}
            style={{ display: isPreview != true ? 'block' : 'none' }}
          >
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control type="file" size="lg" onChange={imageFiveHandler} />
            </Form.Group>
          </div>
          {imageFour.url != '' && (
            <div className={classes.previewImage}>
              <img src={imageFive.url} />
            </div>
          )}
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
                onChange={subFourHandler}
              />
            </InputGroup>
          </div>
          <div className={classes.subHeading}>
            <h2>{subHeadingFour}</h2>
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
                onChange={handleContentFour}
                className={classes.bodyField}
              />
            </InputGroup>
          </div>
          <div className={classes.body}>
            <p>{subContentFour}</p>
          </div> */}
        </div>
      )}
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
      {isPreview && (
        <div className={classes.currentBlogContainer}>
          {image.url != '' && (
            <div className={classes.imageContainer}>
              <img src={image.url} className={classes.blogImage} />
            </div>
          )}
          <div>
            <h1>{title}</h1>
          </div>
          <div>
            <p>{body}</p>
          </div>
          {imageTwo.url != '' && (
            <div className={classes.imageContainer}>
              <img src={imageTwo.url} className={classes.blogImage} />
            </div>
          )}
          <div>
            <h2>{subHeadingOne}</h2>
          </div>
          <div>
            <p>{subContentOne}</p>
          </div>
          <div>
            {imageThree.url != '' && (
              <div className={classes.imageContainer}>
                <img src={imageThree.url} className={classes.blogImage} />
              </div>
            )}
            <h2>{subHeadingTwo}</h2>
          </div>
          <div>
            <p>{subContentTwo}</p>
          </div>
          {imageFour.url != '' && (
            <div className={classes.imageContainer}>
              <img src={imageFour.url} className={classes.blogImage} />
            </div>
          )}
          <div>
            <h2>{subHeadingThree}</h2>
          </div>
          <div>
            <p>{subContentThree}</p>
          </div>
          {imageFive.url != '' && (
            <div className={classes.imageContainer}>
              <img src={imageFive.url} className={classes.blogImage} />
            </div>
          )}
          <div>
            <h2>{subHeadingFour}</h2>
          </div>
          <div>
            <p>{subContentFour}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddBlog
