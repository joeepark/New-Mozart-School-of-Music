import logo from '/assets/logo.png';
import Image from 'next/image';

function Nav() {
  const handleClick = (event) => {
    let hamMenu = document.querySelector(".hamburger-container");
    hamMenu.classList.toggle("active");
  }


  const resetActive = () => {
    const all = document.querySelectorAll('.active');
    all.forEach(element => element.classList.remove('active'));
  }

  return (
    <div className="nav">
      <div className="container nav-container">
        <Image src={logo} width={100} height={100} alt="logo" />
        <div class="hamburger-container" onClick={handleClick}>
          <div class="menu">
            <span class="line one"></span>
            <span class="line two"></span>
            <span class="line three"></span>
          </div>
        </div>
        {/* <select className='dropdown' onClick={handleClick}>
          <option value='schedules'>Schedules</option>
          <option value='classrooms'>Classrooms</option>
          <option value='students'>Students</option>
          <option value='teachers'>Teachers</option>
        </select> */}
      </div>
    </div>
  )
}

export default Nav;