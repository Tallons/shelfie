import React from 'react';
import{HashRouter, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Routes from "./routes";
import './Shelfie.css';



 function App () { 

  // const [inventory, setInventory] = useState();

  // useEffect(() => {
  //   axios.get("/api/inventory").then(res =>{
  //     setInventory(res.data);
  //   }).catch (err => console.log(err));
  // })



  // setInventory = (value) =>

    return (
      <HashRouter>

      <div className="app">
        <Header />
        <div className="main">
              
        {Routes}
        </div>
      </div>
      </HashRouter>
    );
}

export default App;
