import React from 'react'

const ProductCard = ({image, prodName}) => {
    let imageStyle = {
        
        boxShadow: "0px 10px 0px #000000",
        border: "2px solid #000000",
        borderRadius: "9px",
        opacity: 1,
        
    }

    return (
        <div>
            <div className="Image flex justify-center mb-5">
                <img className='cursor-pointer' style={imageStyle} src={image} alt="" />
            </div>
            <h2 className='cursor-pointer ProductName text-center text-[25px] font-medium'>{prodName}</h2>
        </div>
    )
}

export default ProductCard