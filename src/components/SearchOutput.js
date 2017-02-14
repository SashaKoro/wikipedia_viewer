import React from 'react';
import SearchList from './SearchList';

const SearchOutput = ({ stuff }) => {
  return(
    <table className="SearchOutput table table-hover">
      <tbody>
        <SearchList results={stuff} />
      </tbody>
    </table>
  );
}

export default SearchOutput;
