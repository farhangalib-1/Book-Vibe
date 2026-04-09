import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <div>
       <div className="navbar w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className=" text-xl font-black">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-7">
     <li><NavLink className={({isActive})=>isActive ? 'border border-[#23BE0A] text-[#23BE0A] font-bold' : 'border-0'} to="/">Home</NavLink></li>
      <li><NavLink className={({isActive})=>isActive ? "border border-[#23BE0A] text-[#23BE0A] font-bold" : "border-0"} to="/books">Listed Books</NavLink></li>
      <li><NavLink className={({isActive})=>isActive ? "border border-[#23BE0A] text-[#23BE0A] font-bold" : "border-0"} to="/pages">Pages to Read</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="btn rounded-lg bg-[#23BE0A] text-white">Sign In</a>
    <a className="btn rounded-lg bg-[#59C6D2] text-white">Sign Up</a>
  </div>
</div>
    </div>
  )
}

export default Navbar
