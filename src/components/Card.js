import React from "react";

function Card({item}) {

    return(
        <div className="card" >
              <img src={item.image} alt={item.title} style={{ width: "100%" }} />
      <h3>{item.title}</h3>
        </div>
    )
}

export default Card;