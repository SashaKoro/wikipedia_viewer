import { expect } from '../test_helper';
import { SEARCH_WIKIPEDIA, SearchWikipedia } from '../../src/actions';

describe('actions', () => {
  describe('SearchWikipedia', () => {
    it('has the right type', () => {
      const action = SearchWikipedia();
      expect(action.type).to.equal(SEARCH_WIKIPEDIA);
    });
    it('has the right payload', () => {
      const action = SearchWikipedia('hello');
     // expect(action.payload).to.equal({});
    });
  });
});
