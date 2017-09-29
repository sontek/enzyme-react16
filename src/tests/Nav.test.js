import React from 'react';
import { mount } from 'enzyme';

import Nav from '../Nav';

const renderComponent = (props = {}) => mount(
  <Nav {...props} />
);

describe('<Nav />', () => {
  it('should add class .active to button onToggleLive', () => {
    const renderedComponent = renderComponent();
    const btn = renderedComponent.find('button[data-name="btn-on-toggle-live"]');
    btn.simulate('click');
    expect(btn.hasClass('active')).toBe(true);
  });
});
