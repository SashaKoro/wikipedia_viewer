import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });
  it('shows a SearchBar', () => {
    expect(component.find('.SearchBar')).to.exist;
  });
  it('shows a SearchOutput', () => {
    expect(component.find('.SearchOutput')).to.exist;
  })
});
