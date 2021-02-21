import React from 'react';
import Select from 'react-select';
import './Dropdown.css';


const Dropdown =()=>{
 const data =[
  {
     value: 1,
     label:"Hatchback"
  },
  {
    value: 2,
    label:"Sedan"
  },
  {
    value :3,
    label:"SUV"
  },
  {
    value:4,
   label:"Convertible"
  },
  {
    value:5,
    label:"Station Wagon"
  },
  {
    value:6,
    label:"Estate"
  },
 ];
  return(
    <>
    <Select
      options={data}
    />
    </>
  )
}
export default Dropdown;