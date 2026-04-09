import { createBrowserRouter } from 'react-router'
import Root from '../Root/Root'
import Homepage from '../../Components/Homepage/Homepage'
import Books from '../../Components/Books/Books'
import Pages from '../../Components/Pages/Pages'
import Bookinfo from '../../Components/Books/Bookinfo'

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
      },
      {
        path: "bookinfo/:bookId",
        element: <Bookinfo />,
        loader : ({params}) => fetch(`/data/booksData.json`)
      }
    ]
  }
])
export default Router