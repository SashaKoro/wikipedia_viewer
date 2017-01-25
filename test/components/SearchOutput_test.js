import { renderComponent, expect } from '../test_helper';
import SearchOutput from '../../src/components/SearchOutput';

describe('SearchOutput', () => {
  let component;
  beforeEach(() => {
    const props = { search: ['test', ['name', '2nd', '3rd'], ['description', '2nd', '3rd'], ['url', 'url', 'url']]};
    component = renderComponent(SearchOutput, null, props);
  });
  it("shows 10 TD's", () => {
    expect(component.find('td').length).to.equal(10);
  });
  it('contains data passed to it', () => {
    expect(component).to.contain('name');
    expect(component).to.contain('description');
  })
});
