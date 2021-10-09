import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/Search'
const axios = require('axios')
import { useSpring, animated } from 'react-spring'
import Test from './HeaderItems/Insights'
import Services from './HeaderItems/Services'
import Industries from './HeaderItems/Industries'
import Achievements from './HeaderItems/Achievements'
import Career from './HeaderItems/Career'
import Discover from './HeaderItems/Discover'
import Add from './HeaderItems/Add'
import MenuIcon from '@material-ui/icons/Menu'
import useWindowDimensions from '../../useWindowDimensions'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader'
import Offcanvas from 'react-bootstrap/Offcanvas'
import OffcanvasTitle from 'react-bootstrap/OffcanvasTitle'
import OffcanvasBody from 'react-bootstrap/OffcanvasBody'
import { ReactComponent as YourSvg } from '../../logo.svg'

const useStyles = makeStyles((theme) => ({
  burger: {
    padding: '14px 16px',
    margin: '0.5rem 1.5rem 0 1.5rem',
    '& a': {
      color: 'black',
    },
  },
  leftAlign: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    boxShadow: 'rgb(0 0 0 / 35%) 0px 5px 15px',
    overflow: 'hidden',
    fontWeight: theme.fontWeight.light,
    backgroundColor: 'white',
    '& a': {
      float: 'left',
      color: 'black',
      textAlign: 'center',
      padding: '14px 16px',
      margin: '1.7rem 1.5rem 0 1.5rem',
      textDecoration: 'none',
      fontSize: '20px',
    },
    '& p': {
      float: 'left',
      color: 'black',
      margin: '0.5rem 0 0 0',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
      fontSize: theme.fontSize.p,
      fontWeight: theme.fontWeight.bold,
    },
  },
  rightAlign: {
    overflow: 'hidden',
    '& a': {
      float: 'right',
      color: 'white',
      textAlign: 'center',
      padding: '10px 16px',
      margin: '2rem 1.5rem 0 1.5rem',
      textDecoration: 'none',
      fontSize: theme.fontSize.p,
      width: '100px',
      height: '40px',
    },
    '& p': {
      float: 'right',
      color: 'black',
      margin: '2.5rem 0 0 0',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
      fontSize: theme.fontSize.p,
      fontWeight: theme.fontWeight.bold,
    },
  },
  sideBarBody: {
    '& a': {
      textDecoration: 'none',
      display: 'block',
      padding: '10px',
      color: 'black',
      fontSize: theme.fontSize.p,
    },
  },
  sideBarTitle: {
    '& a': {
      textDecoration: 'none',
      color: 'black',
      fontSize: theme.fontSize.p,
      marginLeft: '10px',
    },
  },
  phoneList: {
    '& a': {
      fontSize: '14px',
      padding: '10px',
    },
  },
  logo: {
    width: '250px',
    height: '75px',
  },
  logoLink: {
    marginTop: '0.25rem !important',
    padding: '10px !important',
  },
  modal: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.background.green,
    borderRadius: '20px',
    color: 'white',
  },
  dropdown: {
    position: 'relative',
    zIndex: 1111,
  },
}))

const HeaderTemp = ({ setIsHeader, isHeader }) => {
  const classes = useStyles()
  const [add, setAdd] = useState(null)
  const [insights, setInsights] = useState(null)
  const [services, setServices] = useState(null)
  const [industries, setIndustries] = useState(null)
  const [achievements, setAchievements] = useState(null)
  const [career, setCareer] = useState(null)
  const [discover, setDiscover] = useState(null)
  const { height, width } = useWindowDimensions()
  const [phoneView, setPhoneView] = useState(false)
  const [show, setShow] = useState(false)
  const [isAdmin, setAdmin] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    if (width < 500) {
      setPhoneView(true)
    } else {
      setPhoneView(false)
    }
    let token = localStorage.getItem('token')
    console.log(token)
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
    console.log('phoneView', phoneView)
    console.log('width', width)
  }, [width])

  const onInsights = () => {
    // if (
    //   services === true ||
    //   industries === true ||
    //   career === true ||
    //   discover === true ||
    //   add === true
    // ) {
    //   setIsHeader(true)
    // } else {
    //   setIsHeader(!isHeader)
    // }
    if (insights === null) {
      setInsights(true)
    } else {
      setInsights(!insights)
    }
    if (services != null) {
      setServices(false)
    }
    if (industries != null) {
      setIndustries(false)
    }
    if (achievements != null) {
      setAchievements(false)
    }
    if (career != null) {
      setCareer(false)
    }
    if (discover != null) {
      setDiscover(false)
    }
  }

  const onServices = () => {
    // if (
    //   insights === true ||
    //   industries === true ||
    //   career === true ||
    //   discover === true ||
    //   add === true
    // ) {
    //   setIsHeader(true)
    // } else {
    //   setIsHeader(!isHeader)
    // }
    if (services === null) {
      setServices(true)
    } else {
      setServices(!services)
    }
    if (insights != null) {
      setInsights(false)
    }
    if (industries != null) {
      setIndustries(false)
    }
    if (achievements != null) {
      setAchievements(false)
    }
    if (career != null) {
      setCareer(false)
    }
    if (discover != null) {
      setDiscover(false)
    }
  }

  const onIndustries = () => {
    // if (
    //   insights === true ||
    //   services === true ||
    //   career === true ||
    //   discover === true ||
    //   add === true
    // ) {
    //   setIsHeader(true)
    // } else {
    //   setIsHeader(!isHeader)
    // }
    if (industries === null) {
      setIndustries(true)
    } else {
      setIndustries(!industries)
    }
    if (insights != null) {
      setInsights(false)
    }
    if (services != null) {
      setServices(false)
    }
    if (achievements != null) {
      setAchievements(false)
    }
    if (career != null) {
      setCareer(false)
    }
    if (discover != null) {
      setDiscover(false)
    }
  }

  const onAchievements = () => {
    if (achievements === null) {
      setAchievements(true)
    } else {
      setAchievements(!achievements)
    }
    if (insights != null) {
      setInsights(false)
    }
    if (services != null) {
      setServices(false)
    }
    if (career != null) {
      setCareer(false)
    }
    if (discover != null) {
      setDiscover(false)
    }
    if (industries != null) {
      setIndustries(false)
    }
  }

  const onCareer = () => {
    // if (
    //   insights === true ||
    //   industries === true ||
    //   services === true ||
    //   discover === true ||
    //   add === true
    // ) {
    //   setIsHeader(true)
    // } else {
    //   setIsHeader(!isHeader)
    // }
    if (career === null) {
      setCareer(true)
    } else {
      setCareer(!career)
    }
    if (insights != null) {
      setInsights(false)
    }
    if (services != null) {
      setServices(false)
    }
    if (achievements != null) {
      setAchievements(false)
    }
    if (discover != null) {
      setDiscover(false)
    }
    if (industries != null) {
      setIndustries(false)
    }
  }

  const onDiscover = () => {
    // s
    if (discover === null) {
      setDiscover(true)
    } else {
      setDiscover(!discover)
    }
    if (insights != null) {
      setInsights(false)
    }
    if (services != null) {
      setServices(false)
    }
    if (achievements != null) {
      setAchievements(false)
    }
    if (career != null) {
      setCareer(false)
    }
    if (industries != null) {
      setIndustries(false)
    }
  }

  const onAdd = () => {
    // if (
    //   insights === true ||
    //   industries === true ||
    //   career === true ||
    //   discover === true ||
    //   services === true
    // ) {
    //   setIsHeader(true)
    // } else {
    //   setIsHeader(!isHeader)
    // }
    if (add === null) {
      setAdd(true)
      setIsHeader(true)
    } else {
      setAdd(!add)
      setIsHeader(!isHeader)
    }
    if (insights != null) {
      setInsights(false)
    }
    if (services != null) {
      setServices(false)
    }
    if (achievements != null) {
      setAchievements(false)
    }
    if (career != null) {
      setCareer(false)
    }
    if (industries != null) {
      setIndustries(false)
    }
    if (discover != null) {
      setDiscover(false)
    }
  }

  return (
    <>
      {phoneView && (
        <div className={classes.burger}>
          <a href="#" onClick={handleShow}>
            <MenuIcon />
          </a>
          <Offcanvas show={show} onHide={handleClose} style={{ width: '70%' }}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className={classes.sideBarTitle}>
                <a href="/">
                  <img src="https://www.cogenthub.com/img/logo.svg" />
                </a>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={classes.sideBarBody}>
              <a href="#home" onClick={onInsights}>
                Insights
              </a>
              {insights && (
                <div className={classes.phoneList}>
                  <a>Blogs</a>
                  <a>Global Trend Studies</a>
                  <a>Case Studies</a>
                  <a>Podcasts on Spotify</a>
                </div>
              )}
              <a href="#news" onClick={onServices}>
                Services
              </a>
              {services && (
                <div className={classes.phoneList}>
                  <a href="/services/integratedBpo">Integrated BPO</a>
                  <a href="/services/knowledgeServices">Knowledge Services</a>
                  <a href="/services/backOfficeManagement">
                    Back Office Management
                  </a>
                  <a href="/services/frontOfficeManagement">
                    Front Office Management
                  </a>
                  <a href="/services/bureauServices">Bureau Services</a>
                </div>
              )}
              <a href="#contact" onClick={onIndustries}>
                Industries
              </a>
              {industries && (
                <div className={classes.phoneList}>
                  <a href="/industries/ecommerce">E-Commerce</a>
                  <a href="/industries/retail">Fashion & Retail</a>
                  <a href="/industries/foodTech">Food Tech</a>
                  <a href="/industries/travelTech">Travel Tech</a>
                  <a href="/industries/edTech">Ed Tech</a>
                </div>
              )}
              <a href="#about" onClick={onCareer}>
                Career
              </a>
              {career && (
                <div className={classes.phoneList}>
                  <a href="/jobs">Jobs</a>
                  <a href="/career">Join the CogentHub Family</a>
                </div>
              )}
              <a href="/discover" onClick={onDiscover}>
                Discover
              </a>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      )}
      <div className={classes.leftAlign}>
        <a href="/" className={classes.logoLink}>
          <img
            src="https://www.cogenthub.com/img/logo.svg"
            className={classes.logo}
          />
        </a>
        <a href="#home" onClick={onInsights} className={classes.headerItem}>
          Insights
        </a>
        <a href="#news" onClick={onServices}>
          Services
        </a>
        <a href="#contact" onClick={onIndustries}>
          Industries
        </a>
        {/* <a href="#about" onClick={onAchievements}>
          Achievements
        </a> */}
        <a href="#about" onClick={onCareer}>
          Career
        </a>
        <a href="/discover">Discover</a>
        {isAdmin && (
          <a href="#" onClick={onAdd}>
            Add
          </a>
        )}
        <div className={classes.rightAlign}>
          {!isAdmin && (
            <div>
              <a href="/login" className={classes.button}>
                Sign In
              </a>
            </div>
          )}
          {isAdmin && (
            <a
              href="#"
              className={classes.button}
              onClick={() => {
                localStorage.setItem('token', '')
                window.location.href = '/'
              }}
            >
              Log Out
            </a>
          )}
          {/* <p>
            <SearchIcon />
          </p> */}
        </div>
      </div>
      <div className={classes.dropdown}>
        {insights === true && !phoneView && <Test boolean={true} />}
        {insights === false && !phoneView && <Test boolean={false} />}
        {services === true && !phoneView && <Services boolean={true} />}
        {services === false && !phoneView && <Services boolean={false} />}
        {industries === true && !phoneView && <Industries boolean={true} />}
        {industries === false && !phoneView && <Industries boolean={false} />}
        {achievements === true && !phoneView && <Achievements boolean={true} />}
        {achievements === false && !phoneView && (
          <Achievements boolean={false} />
        )}
        {career === true && !phoneView && <Career boolean={true} />}
        {career === false && !phoneView && <Career boolean={false} />}
        {discover === true && !phoneView && <Discover boolean={true} />}
        {discover === false && !phoneView && <Discover boolean={false} />}
        {add === true && !phoneView && <Add boolean={true} />}
        {add === false && !phoneView && <Add boolean={false} />}
      </div>
    </>
  )
}

export default HeaderTemp
