import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import content from '../../ContentJson/content.json'
import Container from 'react-bootstrap/Container'
import AOS from 'aos'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import useWindowDimensions from '../../useWindowDimensions'
import DOMPurify from 'dompurify'
const axios = require('axios')
import { convertToHTML } from 'draft-convert'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
// import Editor from '@draft-js-plugins/editor';
import createImagePlugin from '@draft-js-plugins/image'
const imagePlugin = createImagePlugin()
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '6rem',
    [theme.breakpoints.down('md')]: {
      margin: '3rem',
    },
  },
  appHeader: {
    backgroundColor: ' #282c34',
    minHeight: '5vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    marginBottom: '5vh',
    textAlign: 'center',
  },
  wrapperClass: {
    padding: '1rem',
    border: '1px solid #ccc',
  },
  editorClass: {
    backgroundColor: 'lightgray',
    padding: '1rem',
    border: '1px solid #ccc',
  },
  toolbarClass: {
    border: '1px solid #ccc',
  },
  Image: {
    margin: 'auto',
  },
  blogEditor: {
    margin: '3rem',
  },
  button: {
    width: '100%',
    marginTop: '2rem',
    color: 'white',
    '&:hover': {
      color: 'white',
    },
  },
  buttonContainer: {
    textAlign: 'center',
  },
}))

function RichTextEditor() {
  const classes = useStyles()
  const [phoneView, setPhoneView] = useState(false)
  const { height, width } = useWindowDimensions()
  const [title, setTitle] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [author, setAuthor] = useState('')
  const [tags, setTags] = useState('')
  const [category, setCategory] = useState('')
  const [routeName, setRouteName] = useState('')
  const [faqNumber, setFaqNumber] = useState('')
  const [faq, setFaq] = useState([1, 2, 3])
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  )
  const [convertedContent, setConvertedContent] = useState(null)

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
    if (width <= 500) {
      setPhoneView(true)
    } else {
      setPhoneView(false)
    }
  }, [])

  useEffect(() => {
    setFaq(Array.apply(null, Array(faqNumber)))
  }, [faqNumber])

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    }
  }

  const handleEditorChange = (state) => {
    setEditorState(state)
    convertContentToHTML()
    console.log(convertedContent)
  }

  const convertContentToHTML = () => {
    // let currentContentAsHTML = convertToHTML(editorState.getCurrentContent())
    let html = convertToHTML({
      blockToHTML: {
        PARAGRAPH: {
          start: '<p>',
          end: '</p>',
          empty: '<br>',
        },
      },
      entityToHTML: (entity, originalText) => {
        if (entity.type === 'LINK') {
          console.log('Here Link')
          console.log(entity.data)
          return `<a href="${entity.data.url}" target="_blank">${originalText}</a>`
        } else if (entity.type === 'IMAGE') {
          console.log('entity', entity)
          return `<img src="${entity.data.src}" height="${entity.data.height}" width="${entity.data.width}" alt="${entity.data.alt}" />`
        } else {
          return originalText
        }
      },
    })(editorState.getCurrentContent())
    setConvertedContent(html)
  }

  const uploadCallback = (file) => {
    return new Promise((resolve, reject) => {
      if (file) {
        let reader = new FileReader()
        reader.onload = (e) => {
          resolve({ data: { link: e.target.result } })
        }
        reader.readAsDataURL(file)
        const formData = new FormData()
        formData.append('image', file)
        console.log('filessss', file)
        axios
          .post('https://cogenthub-api.herokuapp.com/blogs/image', formData)
          .then((res) => {
            console.log('response', res.data.file)
            if (res.data.file) {
              console.log(res.data.file)
              setEditorState(insertImage(res.data.file)) //created below
            }
            // console.log('responseJSON', res.json())
            // res.json()
          })
          .catch((err) => {
            console.log(err.response)
          })

        // console.log(reader.readAsDataURL(file))
      }
    })
  }

  const handlePastedFiles = (files) => {
    const formData = new FormData()
    formData.append('file', files[0])
    console.log('filessss', files)
    axios
      .post('https://cogenthub-api.herokuapp.com/blogs/image', formData)
      .then((res) => {
        console.log('response', res.data.file)
        if (res.data.file) {
          console.log('Data', res.data.file)
          setEditorState(insertImage(res.data.file)) //created below
        }
        // console.log('responseJSON', res.json())
        // res.json()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const insertImage = (url) => {
    const contentState = editorState.getCurrentContent()
    console.log('URL', url)
    const contentStateWithEntity = contentState.createEntity(
      'IMAGE',
      'IMMUTABLE',
      { src: url },
    )
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    })
    console.log('editorState', editorState)
    return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ')
  }
  //

  // const html = convertToHTML({
  //   blockToHTML: {
  //     PARAGRAPH: {
  //       start: '<p>',
  //       end: '</p>',
  //       empty: '<br>',
  //     },
  //   },
  //   entityToHTML: (entity, originalText) => {
  //     if (entity.type === 'LINK') {
  //       return `<a href="${entity.data.url}">${originalText}</a>`
  //     } else if (entity.type === 'PHOTO') {
  //       return `<img src="${entity.data.url}" />`
  //     } else {
  //       return originalText
  //     }
  //   },
  // })(editorState.getCurrentContent())

  const onSubmit = () => {
    console.log(typeof convertedContent)
    const formData = new FormData()
    const content = editorState.getCurrentContent()
    formData.append('blog', JSON.stringify(convertToRaw(content)))
    formData.append('title', title)
    formData.append('introduction', introduction),
      formData.append('image', thumbnail)
    formData.append('author', author)
    formData.append('category', category)
    formData.append('tags', tags)
    formData.append('routeName', routeName)
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    }
    console.log('FORM DATA')
    console.log(title)
    console.log(introduction)
    console.log(thumbnail)
    console.log(author)
    console.log(category)
    console.log(tags)
    console.log(routeName)
    axios
      .post(
        'https://cogenthub-api.herokuapp.com/blogs/htmlPost',
        formData,
        config,
      )
      .then((res) => {
        console.log('response', res)
        // console.log('responseJSON', res.json())
        // res.json()
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  const onTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const onAuthorChange = (e) => {
    setAuthor(e.target.value)
  }

  const onCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const onTagsChange = (e) => {
    setTags(e.target.value)
  }

  const onIntroductionChange = (e) => {
    console.log(e.target.value)
    setIntroduction(e.target.value)
  }

  const onThumbnailChange = (e) => {
    console.log('file', e.target.files[0])
    setThumbnail(e.target.files[0])
  }

  const onRouteChange = (e) => {
    console.log('routeName', e.target.value)
    setRouteName(e.target.value)
  }

  const onFaqNumberChange = (e) => {
    console.log('faqNumber', e.target.value)
    setFaqNumber(e.target.value)
  }

  return (
    <>
      <div className={classes.blogEditor}>
        <header className={classes.appHeader}>Create Blog</header>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Route Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Route Name"
              onChange={onRouteChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              onChange={onTitleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Brief Introduction</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Introduction"
              onChange={onIntroductionChange}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Thumbnail Image</Form.Label>
            <Form.Control type="file" onChange={onThumbnailChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Author"
              onChange={onAuthorChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Tags"
              onChange={onTagsChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={onCategoryChange}
            >
              <option value="1">Select Category</option>
              <option value="Festival">Festival</option>
              <option value="BPO">BPO</option>
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number of FAQs</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={onFaqNumberChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Select>
          </Form.Group>
          {faq.map(() => {
            return (
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>FAQ</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Tags"
                  onChange={onTagsChange}
                />
              </Form.Group>
            )
          })}
        </Form>
        <Editor
          handlePastedFiles={handlePastedFiles}
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName={classes.wrapperClass}
          editorClassName={classes.editorClass}
          toolbarClassName={classes.toolbarClass}
          plugins={[imagePlugin]}
          toolbar={{
            // options: ['image'],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadEnabled: true,
              uploadCallback: uploadCallback,
              previewImage: true,
              inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
              alt: { present: true, mandatory: true },
              defaultSize: {
                height: '400px',
                width: '400px',
              },
            },
          }}
        />
        <div className={classes.buttonContainer}>
          <Button
            variant="warning"
            onClick={onSubmit}
            className={classes.button}
          >
            Submit
          </Button>{' '}
        </div>
        <div
          className="preview"
          dangerouslySetInnerHTML={createMarkup(convertedContent)}
        ></div>
      </div>
    </>
  )
}

export default RichTextEditor
