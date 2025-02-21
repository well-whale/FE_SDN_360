import { useState } from "react"
import SearchBar from "../../components/SearchBar"
import Filters from "../../components/filters/Filters"
import { Rate } from "antd"
import CommentSection from "../../components/CommentSection"
import productsData from "../../data/productsData"
import ProductGrid from "../../components/ProductGrid"

function ProductList() {
  const [productList, setProductList] = useState(productsData) // Renamed state
  const [filters, setFilters] = useState({
    colors: [],
    materials: [],
    sizes: [],
  })
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [rating, setRating] = useState(0)

  const handleRating = (value) => {
    setRating(value)
  }

  const handleSearch = (term) => {
    setSearchTerm(term)

    if (term === "") {
      setSelectedProduct(null)
      setSearchResults([])
      return
    }

    const results = productList.filter((product) =>
      product.productName.toLowerCase().includes(term.toLowerCase()) ||
      product.productDescription.toLowerCase().includes(term.toLowerCase())
    )

    setSearchResults(results)
    setIsSearchVisible(true)
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setIsSearchVisible(false)
  }

  const filteredProducts = productList.filter((product) => {
    const colorMatch =
      filters.colors.length === 0 || filters.colors.includes(product.color)
    const materialMatch =
      filters.materials.length === 0 || filters.materials.includes(product.material)
    const sizeMatch =
      filters.sizes.length === 0 || filters.sizes.includes(product.size)
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1]
    return colorMatch && materialMatch && sizeMatch && priceMatch
  })

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        searchResults={searchResults}
        isSearchVisible={isSearchVisible}
        handleProductClick={handleProductClick}
      />
      <Filters
        products={productList}
        filters={filters}
        setFilters={setFilters}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <Rate allowHalf onChange={handleRating} />
      {rating}/5
      <CommentSection />
      <div>
        {selectedProduct ? (
          <div>
            <h4>Search results for: {searchTerm}</h4>
            <p>
              <strong>{selectedProduct.productName}</strong>
            </p>
            <p>{selectedProduct.productDescription}</p>
          </div>
        ) : (
          <ProductGrid products={filteredProducts} /> 
        )}
      </div>
    </>
  )
}

export default ProductList
