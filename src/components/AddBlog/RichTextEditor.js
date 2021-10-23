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
}))

function RichTextEditor() {
  const classes = useStyles()
  const [phoneView, setPhoneView] = useState(false)
  const { height, width } = useWindowDimensions()
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
          return `<a href="${entity.data.url}">${originalText}</a>`
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
    formData.append('blog', JSON.stringify({ content: convertToRaw(content) }))
    console.log('TESTTTTT', JSON.stringify({ content: convertToRaw(content) }))
    axios
      .post('http://localhost:5000/blogs/htmlPost', {
        blog: JSON.stringify(convertToRaw(content)),
      })
      .then((res) => {
        console.log('response', res)
        // console.log('responseJSON', res.json())
        // res.json()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div className="App">
        <header className={classes.appHeader}>Rich Text Editor Example</header>
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
        <div>
          <Button variant="outline-warning" onClick={onSubmit}>
            Warning
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
