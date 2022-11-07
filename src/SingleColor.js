import React, { useEffect, useState } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
    
    const [alert, setAlert]  = useState(false)
    const bvg = rgb.join(',') //every item of the array will be separated by a coma
    // const hex = rgbToHex(...rgb); //hex is the hashtage form of the color
    //another way to use the hex colors
    const hexValue = `#${hexColor}`

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false) //this function will run after one second
        }, 1000)
        return ()=> clearTimeout(timeout)
    }, [alert]) //once the alert changes, I want to run my useEffect
    return (
    <article  onClick={() =>
        {
            setAlert(true);
            navigator.clipboard.writeText(hexValue)
        }} style={{ background: `rgb(${bvg})` }}>
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>{hexValue}</p>
        {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
