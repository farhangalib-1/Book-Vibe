import { useContext } from "react"
import { BookContext } from "../BookContext/BookProvider";


const Books = () => {
  const {read} = useContext(BookContext)
  console.log(read);
  
  return (
    <div>
      <h1 className="text-2xl text-center">Books</h1>
    </div>
  )
}

export default Books
