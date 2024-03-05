function PopUp({ isOpen, onClose, title, description, details, url }) {
    if (!isOpen) return null;
  
    return (
      <div className="PopUpOverlay" onClick={onClose}>
        <div className="PopUpContent" onClick={(e) => e.stopPropagation()}>
          <div className="CloseButton" onClick={onClose}>
            <span>&times;</span>
          </div>
          <img src={url} alt={title} />
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{details}</p>
        </div>
      </div>
    );
  }
  
  export default PopUp;
  