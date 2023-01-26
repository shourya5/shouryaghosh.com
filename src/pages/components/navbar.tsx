import Link from "next/link";

export default function Navbar () {
    return (
      
            <div className="navbar bg-primary text-primary-content   sticky top-0 z-50 ">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact bg-primary  dropdown-content mt-3 p-2 shadow rounded-box w-52">
                  <li><Link className="btn btn-ghost normal-case text-xl" href = "/">Home</Link></li>
                  <li tabIndex={0}>
                    <Link className="btn btn-ghost normal-case text-xl" href='/experience'>
                      Experience
                    </Link>
                  </li>
                  <li><Link className="btn btn-ghost normal-case text-xl" href= "/portfolio">Portfolio</Link></li>
                  <li tabIndex={0}>
                    <Link className="btn btn-ghost normal-case text-xl" href= "/contact">
                      Contact
                    </Link>
                  </li>
                  <li tabIndex={0}>
                    <Link className="btn btn-ghost normal-case text-xl" href = "/about">
                      About        </Link>
                  </li>
                  </ul>
                </div>
                <Link href = '/' className="btn btn-ghost normal-case text-xl">@shourya5</Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li><Link className="btn btn-ghost normal-case text-xl" href = "/">Home</Link></li>
                  <li tabIndex={0}>
                    <Link className="btn btn-ghost normal-case text-xl" href = '/experience'>
                      Experience
                    </Link>
                  </li>
                  <li><Link className="btn btn-ghost normal-case text-xl" href = "/portfolio">Portfolio</Link></li>
                  <li tabIndex={0}>
                    <Link className="btn btn-ghost normal-case text-xl" href ="/contact">
                      Contact
                    </Link>
                  </li>
                  <li tabIndex={0}>
                    <Link className="btn btn-ghost normal-case text-xl" href = '/about'>
                      About    </Link>
                  </li>
                  
                </ul>
              </div>
              <div className="navbar-end">
                
              </div>
            </div>
    )
}