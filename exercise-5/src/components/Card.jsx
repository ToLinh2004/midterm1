function Card({props}){
  const {name,gender,hobbies,image}= props
    return(
        <div className="col-3" >
        <div className="card">
        <img src={image.src} alt={image.alt} style={{height:'300px'}}/>
          <h4>{name}</h4>
          <small>{gender}</small>
          <p>
            {hobbies}
          </p>
          </div>
        </div>
    )
}

export default Card;