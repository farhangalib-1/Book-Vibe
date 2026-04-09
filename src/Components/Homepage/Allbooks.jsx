import { Suspense } from "react"
import Book from "./Book"

const Allbooks = () => {
    const booksData = fetch("/data/booksData.json").then(res => res.json())
    
    
    
  return (
    <div className="w-11/12 mx-auto mt-7 ">
    <h1 className="text-4xl font-bold mb-5 text-center">All Books</h1>
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
        <Book booksData={booksData} />
        </Suspense>
    </div>
    </div>
  )
}

export default Allbooks
