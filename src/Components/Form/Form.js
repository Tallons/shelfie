import React from "react";
import axios from "axios";
import{Link} from "react-router-dom";
 
class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: "",
      price: 0,
      img: "",
      id: null,
      isEditing: false
    }

  }
  componentDidMount(){
    console.log(this.props)
    const {id} = this.props.match.params
    if(this.props.match.params.id){
      axios.get(`/api/inventory/${id}`).then(({data}) => {
        this.setState({name: data[0].name, price: data[0].price, img: data[0].img, isEditing: true})
      }).catch(err => console.log(err));
    }
  }



  handleChange(event){
    console.log(event.target.value)
    console.log(event.target.placeholder)
    this.setState({  [event.target.placeholder]: event.target.value  })
  }

  addProduct(){
    const {name, price, img} = this.state
    axios.post("/api/inventory/", {name, price, img}).then(res => {
    this.props.getInventory()
    console.log(res.data)
    }).catch(err => console.log(err));
  }

  editProduct(id){
    const {name, price, img} = this.state
    axios.put(`/api/inventory/${id}`, {name, price, img}).then(res => {
      console.log(res.data );
    })
    .catch(err => console.log(err));
  }

  render(){
    const {isEditing} = this.state
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
            
            <button onClick={()=> this.props.history.goBack()} >Cancel</button> {/* this should reset the input step 1:5 */}
            
              {
              isEditing ? 
              <Link to="/">
                <button onClick={()=> { this.editProduct(this.props.match.params.id) }}>Save Changes</button>
                </Link>
              :
              <Link to="/">
                <button onClick={()=> {  this.addProduct() }}>Add to inventory</button>
              </Link>
              }

          </div>
        </div>
      </section>
    )
  }

}

export default Form;