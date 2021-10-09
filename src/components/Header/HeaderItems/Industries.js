import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/styles'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat'

const useStyles = makeStyles((theme) => ({
  insights: {
    position: 'absolute',
    zIndex: '999',
    width: '100%',
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

function Industries({ boolean }) {
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
      <a href="/industries/ecommerce">E-Commerce</a>
      <a href="/industries/retail">Fashion and Retail</a>
      <a href="/industries/foodTech">Food-Tech</a>
      <a href="/industries/travelTech">Travel Tech</a>
      <a href="/industries/edTech">Ed-Tech</a>
    </animated.div>
  )
}

export default Industries
