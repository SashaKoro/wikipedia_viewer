import { expect } from '../test_helper';
import SearchReducer from '../../src/reducers/search_reducer';
import {SEARCH_WIKIPEDIA} from '../../src/actions/index';

describe('SearchReducer', () => {
  it('handles action with an unknown type', () => {
    expect(SearchReducer(undefined, {})).to.be.instanceof(Array);
  });
  it('handles action of type SAVE_COMMENT', () => {
    const call = SearchReducer('search', SEARCH_WIKIPEDIA);
    expect(call).to.equal('search');
  })
});
