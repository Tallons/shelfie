import React from "react";
import axios from "axios";
 
class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: "",
      price: 0,
      img: "",
    }

    this.handleChange = this.handleChange.bind(this)
    // this.addProduct = this.addProduct.bind(this)
    
  }

  componentDidUpdate(preProps){
    console.log(preProps, this.props)
    if(this.props.id && preProps.id !== this.props.id){
      console.log(this.props.selected.name)
        this.setState({ name: this.props.selected.name, price: this.props.selected.price , img: this.props.selected.img})
      }
  }

  handleChange(event){
    console.log(event.target.value)
    console.log(event.target.placeholder)
    this.setState({  [event.target.placeholder]: event.target.value  })
  }

  addProduct(){
    const {name, price, img} = this.state
    axios.post("/api/inventory/", {name, price, image:img}).then(res => {
    this.props.getInventory()
    console.log(res.data)
    }).catch(err => console.log(err));
  }

  editProduct(id){
    const {name, price, img} = this.state
    axios.put(`/api/inventory/${id}`, {name, price, img}).then(res => {
      this.setState({ inventory: res.data });
    })
    .catch(err => console.log(err));
  }

  render(){
    const {isEditing} = this.props
    console.log (isEditing)
    return(
      <section className="create-product-side">
        <div className="create-product-box">
          <img src={this.state.img} />
          <p>Image URL: </p>
          <input className="input-create" 
              onChange={event => this.handleChange(event)} placeholder ="img" value={this.state.img}></input>
          <p>Product Name: </p>
          <input className="input-create" 
              onChange={event => this.handleChange(event)} placeholder ="name"  value={this.state.name}></input>
          <p>Price: </p>
          <input className="input-create" 
              onChange={event => this.handleChange(event)} placeholder ="price"  value={this.state.price}></input>
          <div className="button-container">

            <button >Cancel</button> {/* this should reset the input step 1:5 */}
            
              {
              isEditing ? 
                <button onClick={()=> {  this.editProduct(this.props.id) }}>Save Changes</button>
              :
                <button onClick={()=> {  this.addProduct() }}>Add to inventory</button>
              }

          </div>
        </div>
      </section>
    )
  }

}

export default Form;