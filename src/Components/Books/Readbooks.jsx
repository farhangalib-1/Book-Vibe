import { FaRegStar } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { RxPeople, } from "react-icons/rx";
import { Link } from "react-router";
const Readbooks = ({props}) => {
  return (
    <div>
        <div className="card card-side bg-base-100 shadow-sm mb-6 ">
  <figure className="p-6 m-6 rounded-2xl bg-gray-100">
    <img className="h-[30vh] w-[10vw] rounded-2xl"
      src={props.image}
      alt="Movie" />
  </figure>
  <div className=" w-full mr-10">
    <h2 className="mt-8 text-4xl font-bold">{props.bookName}</h2>
    <p className="text-xl">by: {props.author}</p>
    <div className="middle flex items-center-safe gap-4 mt-3.5 w-fit">
    <div className="tags flex items-center-safe gap-2">
    <span className="font-semibold">Tags </span>
      {props.tags?.map((tag, index) => (
        <span key={index} className="badge mr-2 text-[#23BE0A] bg-[#23be0a0d] font-semibold">
          #{tag}
        </span>
      ))}    
    </div>
    <div className="location flex items-center-safe gap-4">
        <IoLocationOutline />
        <p className="text-gray-600"> <span className="font-semibold text-gray-500">Year of publishing:</span> {props.yearOfPublishing}</p>
    </div>
    </div>
    <div className="last flex items-center-safe gap-4 mt-3.5 border-b-2 border-gray-300 pb-4">
    <RxPeople />
    <p className="text-gray-600"> <span className="font-semibold text-gray-500"> Publisher:</span> {props.publisher}</p>
    <HiOutlineNewspaper />
    <p className="text-gray-600"> <span className="font-semibold text-gray-500">Pages:</span> {props.totalPages}</p>
    </div>
    <div className="badges flex items-center-safe gap-4 mt-3.5">
    <div className="badge text-sm px-6 py-4 flex items-center rounded-full bg-[#328eff26] text-[#328EFF]">{props.category}</div>
    <div className="badge text-sm px-6 py-4 flex items-center rounded-full bg-[#ffac3326] text-[#FFAC33] ">{props.rating}</div>
    <Link to={`bookinfo/${props.bookId}`} className=" rounded-full btn bg-[#23BE0A] text-white">View Details</Link>
    </div>
  </div>
        </div>
    </div>
  )
}

export default Readbooks
