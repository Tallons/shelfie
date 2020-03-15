import React from "react"

function Product ({id, index, name, price, image, editProduct, deleteProduct, toggleEdit}){

  return(
    <div className="tab">
      <img src={image} alt={name}/>

      <div className="product-description">
        <div>
          <h3>{name}</h3>
          <h3>{price}</h3>
        </div>
        <div className="button-container">
          <button onClick={()=> deleteProduct(id)}>Delete</button> {/* this should reset the input step 1:5 */}
          <button onClick={()=>  toggleEdit(index)}>Edit</button>
        </div>
      </div>
      
    </div>
  )
}

export default Product