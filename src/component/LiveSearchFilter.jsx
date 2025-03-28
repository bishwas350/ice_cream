import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const LiveSearchFilter = ({
  data = [],
  onSearch,
  placeholder = 'Search...',
  debounceTime = 300,
  minChars = 2,
  renderItem,
  className = ''
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Debounce the search function
  const debouncedSearch = useCallback(
    debounce((term) => {
      if (term.length >= minChars) {
        setIsSearching(true);
        if (onSearch) {
          onSearch(term);
        } else {
          const results = data.filter(item =>
            Object.values(item).some(val =>
              String(val).toLowerCase().includes(term.toLowerCase())
            )
          );
          setFilteredData(results);
        }
        setIsSearching(false);
      } else {
        setFilteredData([]);
      }
    }, debounceTime),
    [data, debounceTime, minChars, onSearch]
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
    return () => debouncedSearch.cancel();
  }, [searchTerm, debouncedSearch]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      {isSearching && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
        </div>
      )}
      
      {searchTerm.length >= minChars && filteredData.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto">
          {filteredData.map((item, index) => (
            renderItem ? (
              renderItem(item, index)
            ) : (
              <div 
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {JSON.stringify(item)}
              </div>
            )
          ))}
        </div>
      )}
      
      {searchTerm.length >= minChars && !isSearching && filteredData.length === 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 px-4 text-gray-500">
          No results found
        </div>
      )}
    </div>
  );
};

// Debounce helper function
function debounce(func, wait) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.cancel = () => clearTimeout(timeout);
  return debounced;
}

LiveSearchFilter.propTypes = {
  data: PropTypes.array,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  debounceTime: PropTypes.number,
  minChars: PropTypes.number,
  renderItem: PropTypes.func,
  className: PropTypes.string
};

export default LiveSearchFilter;