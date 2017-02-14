import React from 'react';
import SearchListItem from './SearchListItem';
import _ from 'lodash';


const SearchList = ({results}) => {
    if (!results[0]) {
      return <tr></tr>
    }
    let formattedArray = [];

    for (let i = 0; i < 10; i++) {
      formattedArray.push(results[1][i], results[2][i], results[3][i]);
    }

    let finalArray = _.chunk(formattedArray, 3);

    return(
      <thead>
        {finalArray.map((eachItem, index) =>
          <SearchListItem
            term={eachItem[0]}
            description={eachItem[1]}
            url={eachItem[2]}
            key={index}
            />
        )}
      </thead>
    );
  };


export default SearchList;
