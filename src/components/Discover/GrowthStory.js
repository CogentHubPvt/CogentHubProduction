import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import AOS from 'aos'

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    marginTop: '3rem',
  },
  bannerContent: {
    padding: '2rem',
    lineHeight: '2rem',
    boxShadow:
      'rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset',
  },
  logo: {
    '& img': {
      width: '100%',
    },
  },
}))

function GrowthStory() {
  const classes = useStyles()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <div className={classes.container} data-aos="fade-down-right">
      <div className={classes.logo}>
        <img src="/growthStory2.png" />
      </div>
      <div className={classes.bannerContent}>
        <div>
          <h1>Our Growth Story</h1>
        </div>
        <div>
          <p>
            A young organization that started in 2016, CogentHub is
            headquartered in India and has a state-of-the-art delivery center
            based out of Salt Lake City, which works on a 24/7 basis . At
            present, the BPO Unit of CogentHub is working with off-shore
            clients, successfully providing services like Telemarketing
            (outbound campaigns), Customer Care, Technical Support, Back Office
            support and more. Our MIS Team is comprised of in-house software
            developers who continuously work to manage the day to day activities
            and work. We firmly believe that all our businesses should function
            uninterruptedly hence to keep the business flow of all our clients
            continuous, CogentHub has developed its own BCP (Business Continuity
            Plan) site. The site is developed to ensure that all our resources
            deployed for a business segment can be transferred easily to meet
            optimum service delivery. In a short span of time a large number of
            aspirants prefer to work with CogentHub as a brand. This has been
            achieved by giving individuals cross trainings and
            inter-departmental growth opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default GrowthStory
