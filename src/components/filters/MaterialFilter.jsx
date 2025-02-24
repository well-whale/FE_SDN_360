import React, { useState, useEffect } from "react"

const MaterialFilter = ({
  isMaterialOpen,
  setIsMaterialOpen,
  materialOptions,
  selectedMaterials,
  setFilters,
}) => {
  const [localSelection, setLocalSelection] = useState(selectedMaterials)

  useEffect(() => {
    setLocalSelection(selectedMaterials)
  }, [selectedMaterials])

  const toggleOption = (option) => {
    setLocalSelection((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    )
  }

  const applyFilter = () => {
    setFilters((prev) => ({ ...prev, materials: localSelection }))
    setIsMaterialOpen(false)
  }

  const resetFilter = () => {
    setLocalSelection([])
    setFilters((prev) => ({ ...prev, materials: [] }))
    setIsMaterialOpen(false)
  }

  return (
    <div className="relative">
      <div
        className="text-sm py-[5px] rounded-sm w-[120px] border border-gray-300 bg-white cursor-pointer flex justify-center hover:bg-gray-100 duration-300"
        onClick={setIsMaterialOpen}
      >
        Materials
      </div>

      {isMaterialOpen && (
        <div className="absolute z-50 border border-gray-300 bg-white rounded p-[5px_10px]">
          <ul>
            {materialOptions.map((option) => (
              <li
                key={option}
                className={`mb-[5px] border border-white hover:text-gray-300 ${
                  localSelection.includes(option) ? "font-bold" : ""
                }`}
              >
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localSelection.includes(option)}
                    onChange={() => toggleOption(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
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

export default MaterialFilter
