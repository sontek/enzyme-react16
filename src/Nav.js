import React from 'react';

export default class CustomizerNav extends React.PureComponent {
  state = {
    isLive: false,
  };

  onToggleLive = () => {
    this.setState({
      isLive: !this.state.isLive,
    });
  }

  render() {
    return (
      <div>
        <button data-name="btn-on-toggle-live" className={this.state.isLive ? 'active' : null} onClick={this.onToggleLive}>Live</button>
      </div>
    );
  }
}
