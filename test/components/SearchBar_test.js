import { renderComponent, expect } from '../test_helper';
import SearchBar from '../../src/components/SearchBar';

describe('SearchBar', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SearchBar);
  });
  it('has an input area', () => {
    expect(component.find('input')).to.exist;
  });
  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });
  it('has an anchor-tag', () => {
    expect(component.find('a')).to.exist;
  });
  describe('entering search term', () => {
    beforeEach(() => {
      component.find('input').simulate('change', 'search term');
    });
    it('shows the search text in input', () => {
      expect(component.find('input')).to.have.value('search term');
    });
  });
});
