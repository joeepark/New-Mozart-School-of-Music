import Image from 'next/image';
import Link from 'next/link';
import dropdown from '/client/assets/down-arrow.png';
import logo1 from '/client/assets/logo-1.png';
import logo2 from '/client/assets/logo-2.png';
import { useState } from 'react';

function Nav() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  function handleClick(e) {
    setActiveLink(e.target.pathname);
    setOpen(false);
  }

  return (
    <nav className="nav">
      <div className="nav-logo">
        <Image src={logo1} alt="logo" height={60} />
        <Image src={logo2} alt="logo" height={45} />
      </div>
      <input type="checkbox" id="nav-toggle" checked={open} onChange={() => setOpen(!open)} />
      <label htmlFor="nav-toggle" className="nav-checkbox">
        <i className="fas fa-bars"></i>
      </label>
      <div className="nav-links">
        <ul>
          <li>
            <Link href="/" onClick={handleClick} className={activeLink === '/' ? 'active' : ''}>
              Overview
            </Link>
          </li>
          <li className="nav-dropdown">
            Add New <Image src={dropdown} alt="dropdown icon" height={20} />
            <ul className="nav-dropdown-menu">
              <li>
                <Link
                  href="/add-new-student"
                  onClick={handleClick}
                  className={activeLink === '/add-new-student' ? 'active' : ''}
                >
                  Student
                </Link>
              </li>
              <li>
                <Link
                  href="/add-new-teacher"
                  className={activeLink === '/add-new-teacher' ? 'active' : ''}
                  onClick={handleClick}
                >
                  Teacher
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-dropdown">
            Calendar <Image src={dropdown} alt="dropdown icon" height={20} />
            <ul className="nav-dropdown-menu">
              <li>
                <Link
                  href="/calendar-teacher"
                  className={activeLink === '/calendar-teacher' ? 'active' : ''}
                  onClick={handleClick}
                >
                  Teacher
                </Link>
              </li>
              <li>
                <Link
                  href="/calendar-classroom"
                  className={activeLink === '/calendar-classroom' ? 'active' : ''}
                  onClick={handleClick}
                >
                  Classroom
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/students"
              className={activeLink === '/students' ? 'active' : ''}
              onClick={handleClick}
            >
              Students
            </Link>
          </li>
          <li>
            <Link
              href="/teachers"
              className={activeLink === '/teachers' ? 'active' : ''}
              onClick={handleClick}
            >
              Teachers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
