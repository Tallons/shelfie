import React from "react"
import {Link} from "react-router-dom"

function Product ({id, name, price, image, deleteProduct}){

  return(
    <div className="tab">
      <div className="img-container">
      <img src={image} alt={name}/>
      </div>

      <div className="product-description">
        <div>
          <h3>{name}</h3>
          <h3>{price} Coins</h3>
        </div>
        <div className="button-container">
          <button onClick={()=> deleteProduct(id)}>Delete</button>
          <Link to={`/edit/${id}`}>
          <button>Edit</button>
          </Link>
        </div>

      </div>
      
    </div>
  )
}

export default Product