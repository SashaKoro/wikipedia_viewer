import {SEARCH_WIKIPEDIA} from '../actions/index';


export default function(state = [,[],[],[]], action) {
  switch (action.type) {
    case SEARCH_WIKIPEDIA:
      return action.payload.data;
  }
  return state;
}
