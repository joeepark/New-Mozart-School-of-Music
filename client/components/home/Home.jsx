import { useContext, useState } from 'react';
import DataContext from '/client/context/DataContext';
import editBtn from '/client/assets/edit.png';
import deleteBtn from '/client/assets/delete.png';
import Image from 'next/image';

function Home() {
  const { home, handleOverviewSubmit } = useContext(DataContext);
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    handleOverviewSubmit(content);
  };

  return (
    <section className="home">
      <div className="announcements">
        <h3>Annoucements</h3>
      </div>
      <div className="rates">
        <h3>Tuition Rates</h3>
      </div>
    </section>
  );
}

export default Home;
