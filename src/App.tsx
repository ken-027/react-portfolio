import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './styles/sass/main.scss'
import 'animate.css/animate.min.css'
import Loading from './pages/Loading'
import './styles/sass/partials/_config.scss'

const Landing = lazy(() => import('./pages/Landing'))
const NotFound = lazy(() => import('./pages/error/NotFound'))

const App = (): React.ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route
            path='*'
            element={<NotFound />}
          />
          <Route
            path='/'
            element={<Landing />}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
