import React, { Suspense } from 'react'
import { Home } from '../pages/Home'
import { Router, Redirect } from '@reach/router'
import { NotRegisteredUser } from '../pages/NotRegisteredUser'
import { useStateValue } from '../Context'

const User = React.lazy(() => import('../pages/User'))
const Detail = React.lazy(() => import('../pages/Detail'))
const Favs = React.lazy(() => import('../pages/Favs'))
const NotFound = React.lazy(() => import('../pages/NotFound'))

export const Routes = () => {
  const [{ isAuth }] = useStateValue();
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/auth' /> }
        {!isAuth && <Redirect from='/favs' to='/auth' /> }
        {!isAuth && <Redirect from='/user' to='/auth' /> }
        {isAuth && <Redirect from='/auth' to='/' /> }
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
    </Suspense>
  )
}

