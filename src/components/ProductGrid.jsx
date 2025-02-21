function ProductGrid({ products }) {
    return (
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.product_id}>
              <h3>{product.productName}</h3>
              <p>{product.productDescription}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    )
  }
  
  export default ProductGrid
  