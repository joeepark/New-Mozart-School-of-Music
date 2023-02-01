import React, { useEffect, useContext } from 'react';
import DataContext from "/client/context/DataContext";

function Calendar() {
  const { schedules } = useContext(DataContext);
  // console.log(schedules);

  useEffect(() => {
    const daysTag = document.querySelector(".days");
    const currentDate = document.querySelector(".current-date");
    const prevNextIcon = document.querySelectorAll(".calendar-icons  span");
    const day = document.querySelectorAll('.day');
    let date = new Date();
    let currYear = date.getFullYear();
    let currMonth = date.getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];
    const renderCalendar = () => {
      let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
      let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
      let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
      let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
      let liTag = "";
      for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
      }
      for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
          && currYear === new Date().getFullYear() ? "day active" : "day";
        liTag += `<li class="${isToday}">${i}</li>`;
      }
      for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
      }
      currentDate.innerText = `${months[currMonth]} ${currYear}`;
      daysTag.innerHTML = liTag;
    }
    renderCalendar();

    prevNextIcon.forEach(icon => {
      icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
          date = new Date(currYear, currMonth, new Date().getDate());
          currYear = date.getFullYear();
          currMonth = date.getMonth();
        } else {
          date = new Date();
        }
        renderCalendar();
      });
    });

    let year = currentDate.innerText.split(' ')[1];
    let index;
    months.forEach(month => {
      if (month === currentDate.innerText.split(' ')[0]) index = months.indexOf(month);
    })
    let month = `0${index += 1}`;
    console.log(year, month)

    for (let i = 0; i < day.length; i++) {
      const specificDay = day[i];
      specificDay.addEventListener('click', () => {
        console.log(specificDay.textContent);
      })
    }

    schedules.forEach(schedule => {
      // let sqlDate = schedule.date.slice(0, 10);
      // let today = new Date();
      // let year = today.getFullYear();
      // let month = today.getMonth() + 1;
      // let day = today.getDate();
      // let todayAsString = year + "-" + '0' + month + "-" + day;
      // if (sqlDate === todayAsString) console.log(true);
      console.log(schedule.date.slice(0, 10));
    })
  })

  return (
    <div className="calendar-container">
      <div className="calendar-box">
        <header>
          <p className="current-date"></p>
          <div className="calendar-icons">
            <span id="prev" className="material-symbols-rounded">LEFT</span>
            <span id="next" className="material-symbols-rounded">RIGHT</span>
          </div>
        </header>
        <div className="calendar">
          <ul className="weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul className="days"></ul>
        </div>
      </div>
    </div>
  )
}
export default Calendar