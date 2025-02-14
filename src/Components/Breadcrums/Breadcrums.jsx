import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className = "breadcrum">
    HOME
    <img src = {arrow_icon} alt ="image"/>
    SHOP 
    <img src = {arrow_icon} alt = "image"/>\
    {product.category}
    <img src = {arrow_icon} alt = "image"/>
    {product.name}
    </div>
  )
}
export default Breadcrums