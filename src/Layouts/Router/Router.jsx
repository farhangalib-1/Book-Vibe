import { createBrowserRouter } from 'react-router'
import Root from '../Root/Root'
import Homepage from '../../Components/Homepage/Homepage'
import Books from '../../Components/Books/Books'
import Pages from '../../Components/Pages/Pages'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "",
        element: <Homepage />
      },
      {
        path: "books",
        element: <Books />
      },
      {
        path: "pages",
        element: <Pages />
      }
    ]
  }
])
export default Router