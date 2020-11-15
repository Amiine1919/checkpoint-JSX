import React from "react";
import './style.css';
import myImageInSrc from "./imageInSrc.jpg"

function App() {
  return (    
    <div>
      <div className="myStyle" >
        <h1 className="title" className="red">Your name here</h1>
        <br />
        <img src={myImageInSrc} alt="srcImage" />
        <br />
        <img src="imageInPublic.jpg" alt="publicImage" />
      </div>      
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>         
    </div>     
  );
}
export default App;
