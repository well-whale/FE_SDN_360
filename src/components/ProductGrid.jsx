function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.product_id}
            className="rounded-b-[5px] relative shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <img
              src={product.imageUrl}
              className="rounded-[5px] w-full h-fit bg-cover"
            />
            <div className="rounded-b-[5px] text-white p-[4px_12px] absolute bottom-0 bg-black/ backdrop-blur-xs w-full">
              <p className="text-sm font-medium">{product.productName}</p>
              <p className="text-xs">${product.price}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  )
}

export default ProductGrid
