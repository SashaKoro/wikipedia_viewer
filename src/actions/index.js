import axios from 'axios';

const ROOT_URL = 'https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&origin=*&format=json';

export const SEARCH_WIKIPEDIA = 'SEARCH_WIKIPEDIA';

export function SearchWikipedia(searchterm) {
  const url = `${ROOT_URL}&search=${searchterm}`;
  const request = axios.get(url);

  return {
    type: SEARCH_WIKIPEDIA,
    payload: request
  };
}
