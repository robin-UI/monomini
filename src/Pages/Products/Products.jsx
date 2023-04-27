import React from 'react'
import prod1 from "../../assets/1.jpg"

const Products = () => {
  return (
    <div>
    <div className="Main bg-[#F0FBFF] pt-36 px-[9rem]">
      <div className="TitleArea mb-10">
        <h1 className='font-bold text-6xl text-center mb-8'>Quality Building Materials, Plumbing, Hardware, And Electrical Supplies</h1>
        <p className='font-normal text-[23px] text-center px-[11.25rem]'>Browse Our Wide Selection Of Products At Wholesale Pricesto Find Everything You Need For Your Construction Projects.</p>
      </div>
      <div className="ProductSection  grid grid-cols-4 grid-rows-3 gap-y-16">
        <ProductCard prodName={"wire nails"} image={prod1} />
        <ProductCard prodName={"wire nails"} image={prod1} />
        <ProductCard prodName={"wire nails"} image={prod1} />
        <ProductCard prodName={"wire nails"} image={prod1} />
        <ProductCard prodName={"wire nails"} image={prod1} />
        <ProductCard prodName={"wire nails"} image={prod1} />
        <ProductCard prodName={"wire nails"} image={prod1} />
        <ProductCard prodName={"wire nails"} image={prod1} />

      </div>
    </div>
    <Form bgColor={'#BCEDFF'}/>
  </div>
  )
}

export default Products