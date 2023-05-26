import { BsFacebook, BsLinkedin, BsSearch, BsTwitter } from 'react-icons/bs';
import SearchModal from '../Modals/SearchModal';



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
              <li><a>Item 1</a></li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="mx-5 cursor-pointer normal-case text-xl">Pet Mates</a>
        </div>



      <div className="avatar mx-2">
      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src="https://i.ibb.co/8Ymqmgw/jhankar-vai.jpg" />
      </div>
    </div>


  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
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