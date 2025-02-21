import React from "react"

const SearchBar = ({
  searchTerm,
  handleSearch,
  searchResults,
  isSearchVisible,
  handleProductClick,
}) => {
  return (
    <div>
      <div className="relative w-[320px]">
        <input
          type="text"
          placeholder="Search for a product"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-[302px] rounded-[5px] m-4 border bg-[#FAFCFD] border-t-[#E1E6EA] border-l-[#E1E6EA] border-r-[#E1E6EA] border-b-[#868686] p-[3px_10px] outline-none focus:bg-white"
        />
        <i className="text-[#595959] text-xs fas fa-search absolute top-[50%] right-[16px] transform -translate-y-[50%]"></i>
      </div>

      {isSearchVisible && searchTerm && (
        <div className="absolute left-4 top-12 border border-gray-300 shadow-lg bg-white z-10 rounded-[5px]">
          {searchResults.length > 0 && (
            <ul>
              {searchResults.map((product) => (
                <li
                  key={product.id}
                  className="hover:bg-gray-100 p-[3px_10px]"
                  onClick={() => handleProductClick(product)}
                >
                  <strong>{product.productName}</strong>
                  <p>{product.productDescription}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar
