import { useContext } from "react"
import { BookContext } from "../BookContext/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Readbooks from "./Readbooks";
import Wishlistbooks from "./Wishlistbooks";

const Books = () => {
  const {read, wishlist} = useContext(BookContext)
  console.log(read);
  console.log(wishlist);

  return (
    <div>
      <h1 className="text-2xl text-center">Books</h1>
      <div className="w-11/12 mx-auto">
      <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      {
        read.map(book => <Readbooks key={book.bookId} props={book} />)
      }
    </TabPanel>
    <TabPanel>
      {
        wishlist.map(book => <Wishlistbooks key={book.bookId} props={book} />)
      }
    </TabPanel>
      </Tabs>
      </div>
      
    </div>
  )
}

export default Books
