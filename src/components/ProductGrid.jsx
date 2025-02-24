function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.product_id}
            className="border border-gray-300 bg-white rounded-sm hover:-translate-y-1 duration-300"
          >
            <img src={product.imageUrl} className="rounded-t-sm" />
            <div className="p-2.5">
              <p className="text-sm font-medium">{product.productName}</p>
              <p className="text-red-500">${product.price}</p>
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
