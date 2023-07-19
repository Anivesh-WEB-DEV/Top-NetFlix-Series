import React from "react";
import Images from "./Img";
import Heading from "./Heading";
function Card(props){
 return (
   <>
<div className="cards">
 <div className="card">
   <Images imgsrc={props.imgsrc}/>
   <div className="card_info">
     <span className="card_category">{props.title} </span>
     <Heading sname={props.sname}/>
     <a href={props.link} target="nn">
     <center><button>Watch Now</button></center>



     </a>

   </div>
 </div>

 </div>
 </>
 );
}
export default Card;