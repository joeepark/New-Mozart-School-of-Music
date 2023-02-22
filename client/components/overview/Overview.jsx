import { useContext, useState } from 'react';
import DataContext from '/client/context/DataContext';
import editBtn from '/client/assets/edit.png';
import deleteBtn from '/client/assets/delete.png';
import Image from 'next/image';

function Overview() {
  const { overview, handleOverviewSubmit } = useContext(DataContext);
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    handleOverviewSubmit(content);
  };

  return (
    <section>
      {overview &&
        overview.map((overview) => {
          return (
            <div className="overview" key={overview.id}>
              <div className="announcements-container">
                <h3>Announcements</h3>
                <form method="post" action="/api/classrooms" onSubmit={handleSubmit}>
                  {overview.announcements.split('\n').map((line, index) => (
                    <input key={index} type="text" value={line}/>
                  ))}
                  <button type="submit">
                    <Image src={editBtn} alt="edit button" height={20} />
                  </button>
                  <button>
                    <Image src={deleteBtn} alt="edit button" height={20} />
                  </button>
                </form>
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default Overview;

/* 
              <div
                className="upcoming-events-container"
                // contentEditable={isEditable}
                // onClick={handleContentClick}
                // onBlur={handleContentBlur}
                onInput={handleContentChange}
              >
                <h3>Upcoming</h3>
                {overview.upcoming.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div
                className="tuition-rates container"
                // contentEditable={isEditable}
                // onClick={handleContentClick}
                // onBlur={handleContentBlur}
                onInput={handleContentChange}
              >
                <h3>Tuition Rates</h3>
                {overview.tuition_rates.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <div
                className="holidays-container"
                // contentEditable={isEditable}
                // onClick={handleContentClick}
                // onBlur={handleContentBlur}
                onInput={handleContentChange}
              >
                <h3>Holidays</h3>
                {overview.holidays.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div> */
