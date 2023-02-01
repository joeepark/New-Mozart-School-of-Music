import logo from '/assets/logo_black.png';
import Image from 'next/image';
import Link from 'next/link';

function Nav() {
  const handleClick = (event) => {
    let hamMenu = document.querySelector(".hamburger-container");
    hamMenu.classList.toggle("active");
  }
  return (
    <div className="nav">
      <div className="container nav-container">
        <Link href='/'>
          <Image src={logo} width={100} height={100} alt="logo" />
        </Link>
        <div className="hamburger-container" onClick={handleClick}>
          <div className="menu">
            <span className="line one"></span>
            <span className="line two"></span>
            <span className="line three"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav;