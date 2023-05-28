import { BsFacebook, BsLinkedin, BsSearch, BsTwitter } from 'react-icons/bs';
import SearchModal from '../Modals/SearchModal';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-sky-50">


        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Services</Link></li>
              <li><Link to='/'>Grooming</Link></li>
            </ul>
          </div>
          <Link to='/' className="mx-5 cursor-pointer normal-case text-xl">Pet Mates</Link>
        </div>



      <div className="avatar mx-2">
      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="https://i.ibb.co/8Ymqmgw/jhankar-vai.jpg" />
      </div>
    </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/'>Services</Link></li>
      <li><Link to='/'>Grooming</Link></li>
    </ul>
  </div>

  <div className="navbar-end flex">
  <label htmlFor="searchModal" className='cursor-pointer mx-2'>
        <BsSearch />
    </label>

    <a className='cursor-pointer mx-2'>
        <BsFacebook />
    </a>

    <a className='cursor-pointer mx-2'>
        <BsTwitter />
    </a>

    <a className='cursor-pointer mx-2'>
        <BsLinkedin />
    </a>

    
  </div>

    <SearchModal />
</div>
        </div>
    );
};

export default Navbar;