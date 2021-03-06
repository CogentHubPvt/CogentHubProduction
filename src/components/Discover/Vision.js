import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import AOS from 'aos'

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '3rem',
  },
  bannerContent: {
    marginTop: '1rem',
  },
  logo: {
    '& img': {
      opacity: '0.75',
      width: '12rem',
      height: '12rem',
    },
  },
}))

function Vision() {
  const classes = useStyles()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src="/cogentHubLogo.png" />
      </div>
      <div className={classes.bannerContent}>
        <div>
          <h1>Our Vision</h1>
        </div>
        <div>
          <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
            “ To be globally preferred organization, specializing in the field
            of technology, creating value for all our stakeholders – Associates,
            Customers, Investors, Suppliers & Society. ”
          </p>
        </div>
        <div>
          <p>
            CogentHub is a global provider focused on the delivery of business
            solutions integrated with the latest technologies. We bring together
            data and technology to enable our clients to attain their strategic
            business goals and gain competitive advantage. With our considerable
            experience across several industries and technology expertise, we
            deliver outsourcing and management consulting services.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Vision
