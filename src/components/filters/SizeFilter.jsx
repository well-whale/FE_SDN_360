import React, { useState, useEffect } from "react";

const SizeFilter = ({
  isSizeOpen,
  setIsSizeOpen,
  sizeOptions,
  selectedSizes,
  setFilters,
}) => {
  const [localSelection, setLocalSelection] = useState(selectedSizes);

  useEffect(() => {
    setLocalSelection(selectedSizes);
  }, [selectedSizes]);

  const toggleOption = (option) => {
    setLocalSelection((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const applyFilter = () => {
    setFilters((prev) => ({ ...prev, sizes: localSelection }));
    setIsSizeOpen(false);
  };

  const resetFilter = () => {
    setLocalSelection([]);
    setFilters((prev) => ({ ...prev, sizes: [] }));
    setIsSizeOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="p-[5px_10px] border shadow-lg cursor-pointer"
        onClick={setIsSizeOpen}
      >
        Sizes
      </div>

      {isSizeOpen && (
        <div className="whitespace-nowrap absolute z-50 border shadow-lg p-[5px_10px] bg-white">
          <ul>
            {sizeOptions.map((option) => (
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
  );
};

export default SizeFilter;
