import React from 'react';

const Mock = (props) => {
  /* eslint-disable react/prop-types */
  const { isOpen, children, onClick, ...rest } = props;
  /* eslint-enable react/prop-types */
  return (
    <div {...rest}>
      <button onClick={onClick}>click</button>
      {children}
    </div>
  );
};

export default class DropdownColorExample extends React.Component {
  state = {
    dropdownOpen: false,
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <Mock isOpen={this.state.dropdownOpen} onClick={this.toggle}>
        <div>
          Dropdown
        </div>
        <ul>
          <li>Header</li>
          <li>Action</li>
          <li>Another Action</li>
          <li>Another Action</li>
        </ul>
      </Mock>
    );
  }
}
