import React from 'react'

const Buttons = ( {marginTop, color, text, borderRadius, bgColor}) => {

    let buttonStyle = {
        backgroundColor: bgColor,
        borderRadius: borderRadius,
        padding: "10px",
        color: color,
        marginTop: "" || marginTop,
        paddingLeft: "2.0rem",
        paddingRight: "2.0rem"
    }

  return (
    <button style={buttonStyle} >{text}</button>
  )
}

export default Buttons