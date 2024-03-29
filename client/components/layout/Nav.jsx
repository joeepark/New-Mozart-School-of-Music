import Image from 'next/image';
import Link from 'next/link';
import dropdown from '/client/assets/down-arrow.png';
import logo1 from '/client/assets/logo-1.png';
import logo2 from '/client/assets/logo-2.png';
import { useState } from 'react';

function Nav() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  function handleClick(event) {
    setActiveLink(event.target.pathname);
    setOpen(false);
  }

  return (
    <nav className="nav">
      <Link href="/">
        <div className="nav__logo">
          <Image src={logo1} alt="logo" height={60} />
          <Image src={logo2} alt="logo" height={45} />
        </div>
      </Link>
      <input type="checkbox" id="nav__toggle" checked={open} onChange={() => setOpen(!open)} />
      <label htmlFor="nav__toggle" className="nav__checkbox">
        <i className="fas fa-bars" />
      </label>
      <div className="nav__links">
        <ul>
          <li>
            <Link href="/" onClick={handleClick} className={activeLink === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li className="nav__dropdown">
            Registration <Image src={dropdown} alt="dropdown icon" height={20} />
            <ul className="nav__list">
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
          <li className="nav__dropdown">
            Calendar <Image src={dropdown} alt="dropdown icon" height={20} />
            <ul className="nav__list">
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
