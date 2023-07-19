import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import './App.css';
import './index.css'

function App(){
  return(
    <>
    <img className='img1' src='https://images.indianexpress.com/2022/03/Netflix-2.jpg?w=640'  alt="" />
    <h1 className='heading_style'>List of Top 12 Netflix series</h1>
  
     
      {Sdata.map( (val)=>{
  
        return (
      <Card 
      key = {val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
  
      />
  
    )
      })}
  
  
  
      </>




  );

}
export default App;
