function Nav() {
  const handleClick = (event) => {
    resetActive();
    const select = document.querySelector(`.${event.target.value}`);
    select.classList.toggle('active');
  }

  const resetActive = () => {
    const all = document.querySelectorAll('.active');
    all.forEach(element => element.classList.remove('active'));
  }
  return (
    <>
        <h1 className='header'>New Mozart School of Music</h1>
      <select className='dropdown' onClick={handleClick}>
        <option value='schedules'>Schedules</option>
        <option value='classrooms'>Classrooms</option>
        <option value='students'>Students</option>
        <option value='teachers'>Teachers</option>
      </select>
    </>
  )
}

export default Nav;