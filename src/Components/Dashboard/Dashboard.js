import React from "react";
import Product from "../Product/Product"

function Dashboard ({inventory, editProduct, deleteProduct, toggleEdit}){
  return (
    <div className="product-lineup">

      {
        inventory.map((product,index) => {
          return <Product
                key = {product.id}
                index={index}
                id = {product.id}
                name = {product.name}
                price = {product.price}
                image = {product.img}
                editProduct={editProduct}
                deleteProduct={deleteProduct}
                toggleEdit={toggleEdit}
                />
        })
      }

    </div>
  )
}

export default Dashboard;