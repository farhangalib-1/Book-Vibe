import { use } from "react"
import { FaRegStar } from "react-icons/fa";

const Book = ({booksData}) => {
    const booksRes = use(booksData)
    console.log(booksRes);
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-fit mx-auto">
      {
        booksRes.map((book, idx) => 
        <div key={idx} className="card bg-base-100 w-96 shadow-sm rounded-2xl">
  <figure className="bg-gray-100 m-5 rounded-2xl">
    <img className="p-10 h-100"
      src={book.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="flex gap-2 mb-3">
    {
        book.tags.map((tag, idx) => <div key={idx} className="badge rounded-full bg-[#23be0a0d] font-semibold text-[#23BE0A]">{tag}</div>)
    }
    </div>
    <h2 className="card-title text-2xl font-bold">
      {book.bookName}
    </h2>
    <p className="text-lg">by: {book.author}</p>
    <div className="card-actions justify-between items-center mt-5 border-t border-dashed pt-5">
      <div className="badge text-lg font-semibold">{book.category}</div>
      <div className="badge text-lg font-semibold">{book.rating} <FaRegStar /></div>
    </div>
  </div>
    </div>)
      }
    </div>
  )
}

export default Book
