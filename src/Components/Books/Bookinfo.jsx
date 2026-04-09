import { useContext } from "react";
import { useLoaderData, useParams } from "react-router"
  import { ToastContainer, toast } from 'react-toastify';
import { BookContext } from "../BookContext/BookProvider";
const Bookinfo = () => {
    const bookInfo = useContext(BookContext)
    console.log(bookInfo);
    const {bookId} = useParams();
    const books = useLoaderData();
    const selectedBook = books.find(book => book.bookId == bookId);
    const {checkRead } = bookInfo;
    const {checkWishlist} = bookInfo;
    
  return (
    <div className="w-11/12  mx-auto mt-6 grid grid-cols-2 items-center">
     <div className="image w-full p-4  flex justify-center ">
        <img className=" h-[70vh]" src={selectedBook.image} alt="" />
     </div>
     <div className="text-Contents pr-6 space-y-3">
        <div className="top border-b-2">
            <h1 className="text-5xl font-bold mb-4">{selectedBook.bookName}</h1>
            <h2 className="text-2xl mb-4">{selectedBook.author}</h2>
        </div>
        <h1>{selectedBook.category}</h1>
        <div className="middle border-t-2 border-b-2">
            <h1 className="text-lg mb-4"><span className="font-bold">Review: </span>{selectedBook.review}</h1>
                {
                    selectedBook.tags.map((tag, idx)=> 
                    <div key={idx} className="mb-4 badge rounded-full bg-[#23be0a0d] font-semibold text-[#23BE0A]">#{tag}</div>)
                }
           
        </div>
        <div className="bottom">
            <h1 className="text-[#131313b3]">Numgber of pages: <span className="font-bold text-black">{selectedBook.totalPages}</span></h1>
            <h1 className="text-[#131313b3]">Publisher: <span className="font-bold text-black">{selectedBook.publisher}</span></h1>
            <h1 className="text-[#131313b3]">Year of Publishing: <span className="font-bold text-black">{selectedBook.yearOfPublishing}</span></h1>
            <h1 className="text-[#131313b3]">Rating: <span className="font-bold text-black">{selectedBook.rating}</span></h1>
        </div>
        <div className="buttons">
            <button onClick={()=>{checkRead(selectedBook)}} className="btn mr-4 bg-transparent">Mark as Read</button>
            <button onClick={()=>{checkWishlist(selectedBook)}} className="btn bg-[#50B1C9] text-white">Add to Wishlist</button>
        </div>
     </div>
     <ToastContainer />
    </div>
  )
}

export default Bookinfo
