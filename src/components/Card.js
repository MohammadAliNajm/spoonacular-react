import React from "react";

function Card({item}) {

    return(
        <div style={{ width: "200px", marginRight: "10px" }}>
              <img src={item.image} alt={item.title} style={{ width: "100%" }} />
      <h3>{item.title}</h3>
        </div>
    )
}

export default Card;