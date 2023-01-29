import create from '/assets/tab.png';
import menu from '/assets/menu.png';
import calendar from '/assets/calendar.png';
import Image from 'next/image'

function Homepage() {
  function handleClick() {
    let popup = document.querySelector(".add-container");
    popup.style.display = "block";
  }

  return (
    <div className="icons flex">
      <div>
        <button onClick={handleClick}>
          <Image src={create} width={200} height={200} alt="add icon" />
        </button>
        <h2>Add Person</h2>
      </div>
      <div>
        <button>
          <Image src={menu} width={200} height={200} alt="add icon" />
        </button>
        <h2>View Table</h2>
      </div>
      <div>
        <button>
          <Image src={calendar} width={200} height={200} alt="add icon" />
        </button>
        <h2>View Calendar</h2>
      </div>
    </div>
  )
}
export default Homepage