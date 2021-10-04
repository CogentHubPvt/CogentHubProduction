import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  // const [isLoading,setLoading] = useState(true)
  useEffect(async () => {
    if (
      localStorage.getItem('token') === undefined ||
      localStorage.getItem('token') === null
    ) {
      setIsAuthenticated(false)
    } else {
      axios.post('')
    }
  }, [isAuthenticated])
  // useEffect(() => {
  //   setIsAuthenticated(true);
  //   console.log("Working")
  // })

  if (isAuthenticated === null) {
    return <></>
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PrivateRoute
