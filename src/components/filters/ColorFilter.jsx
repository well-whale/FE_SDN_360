import React, { useState, useEffect } from "react"

const ColorFilter = ({
  isColorOpen,
  setIsColorOpen,
  colorOptions,
  selectedColors,
  setFilters,
}) => {
  const [localSelection, setLocalSelection] = useState(selectedColors)

  useEffect(() => {
    setLocalSelection(selectedColors)
  }, [selectedColors])

  const toggleOption = (option) => {
    setLocalSelection((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    )
  }

  const applyFilter = () => {
    setFilters((prev) => ({ ...prev, colors: localSelection }))
    setIsColorOpen(false)
  }

  const resetFilter = () => {
    setLocalSelection([])
    setFilters((prev) => ({ ...prev, colors: [] }))
    setIsColorOpen(false)
  }

  return (
    <div className="relative">
      <div
        className="text-sm py-[5px] rounded-sm w-[120px] border border-gray-300 bg-white cursor-pointer flex justify-center hover:bg-gray-100 duration-300"
        onClick={setIsColorOpen}
      >
        Color
      </div>

      {isColorOpen && (
        <div className="absolute z-50 border border-gray-300 bg-white rounded p-[5px_10px]">
          <ul>
            {colorOptions.map((option) => (
              <li
                key={option}
                className={`mb-[5px] border border-white hover:text-gray-300 ${
                  localSelection.includes(option) ? "font-bold" : ""
                }`}
                onClick={() => toggleOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 mt-2">
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

export default ColorFilter
