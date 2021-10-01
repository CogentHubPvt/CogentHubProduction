import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import AOS from 'aos'
const axios = require('axios')
import { makeStyles } from '@material-ui/styles'
import HeaderTemp from '../Header/HeaderTemp'
import Footer from '../Footer/Footer'

const useStyles = makeStyles((theme) => ({
  login: {
    margin: '3rem',
    padding: '2rem',
    width: '50%',
    textAlign: 'center',
    boxShadow:
      'rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset',
    borderRadius: '20px',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  submitButton: {
    width: '6rem',
  },
  loading: {
    height: '60vh',
    textAlign: 'center',
    paddingTop: '25vh',
    fontSize: '3rem',
  },
}))

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const classes = useStyles()

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const loginHandler = (e) => {
    console.log(email)
    console.log(password)
    setLoading(true)
    axios
      .post('https://cogenthub-api.herokuapp.com/user/loginUser', {
        email: email,
        password: password,
      })
      .then(function (response) {
        setLoading(false)
        localStorage.setItem('token', response.data.token)
        window.location.href = '/'
        console.log(response)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error.message)
      })
  }

  return (
    <>
      <div>
        <div>
          <HeaderTemp />
        </div>
        {loading && (
          <div className={classes.loading}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {!loading && (
          <div className={classes.formContainer}>
            <Form className={classes.login}>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ textAlign: 'left' }}
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={emailHandler}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                style={{ textAlign: 'left' }}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={passwordHandler}
                />
              </Form.Group>
              <Button
                variant="primary"
                className={classes.submitButton}
                onClick={loginHandler}
              >
                Submit
              </Button>
            </Form>
          </div>
        )}
        <div>
          <Footer />
        </div>
      </div>
      )
    </>
  )
}

export default Login
