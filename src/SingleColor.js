import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

//rgb and weight come from {...color}
const SingleColor = ({index, rgb, weight, hexColor}) => {
  const [isAlert, setIsAlert] = useState(false)
  const bcg = rgb.join(',') //join the rgb array into a string 
  const hex = rgbToHex(...rgb) //passing the rgb array as individual value 

  
    useEffect(() => {
      const int = setTimeout(setIsAlert(false), 4000)
    return () => {
      clearTimeout(int)
    }}, [isAlert])
    
    

  //this is how\w we set style 
  return <article 
  className={`color ${index > 10 && 'color-light' }`} 
  style = {{backgroundColor :`rgb(${bcg})`}}
  onClick = {() => {
    setIsAlert(true)
    navigator.clipboard.writeText(hex)

  }}
  >
    <p className=  'percent-value'> 
      {weight}
    </p>
    <p className=  'color-value'> 
      {hex}
    </p>

    {isAlert && <p className='alert'> Copy to Clipboard</p>}
  </article>
}

export default SingleColor
