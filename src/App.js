import React from 'react';
import{HashRouter, Link} from "react-router-dom";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      inventory: [],
      selected: null,
      editId: "",
      isEditing: false
    }
    this.getInventory = this.getInventory.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }
//  App () { 

  // const [inventory, setInventory] = useState();

  // useEffect(() => {
  //   axios.get("/api/inventory").then(res =>{
  //     setInventory(res.data);
  //   }).catch (err => console.log(err));
  // })
  componentDidMount(){ 
    this.getInventory()
  }

   getInventory () {
     axios.get("/api/inventory").then(res => {
     this.setState({inventory: res.data });
    })
    .catch(err => console.log(err));
  }

  toggleEdit(index){
    this.setState({
      isEditing: true, selected: this.state.inventory[index]
    
    })

  }


  deleteProduct(id){
    axios.delete(`/api/inventory/${id}`).then(res =>{
      this.setState({ inventory: res.data });
    })
    .catch(err => console.log(err));
  }

  // setInventory = (value) =>

  render(){
    return (
      <HashRouter>

      <div className="App">
        <Header />
        <div className="main">
        <Dashboard 
              inventory={this.state.inventory}
              editProduct={this.editProduct}
              deleteProduct={this.deleteProduct}
              toggleEdit={this.toggleEdit}
              
                />
        <Form getInventory={this.getInventory}
              isEditing={this.state.isEditing}
              selected={this.state.selected}
              id={this.state.selected && this.state.selected.id}
              
              />
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
