function Card ({ url,title,description,txtBtn }) {
    return (
      <>
        <div className="Card">
            <img src={url}  />
            <h2>{title}</h2>
            <p>{description}</p>
            <button>{txtBtn}</button>
        </div>
      </>
    );
  }
  
  
  export default Card;