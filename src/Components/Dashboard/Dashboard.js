import React from "react";
import Product from "../Product/Product"
import axios from 'axios';

class Dashboard extends React.Component{
  constructor(){
    super()
    this.state ={
      inventory: []
    }
    this.deleteProduct = this.deleteProduct.bind(this)
  }

  componentDidMount(){
    console.log("hit")
      axios.get("/api/inventory").then(res => {
      this.setState({inventory: res.data });
     })
     .catch(err => console.log(err));
  }
  componentDidUpdate(preProps, preState){
    console.log(preState.inventory.length, this.state.inventory.length)
    if(preState.inventory && preState.inventory.length !== this.state.inventory.length){
      console.log(this.props.name)
       this.componentDidMount();
      }
  }

    deleteProduct(id){
    axios.delete(`/api/inventory/${id}`).then(res =>{
      this.setState({ inventory: res.data });
    })
    .catch(err => console.log(err));
  }

  render(){
    const {inventory} = this.state    
    return (
      <div className="product-lineup">

        {
          inventory.map((product) => {
            return <Product
                  key = {product.id}
                  id = {product.id}
                  name = {product.name}
                  price = {product.price}
                  image = {product.img}
                  deleteProduct={this.deleteProduct}
                  />
          })
        }

      </div>
    )
  }
}

export default Dashboard;