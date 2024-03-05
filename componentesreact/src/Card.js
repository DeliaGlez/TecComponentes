import React, { useState } from 'react';
import PopUp from './PopUp';
import './PopUp.css';

function Card({ url, title, description, txtBtn, details }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <>
      <div className="Card">
        <img src={url} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={openPopUp}>{txtBtn}</button>
      </div>
      <PopUp
        url= {url}
        isOpen={isPopUpOpen}
        onClose={closePopUp}
        title={title}
        description={description}
        details= {details}
      />
    </>
  );
}

export default Card;
