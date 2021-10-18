import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/styles'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat'

const useStyles = makeStyles((theme) => ({
  insights: {
    width: '100%',
    overflow: 'hidden',
    paddingLeft: '4rem',
    backgroundColor: theme.background.green,
    '& a': {
      position: 'relative',
      zIndex: '10000',
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

function Services({ boolean }) {
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
      <a href="/services/integratedBPO">Integrated BPO</a>
      <a href="/services/knowledgeServices">Knowledge Services</a>
      <a href="/services/backOfficeManagement">Back Office Management</a>
      <a href="/services/frontOfficeManagement">Front Office Management</a>
      <a href="/services/bureauServices">Bureau Services</a>
    </animated.div>
  )
}

export default Services
