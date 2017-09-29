import React from 'react';
import { mount } from 'enzyme';
import DropdownColorExample from '../DropdownColorExample';

const renderComponent = (props = {}) => mount(
  <DropdownColorExample {...props} />
);

describe('<DropdownColorExample />', () => {
  it('should render an <DropdownColorExample> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('DropdownColorExample').length).toBe(1);
  });
  it('should change state when button is clicked', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Mock').props().isOpen).toBe(false);
    renderedComponent.find('button').at(0).simulate('click');
    expect(renderedComponent.find('Mock').props().isOpen).toBe(true);
  });
  it('should change state when button is clicked', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Mock').prop('isOpen')).toBe(false);
    renderedComponent.find('button').at(0).prop('onClick')();
    expect(renderedComponent.find('Mock').prop('isOpen')).toBe(true);
  });
});
