import React from "react"

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.product_id}>
          {product.productName}<br></br>
          {product.productDescription}<br></br>
          {product.price}<br></br>
          {product.color}<br></br>
          {product.material}<br></br>
          {product.size}<br></br>
          <hr></hr>
        </div>
      ))}
    </div>
  )
}

export default ProductList
