import { createContext, useState } from "react"
  import { ToastContainer, toast } from 'react-toastify';

export const BookContext = createContext();
const BookProvider = ({children}) => {
  const notify = () => toast("Wow so easy!");
  const[read, setRead] = useState([]);
  const[wishlist, setWishlist] = useState([]);
      const checkRead = (book)=>{
        const isWishlist = wishlist.find(wishBook => wishBook.bookId === book.bookId);
        if(isWishlist){
          toast.error('You have already added this book to your wishlist');
            return;
        }
          const isRead = read.find(readBook => readBook.bookId === book.bookId);
          if(isRead){
            toast.error('You have already read this book');
            
              return;
          } else {
            toast.success('Book added to read list');
              setRead([...read, book]);
          }
         
      }
      const checkWishlist = (book)=>{
        const isReadlist = read.find(readBook => readBook.bookId === book.bookId);
        if(isReadlist){
          toast.error('You have already read this book, you can not wishlist it');
            return;
        }
          const isRead = read.find(readBook => readBook.bookId === book.bookId);
          if(isRead){
            toast.error('You have already wishlist this book');
              return;
          } else {
            toast.success('Book added to wishlist');
            setWishlist([...wishlist, book]);
          }
         
      }
    const data = {
        read,
        setRead,
        checkRead,
        wishlist,
        setWishlist,
        checkWishlist
    }
  return (
    
      <BookContext.Provider value={data}>
        {children}
      </BookContext.Provider>
  )
}

export default BookProvider
