import React from 'react'
import { IndexRoute, Route } from 'react-router'
import { createRoutesFromReactChildren } from 'react-router/lib//RouteUtils'

const CustomBlogRoute = () => (
  <div>
    &lt;CrudRoute&gt; elements are for configuration only and should not be
    rendered
  </div>
)

CustomBlogRoute.createRouteFromReactElement = (element, parentRoute) => {
  const { path, list, edit, create, remove } = element.props
  // dynamically add crud routes
  const crudRoute = createRoutesFromReactChildren(
    <Route path={path}>
      <IndexRoute component={list} />
      <Route path="create" component={create} />
      <Route path=":id" component={edit} />
      <Route path=":id/remove" component={remove} />
    </Route>,
    parentRoute,
  )[0]
  // higher-order component to pass path as resource to components
  crudRoute.component = ({ children }) => (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { path }),
      )}
    </div>
  )
  return CustomBlogRoute
}

export default CustomBlogRoute
