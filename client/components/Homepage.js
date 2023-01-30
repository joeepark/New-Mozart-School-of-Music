import create from '/assets/tab.png';
import menu from '/assets/menu.png';
import calendar from '/assets/calendar.png';
import Image from 'next/image'
import Link from 'next/link';
import schedule from '/assets/schedule.png';

function Homepage() {
  function handleClick() {
    let popup = document.querySelector(".add-container");
    popup.style.display = "block";
  }

  return (
    <div className="icons flex">
      <div>
        <button onClick={handleClick}>
          <Image src={create} width={150} height={150} alt="add icon" />
        </button>
        <h2>Add Person</h2>
      </div>
      <div>
        <button>
          <Image src={schedule} width={150} height={150} alt="add icon" />
        </button>
        <h2>Add Schedule</h2>
      </div>
      <div>
        <Link href="/table">
          <button>
            <Image src={menu} width={150} height={150} alt="add icon" />
          </button>
        </Link>
        <h2>View Table</h2>
      </div>
      <div>
        <button>
          <Image src={calendar} width={150} height={150} alt="add icon" />
        </button>
        <h2>View Calendar</h2>
      </div>
    </div>
  )
}
export default Homepage