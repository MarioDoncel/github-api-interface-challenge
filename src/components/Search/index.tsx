import React from 'react';

import { SearchContainer } from './styles';

const Search: React.FC = () => {
  return (
    <SearchContainer>
        <input type="text" />
        <button>
            Search
        </button>
    </SearchContainer>
    )
}

export default Search;