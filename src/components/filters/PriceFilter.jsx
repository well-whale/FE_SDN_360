import React, { useState, useEffect } from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

const PriceFilter = ({
  isPriceOpen,
  setIsPriceOpen,
  minPrice,
  maxPrice,
  priceRange,
  setPriceRange,
}) => {
  const [localRange, setLocalRange] = useState(priceRange)

  useEffect(() => {
    setLocalRange(priceRange)
  }, [priceRange])

  const handleSliderChange = (value) => {
    setLocalRange(value)
  }

  const applyFilter = () => {
    setPriceRange(localRange)
    setIsPriceOpen(false)
  }

  const resetFilter = () => {
    setLocalRange(priceRange)
    setPriceRange([minPrice, maxPrice])
    setIsPriceOpen(false)
  }

  return (
    <div className="relative">
      <div
        className="p-[5px_10px] border shadow-lg flex"
        onClick={setIsPriceOpen}
      >
        Price
      </div>
      {isPriceOpen && (
        <div className="flex flex-col gap-[5px] whitespace-nowrap absolute z-50 border shadow-lg p-[5px_10px] bg-white">
          <Slider
            range
            min={minPrice}
            max={maxPrice}
            value={localRange}
            onChange={handleSliderChange}
            tipFormatter={(value) => `$${value}`}
          />

          <div className="flex gap-2">
            <span>{localRange[0]}</span>
            <span>-</span>
            <span>{localRange[1]}</span>
          </div>

          <div className="flex gap-3">
            <button
              className="border p-[5px_10px] hover:text-gray-300"
              onClick={applyFilter}
            >
              Apply
            </button>
            <button
              className="border p-[5px_10px] hover:text-gray-300"
              onClick={resetFilter}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PriceFilter
