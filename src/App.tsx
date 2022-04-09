import Layout from 'components/Layout'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'theme/theme'
import GlobalStyles from 'theme/global'

import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import Home from 'pages/Home'
import Result from 'pages/Result'

const App = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/result',
          element: <Result />
        },
        { path: '*', element: <h1>404</h1> }
      ]
    }
  ]

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  const element = useRoutes(routes)
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  )
}

export default App
