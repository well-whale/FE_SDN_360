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
        className="text-sm py-[5px] rounded-sm w-[120px] border border-gray-300 bg-white cursor-pointer flex justify-center hover:bg-gray-100 duration-300"
        onClick={setIsPriceOpen}
      >
        Price
      </div>
      {isPriceOpen && (
        <div className="flex flex-col gap-[5px] whitespace-nowrap absolute z-50 p-[5px_10px] border border-gray-300 bg-white rounded">
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
              className="text-sm py-[5px] rounded-sm w-[120px] border border-gray-300 bg-white cursor-pointer flex justify-center hover:bg-gray-100 duration-300"
              onClick={applyFilter}
            >
              Apply
            </button>
            <button
              className="text-sm py-[5px] rounded-sm w-[120px] border border-gray-300 bg-white cursor-pointer flex justify-center hover:bg-gray-100 duration-300"
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
