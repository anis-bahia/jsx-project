import './App.css';
import nature  from "./subfolder.img/nature.jpg";
import Dauphin from "./subfolder.img/Dauphin.mp4";
import { Component } from 'react';
import "./App.css";



class App extends Component {
  render(){
    return(
    //style with jsx
      <div style={{border:"solid 1px black", maxWidth:"3100vw"}}>
         
      <h1 className="titleRed"> ANIS BAHIA </h1>
      <img className="img" src={nature} alt="myImageFromNature"/>
      <div>
        <img className="img" src="galery/landscape.jpg" alt="nature landscape" />
      </div>
      <div>
      <video className="img" style={{width:"500px", height:"240px"}} controls>

      <source src={Dauphin} type="video/mp4" />

      </video>
      
      </div>
      </div>
      
      
     
    );


    
      
  }
}

export default App;
