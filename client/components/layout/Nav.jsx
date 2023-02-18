import Image from 'next/image';
import Link from 'next/link';
import dropdown from '/client/assets/down-arrow.png';
import logo1 from '/client/assets/logo-1.png';
import logo2 from '/client/assets/logo-2.png';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Image src={logo1} alt="logo" height={60} />
        <Image src={logo2} alt="logo" height={45} />
      </div>
      <input type="checkbox" id="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-checkbox">
        <i className="fas fa-bars"></i>
      </label>
      <div className="nav-links">
        <ul>
          <li>
            <Link href="/overview" className="active">
              Overview
            </Link>
          </li>
          <li className="nav-dropdown">
            Add New <Image src={dropdown} alt="dropdown icon" height={20} />
            <ul className="nav-dropdown-menu">
              <li>
                <Link href="" className="dropdown-link">
                  Student
                </Link>
              </li>
              <li>
                <Link href="" className="dropdown-link">
                  Teacher
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-dropdown">
            Calendar <Image src={dropdown} alt="dropdown icon" height={20} />
            <ul className="nav-dropdown-menu">
              <li>
                <Link href="" className="nav-dropdown-link">
                  Teacher
                </Link>
              </li>
              <li>
                <Link href="" className="nav-dropdown-link">
                  Classroom
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="">Students</Link>
          </li>
          <li>
            <Link href="">Teachers</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
