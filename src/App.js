import React from 'react';
import{HashRouter, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Routes from "./routes";
import './Shelfie.css';



 function App () { 

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
