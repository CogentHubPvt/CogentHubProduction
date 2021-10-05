import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/styles'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat'

const useStyles = makeStyles((theme) => ({
  insights: {
    position: 'relative',
    overflow: 'hidden',
    paddingLeft: '4rem',
    backgroundColor: theme.background.green,
    '& a': {
      float: 'left',
      color: 'white',
      textAlign: 'center',
      padding: '14px 16px',
      margin: '0.5rem 1rem 0.5rem 1rem',
      textDecoration: 'none',
      fontSize: '17px',
    },
    '& p': {
      float: 'left',
      color: 'white',
      margin: '0.5rem 0 0 0',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
      fontSize: '15px',
      fontWeight: 'bold',
    },
  },
}))

function Test({ boolean }) {
  const classes = useStyles()
  const down = useSpring({
    to: { height: 70 },
    from: { height: 0 },
    delay: 270,
  })
  const up = useSpring({
    to: { height: 0 },
    from: { height: 70 },
    delay: 270,
  })
  return (
    <animated.div style={boolean ? down : up} className={classes.insights}>
      <p>
        <TrendingFlatIcon />
      </p>
      <a href="/blogs">Blogs</a>
      <a href="#">Global Trend Studies</a>
      <a href="#">Case Studies</a>
      <a href="#">Podcasts in Spotify</a>
    </animated.div>
  )
}

export default Test
