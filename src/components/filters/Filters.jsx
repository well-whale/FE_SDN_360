import React, { useState } from "react"
import ColorFilter from "./ColorFilter"
import MaterialFilter from "./MaterialFilter"
import SizeFilter from "./SizeFilter"
import PriceFilter from "./PriceFilter"

const Filters = ({
  products,
  filters,
  setFilters,
  priceRange,
  setPriceRange,
}) => {
  const [openFilters, setOpenFilters] = useState({
    color: false,
    material: false,
    size: false,
    price: false,
  })

  const colorOptions = [...new Set(products.map((product) => product.color))]
  const materialOptions = [
    ...new Set(products.map((product) => product.material)),
  ]
  const sizeOptions = [...new Set(products.map((product) => product.size))]

  const minPrice = Math.min(...products.map((p) => p.price), 0)
  const maxPrice = Math.max(...products.map((p) => p.price), 1000)

  const handleFilterToggle = (category) => {
    setOpenFilters((prev) => ({
      color: category === "color" ? !prev.color : false,
      material: category === "material" ? !prev.material : false,
      size: category === "size" ? !prev.size : false,
      price: category === "price" ? !prev.price : false,
    }));
  };  

  return (
    <div className="m-4 flex gap-3">
      <ColorFilter
        isColorOpen={openFilters.color}
        setIsColorOpen={() => handleFilterToggle("color")}
        colorOptions={colorOptions}
        selectedColors={filters.colors}
        setFilters={setFilters}
      />

      <MaterialFilter
        isMaterialOpen={openFilters.material}
        setIsMaterialOpen={() => handleFilterToggle("material")}
        materialOptions={materialOptions}
        selectedMaterials={filters.materials}
        setFilters={setFilters}
      />

      <SizeFilter
        isSizeOpen={openFilters.size}
        setIsSizeOpen={() => handleFilterToggle("size")}
        sizeOptions={sizeOptions}
        selectedSizes={filters.sizes}
        setFilters={setFilters}
      />

      <PriceFilter
        isPriceOpen={openFilters.price}
        setIsPriceOpen={() => handleFilterToggle("price")}
        minPrice={minPrice}
        maxPrice={maxPrice}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
    </div>
  )
}

export default Filters
