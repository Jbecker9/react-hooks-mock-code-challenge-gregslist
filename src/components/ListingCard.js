import React from "react";

function ListingCard({ listing }) {

  function favoriteListing(event){
    console.log(event.target)
    if(event.target.className === "emoji-button favorite active"){
      return event.target.className = "emoji-button favorite"
    } else {
      return event.target.className = "emoji-button favorite active"
    }
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button onClick={favoriteListing} className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
