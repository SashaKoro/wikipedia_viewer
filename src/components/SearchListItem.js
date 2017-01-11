import React from 'react';

const SearchListItem = ({url, term, description}) => {
  return(
    <tr>
      <th><a href={url}>{term}</a></th>
      <td><a href={url}>{description}</a></td>
    </tr>
  );
};

export default SearchListItem;
